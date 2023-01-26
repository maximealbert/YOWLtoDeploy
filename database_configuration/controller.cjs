require('dotenv').config();

const bcrypt = require('bcrypt')

const database = require('../database_configuration/database.cjs')

const { v4: uuidv4 } = require('uuid');

const connection = database.connection

connection.connect()

module.exports.getallcomments = function(req, res){
    connection.query('SELECT * FROM yowl_database.comments INNER JOIN yowl_database.users ON yowl_database.comments.authorid = yowl_database.users.idusers ORDER BY yowl_database.comments.publicationdate DESC;', (err, rows, field)=>{
        if (err) throw err

        res.json(rows)
    })
}


// Get comments chronologically sorted with a filter on the name

// Like a comment with comment id
module.exports.likecomment = async function(req, res){

    var numberoflikes = 0;

    await connection.query('SELECT likes FROM yowl_database.comments WHERE idcomments = ? ;',[req.body.id], (err, rows, field)=>{
        if (err) throw err

        //res.json(rows)

        numberoflikes = rows[0].likes + 1

        res.json(rows[0])


        connection.query('UPDATE `yowl_database`.`comments` SET `likes` = ? WHERE (`idcomments` = ?);',[numberoflikes, req.body.id], (err, rows, field)=>{
            res.json(field)
        })

    })


}

// Dislike a comment with comment id
module.exports.dislikecomment = async function(req, res){

    var numberoflikes = 0;

    await connection.query('SELECT likes FROM yowl_database.comments WHERE idcomments = ? ;',[req.body.id], (err, rows, field)=>{
        if (err) throw err

        //res.json(rows)

        numberoflikes = rows[0].likes - 1

        res.json(rows[0])


        connection.query('UPDATE `yowl_database`.`comments` SET `likes` = ? WHERE (`idcomments` = ?);',[numberoflikes, req.body.id], (err, rows, field)=>{
            res.json(field)
        })

    })

}


// Authentificate an user
module.exports.login = async function(req, res){

    let mailadress = req.body.email
    let password = req.body.password

    let hashedpasswordfromdb;

    // Get the hashed password from the DB
    connection.query('SELECT * FROM yowl_database.users WHERE email = ?', [mailadress], async function(err, results, fields){
        if (err) throw err

        console.log("HELLO")

        if (results.length > 0){
            hashedpasswordfromdb = await results[0]["password"]
        }else{
            //res.send("No account matching this mail adress founded")
        }
    })

    // Check if the mail adress isn't empty
    if (mailadress) {

        connection.query('SELECT * FROM yowl_database.users WHERE email = ?', [mailadress], function(error, results, fields) {

            if (error) throw error;

            if (results.length > 0) {
                console.log("User correctly logged in")

                let resulthash = bcrypt.compare(password, results[0]["password"], async function(err, result){

                    if (result === true){
                        // Good password entered
                        console.log("Good user credentials")

                        // Get the user ID
                        let userid = await results[0].idusers
                        console.log(userid + " this is the user id from login")

                        // Generate a token
                        const token = uuidv4()

                        // Once the uuid is generated, we store it in the database under the key 'currentuseruuid'
                        connection.query('UPDATE `yowl_database`.`users` SET `currentuseruuid` = ? WHERE (`idusers` = ?);',[token, results[0].idusers], async function (err, results, fields){
                            if (err) throw err
                        })

                        res.send({"token" : token})

                    }else{
                        //res.send("Error bad credentials")
                    }
                })
            } else {
                // res.send('Invalid');
            }
            //res.end();
        });
    } else {
        //res.send('Invalid');
        // res.end();
    }

}


// Create a user account
module.exports.createuser = async function(req, res){


    // Get the data from the request body
    let password = req.body.password
    let mail = req.body.email
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let newdate = new Date()

    let username = ""
    if (req.body.username){
        username = req.body.username
    }else{
        username = '@' + req.body.firstname + req.body.lastname
    }

    if (password && mail){
        // Hash the password and make the SQL Query
        await bcrypt.genSalt(5, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // Refers to the hashed password with 'hash'
                const token = uuidv4()
                connection.query('INSERT INTO `yowl_database`.`users` (`email`, `password`, `firstname`, `lastname`, `currentuseruuid`, `accountcreationdate`, `username`, `phonenumber`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',[mail, hash, firstname, lastname, token, newdate, username, "no phone provided"],  async function (err, results, fields) {
                    res.send({"token": token})
                })

            });
        });

    }
}


