const express = require('express');
const cors = require("cors");
const app = express()

require('dotenv').config()

module.exports = function(app){

    const controller = require('../database_configuration/controller.cjs')

    app.route('/').get(controller.getallcomments)

    app.route('/likecomment').post(controller.likecomment)

    app.route('/dislikecomment').post(controller.dislikecomment)

    app.route('/createuser').post(controller.createuser)

    app.route('/authentificateuser').post(controller.login)

    app.route('/getcommentsforuser').post(controller.getCommentsForUserWithId)

    app.route('/getuserprofile').post(controller.getUserInformations)

    app.route('/getcommentsfromurl').post(controller.getCommentsFromURL)

    app.route('/postcomment').post(controller.postacomment)

    app.route('/getcommentsthatcontainsurl').post(controller.getcommentscontainsurl)

    app.route('/updateuserinformations').post(controller.updateUser)

}