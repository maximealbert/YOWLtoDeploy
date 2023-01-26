document.addEventListener("DOMContentLoaded", async ()=>{


    // call the function to get all the comments about this page
    setUpFirstLaunch()

    getUserInfoUpdatePage()

    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        sidenav.classList.add("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        sidenav.classList.remove("active");
    }

    async function setUpFirstLaunch(){

        // get the url of the current tab
        chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {

            // since only one tab should be active and in the current window at once
            // the return variable should only have one entry
            var activeTab = tabs[0];
            console.log(activeTab.url)

            localStorage.setItem("activetab", activeTab.url)



            // Check if the url contains '//' else use the full url
            let url = activeTab.url.split('//')[1]

            // show the current url on the paragraph
            document.getElementById('actualwebsiteurl').innerHTML = "Site: "+ url


        // get all the notes to make the average
        let average = 0

        // get the comments from the current website
        let data = {
            "url": activeTab.url.split('//')[1]
        }

        let res = await fetch('http://localhost:8080/getcommentsfromurl', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        res = await res.json();
        console.log(res.length)

        for (let i = 0; i < res.length; i++){

            console.log("loop")

            average = average + res[i].note


            // get the main bloc for all lasts comments
            let parentbloc = document.getElementById('allcomments')

            // Create each comment

            // main bloc
            let lastcomment = document.createElement('div')
            lastcomment.classList.add('lastcomment')

            // top bar
            let topbar = document.createElement('div')
            topbar.classList.add('topbar')

            // element of the topbar
            let userprofilpicture = document.createElement('img')
            userprofilpicture.classList.add('userprofilpicture')
            userprofilpicture.src = res[i].imageurl

            let nameanddate = document.createElement('div')
            nameanddate.classList.add('nameanddate')

            // elements of the name and date div
            let authorname = document.createElement('p')
            authorname.classList.add('authorname')
            authorname.innerHTML = res[i].firstname + ' ' + res[i].lastname

            let publicationtime = document.createElement('p')
            publicationtime.classList.add('publicationtime')
            publicationtime.innerHTML = res[i].publicationdate

            nameanddate.appendChild(authorname)
            nameanddate.appendChild(publicationtime)

            topbar.appendChild(userprofilpicture)
            topbar.appendChild(nameanddate)

            lastcomment.appendChild(topbar)

            // second part of the bloc (note and paragraph)
            // Star rating system
            let notepara = document.createElement('p')
            notepara.classList.add('rating')

            let numberoffullstars = res[i].note
            let numberofemptystars = 5 - (res[i].note)

            let notetext = document.createElement('p')
            notetext.classList.add('notetext')
            notetext.innerHTML="Note:  "
            notetext.style.color = "#A395FF"
            notetext.style.fontSize = "17px"



            let starcontainer = document.createElement('div')
            starcontainer.classList.add('starcontainer')

            starcontainer.appendChild(notetext)


            for (let i = 0; i<numberoffullstars; i++){
                let fullstar = document.createElement('span')
                fullstar.classList.add('fa')
                fullstar.classList.add('fa-star')
                fullstar.classList.add('checked')

                starcontainer.appendChild(fullstar)
            }

            for (let r = 0; r < numberofemptystars; r ++){
                let emptystar = document.createElement('span')
                emptystar.classList.add('fa')
                emptystar.classList.add('fa-star')
                starcontainer.appendChild(emptystar)
            }

            lastcomment.appendChild(starcontainer)

            let commenttext = document.createElement('div')
            commenttext.classList.add('commenttext')

            let commenttextchild = document.createElement('p')
            commenttextchild.classList.add('commenttextchild')
            commenttextchild.innerHTML = res[i].comment

            commenttext.appendChild(commenttextchild)

            lastcomment.appendChild(commenttext)

            let replybutton = document.createElement('p')
            replybutton.classList.add('replybutton')
            replybutton.innerHTML = "Reply to comment"
            lastcomment.appendChild(replybutton)

            parentbloc.appendChild(lastcomment)

        }

         let averagefinal = Math.round(average / res.length)


            let starcontainer = document.createElement('div')
            starcontainer.classList.add('starcontainer')

            let numberoffullstars = averagefinal
            let numberofemptystars = 5-averagefinal


            for (let i = 0; i<numberoffullstars; i++){
                let fullstar = document.createElement('span')
                fullstar.classList.add('fa')
                fullstar.classList.add('fa-star')
                fullstar.classList.add('checked')

                starcontainer.appendChild(fullstar)
            }

            for (let r = 0; r < numberofemptystars; r ++){
                let emptystar = document.createElement('span')
                emptystar.classList.add('fa')
                emptystar.classList.add('fa-star')
                starcontainer.appendChild(emptystar)
            }

            let averagebloc = document.getElementById('averagebloc')
            averagebloc.appendChild(starcontainer)

        });

    }

    document.getElementById('postcommentdiv').addEventListener("click", async ()=>{

        let comment = document.getElementById('inputcomment').value

        let data = {
            "currentuuid" : window.localStorage.getItem("usertoken"),
            "url" : localStorage.getItem("activetab"),
            "note" : selectedstar,
            "comment" : comment
        }

        await fetch('http://localhost:8080/postcomment', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body : JSON.stringify(data)

        }).then(response=>response.json()).then(async data => {
            window.location.reload();
        })

    })




        // Get the text and the rating of the comment and post it


        // Show to the user that their comment has been posted !!


    async function getUserInfoUpdatePage(){

        let data = {
            "useruuid" : localStorage.getItem("usertoken")
        }

        let res = await fetch('http://localhost:8080/getuserprofile', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body : JSON.stringify(data)
        })

        res = await res.json();

        // Update the profile picture
        let profilepicture = document.getElementsByClassName('profileicon')
        profilepicture[0].src = res[0].imageurl
        profilepicture[1].src = res[0].imageurl

        let imagecommentbloc = document.getElementById('avatarimage')
        imagecommentbloc.src = res[0].imageurl

        // Update the name
        let username  = document.getElementsByClassName('username')
        username[0].innerHTML = '@'+res[0].firstname + '_'+res[0].lastname
        username[1].innerHTML = '@'+res[0].firstname + '_'+res[0].lastname

        // Update the username



    }

    let buttononestar = document.getElementsByClassName("onestar")[0]
    let buttontwostar = document.getElementsByClassName("twostar")[0]
    let buttonthreestar = document.getElementsByClassName("threestar")[0]
    let buttonfourstar = document.getElementsByClassName("fourstar")[0]
    let buttonfivestar = document.getElementsByClassName("fivestar")[0]


    // Get the value of the selected star
    let selectedstar = 0

    // all onclick function to all five buttons (star selector)
    buttononestar.addEventListener("click", ()=>{

        buttononestar.style.opacity = "1.0"
        buttontwostar.style.opacity = "0.5"
        buttonthreestar.style.opacity = "0.5"
        buttonfourstar.style.opacity = "0.5"
        buttonfivestar.style.opacity = "0.5"

        selectedstar = 1

    })
    buttontwostar.addEventListener("click", ()=>{

        buttononestar.style.opacity = "1.0"
        buttontwostar.style.opacity = "1.0"
        buttonthreestar.style.opacity = "0.5"
        buttonfourstar.style.opacity = "0.5"
        buttonfivestar.style.opacity = "0.5"

        selectedstar = 2

    })
    buttonthreestar.addEventListener("click", ()=>{

        buttononestar.style.opacity = "1.0"
        buttontwostar.style.opacity = "1.0"
        buttonthreestar.style.opacity = "1.0"
        buttonfourstar.style.opacity = "0.5"
        buttonfivestar.style.opacity = "0.5"

        selectedstar = 3

    })
    buttonfourstar.addEventListener("click", ()=>{

        buttononestar.style.opacity = "1.0"
        buttontwostar.style.opacity = "1.0"
        buttonthreestar.style.opacity = "1.0"
        buttonfourstar.style.opacity = "1.0"
        buttonfivestar.style.opacity = "0.5"

        selectedstar = 4

    })
    buttonfivestar.addEventListener("click", ()=>{

        buttononestar.style.opacity = "1.0"
        buttontwostar.style.opacity = "1.0"
        buttonthreestar.style.opacity = "1.0"
        buttonfourstar.style.opacity = "1.0"
        buttonfivestar.style.opacity = "1.0"

        selectedstar = 5

    })

})