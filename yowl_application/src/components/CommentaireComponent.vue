<template>
  <div class="rectangle-commentaire">

    <div class="container-userinfo">

      <div class="leftpanel">
        <img class="profile-image" :src=userprofilepicture alt="author profile picture">

        <div class="pseudo-time">
          <div class="position-pseudo">
            <p class="pseudo">{{firstname}}{{lastname}}</p>
          </div>


          <div class="position-time-to-post">
            <h2>{{publicationdate}}</h2>
          </div>

           </div>
         </div>


        <div class="position-website">
          <a href="#">{{url}}</a>
        </div>
      </div>



    <div class="position-note">
    <div class="oldh4">Note :
      <div v-for="index in rating" :key="index" class="starsline">
        <img class="etoile" src="star-remplie.png" alt="etoile remplie">
      </div>
      <div v-for="index in ratinglessrating" :key="index" class="starsline">
        <img class="etoile" src="star.png" alt="etoile remplie">
      </div>
    </div>
  </div>



  <div class="position-nomsite">
    <h5>{{commenttitle}}</h5>
    <p class="position-txt">{{comment}}</p>

  </div>


    </div>

  <div id="postcommentdiv">
    <div id="elementinpostcommentdiv">
      <p id="buttonreply">Reply to comment</p>
      <p id="likesnumber">{{likes}}</p>
      <p id="likebutton" v-on:click="likeAComment"><img src="heart.png" id="hearticon"> </p>
    </div>

  </div>



</template>

<script>
export default {
  name: "CommentaireComponent",
  props : {
    commenttitle : {required : true, type : String},
    comment : {required : true, type : String},
    firstname : {required : true, type : String},
    lastname : {required : true, type : String},
    url : {required : true, type : String},
    likes : {required : true, type : Number},
    rating : {required : true, type : Number},
    ratinglessrating : {required : true, type : Number},
    userprofilepicture : {required : true, type : URL},
    publicationdate : {required : true, type : String},
    id : {required : true, type : Number}
  },
  methods : {
    async likeAComment(){
      let data = {
        "id" : this.id,

      }

      await fetch('http://localhost:8080/likecomment', {
        method : 'POST',
        headers : {
          'content-type': 'application/json',
        },
        body : JSON.stringify(data)
      }).then(()=>{
        this.$router.go()
      })

    }
  }
}
</script>

<style scoped>
h2{
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  color: #ACACAC;
}

a{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;

  text-decoration-line: underline;
  color: #4D25DA;
  white-space: normal;

}

.starsline{
  display: flex;
  flex-direction: row;
}

.oldh4{

  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  color: #A395FF;
  height: auto;
  width: auto;
  left: 10%;
  font-family: 'Poppins', sans-serif;

}

h5{
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 26px;
  color: rgba(66, 24, 217, 0.86);
}

p{
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 26px;
  font-family: 'Poppins', sans-serif;
  color: #4D25DA;

}

.etoile{
  width: 30px;

}

.rectangle-commentaire {
  display: flex;
  flex-direction: column;
  box-shadow:0 4px 4px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 1);
  width:1215px;
  border-radius: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 142px;
  padding: 2%;
}

.container-userinfo{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* image profile */
.profile-image{
  border-radius: 14px;
  width: 75px;
  height: 75px;
}

/* pseudo */
.pseudo{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 14px;
  color: rgba(66, 24, 217, 0.86);

}
.pseudo-time{
  flex-direction: column;
  margin-left: 5%;
}


.position-time-to-post{
  margin-top: 10%;
}

.position-website{
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  width: 500px;
  text-align: right;


}

.position-note{
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}

.position-nomsite{
  margin-top: 2%;
  font-family:'Poppins', sans-serif
}

.leftpanel{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.position-txt{
  margin-top: 3%;


}

#postcommentdiv{
  background: #E4E0FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 40px 40px;
  width: 40%;
  margin: 0 10% 0 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;
}


#buttonreply{
  color: #7D6BF2;
  padding : 2%;
  border : 1px solid #7D6BF2;
  border-radius: 10px;
  margin-right: 10%;

}

#likesnumber{
  font-family: 'Poppins', sans-serif;
  color: #7D6BF2;
  font-size: 25px;
}

#elementinpostcommentdiv{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

#hearticon{
  width: 10%;
  height: 10%;
}


</style>