// Post a comment
module.exports.postacomment = async function(req, res){

    let currentuuid = req.body.currentuuid
    let comment = req.body.comment
    let url = req.body.url
    let title = ""
    if (req.body.title){
        title = req.body.title
    }else{
        title = url.split('/')[0] + " website" // capitalize the first letter of the shortened url
    }

    let note = req.body.note
    let publicationdate = new Date()

    // Get the current uuid to get the id in the users table
    connection.query('SELECT * FROM yowl_database.users WHERE currentuseruuid = ?', [currentuuid], async (err, rows, fields)=>{
        if (err) throw err

        let userid = rows[0].idusers

        // Make the SQL Query to post the comment

        // SQL QUERY : INSERT INTO `yowl_database`.`comments` (`comment`, `authorid`, `likes`, `url`, `title`, `publicationdate`, `note`) VALUES ('fruzehzeuhze', '12', '0', 'www.google.com', 'Google', '2023-12-23', '5');
        connection.query('INSERT INTO yowl_database.comments (comment, authorid, likes, url, title, publicationdate, note) VALUES (?, ?, 0, ?, ?, ?, ?)', [comment, userid, url, title, publicationdate, note], async (err, results, field)=>{
            if (err) throw err
            res.json(rows)

        })

    })

    // Insert the new comment in the comments table

    // Mandatory values for the new comment: comment
    // authorid
    // url
    // title (which is the name of the website with www and what's after the /)
    // note
    // publication date



}

// Get the comments according to the userId (profile page)
module.exports.getCommentsForUserWithId = function (req, res){
    // We get the uuid from the localStorage
    let loggedinuseruuid = req.body.useruuid;
    let selectedidforuser = -1;

    connection.query('SELECT * FROM yowl_database.users WHERE currentuseruuid = ?;',[loggedinuseruuid],async function (err, rows, field){

        if (err) throw err
        console.log(rows[0].idusers)
        selectedidforuser = await rows[0].idusers

        // Once we get the user id, we can select the comments that match this ID
        connection.query('SELECT * FROM yowl_database.comments INNER JOIN yowl_database.users ON yowl_database.comments.authorid = yowl_database.users.idusers WHERE yowl_database.comments.authorid = ? ORDER BY yowl_database.comments.publicationdate DESC ',[selectedidforuser], async function(err, results, fields){
            if (err) throw err
            res.send(results)
        })
        //res.send({"idforuser" : rows[0].idusers})

    })

}

// Get the user profile informations with the uuid from the localStorage
module.exports.getUserInformations = function(req, res){
    // We get the uuid from the localStorage
    let loggedinuseruuid = req.body.useruuid;

    connection.query('SELECT * FROM yowl_database.users WHERE currentuseruuid = ?',[loggedinuseruuid], async function(err, results, fields){
        if (err) throw err
        res.send(results)
    })

}

module.exports.getCommentsFromURL = async function( req, res ){
    let url = req.body.url
    connection.query('SELECT * FROM yowl_database.comments INNER JOIN yowl_database.users ON yowl_database.comments.authorid = yowl_database.users.idusers WHERE yowl_database.comments.url = ? ORDER BY yowl_database.comments.publicationdate DESC ',[url], function(err, results, fields){
        if (err) throw err;
        res.send(results)
    })
}


module.exports.getcommentscontainsurl = async function(req, res){

    let url = req.body.texttosearch

    const sqlquery = `SELECT * FROM yowl_database.comments INNER JOIN yowl_database.users ON yowl_database.comments.authorid = yowl_database.users.idusers WHERE url LIKE '%${url}%' ORDER BY yowl_database.comments.publicationdate DESC`

    connection.query(sqlquery, async (err, results, fields)=>{

        if (err) throw err
        res.send(results)

    })

}


module.exports.updateUser = async function (req, res){

    let mail = req.body.email
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let phonenumber = req.body.phonenumber
    let username = req.body.username
    let useruuid = req.body.uuid

    connection.query('UPDATE `yowl_database`.`users` SET `firstname` = ?, `lastname` = ?, `email` =?, `phonenumber` =?, `imageurl` = ?, `username` = ? WHERE (`currentuseruuid` =?);', [firstname, lastname, mail, phonenumber, 'https://www.planeteanimaux.com/wp-content/uploads/2020/05/Chat-noir.jpg', username, useruuid], async (err, rows, fields)=>{
        if (err) throw err
        console.log("method called")
        res.json(rows)
    })

}

