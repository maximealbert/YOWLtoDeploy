<template>

  <body>

    <h1 id="title">Post a comment</h1>

    <!-- bloc that contains all the comment -->
    <div class="mainbloc">

      <div id="inputforurldiv">
        <input id="inputforurl" v-model="inputurltext" placeholder="Enter the URL of the commented site">
      </div>

      <div id="bottomdiv">


        <div id="leftdiv">

          <div class="leftdivdiv">
            <p style="color: #4D25DA; font-size: 25px">Note:</p>
            <div id="starratingselector">

              <button class="selector one" v-on:click="buttonOne">1</button>
              <button class="selector two" v-on:click="buttonTwo">2</button>
              <button class="selector three" v-on:click="buttonThree">3</button>
              <button class="selector four" v-on:click="buttonFour">4</button>
              <button class="selector five" v-on:click="buttonFive">5</button>


            </div>
          </div>

          <div class="leftdivdiv" id="imageselector">
            <p style="color: #4D25DA; font-size: 25px">Add a media </p>
            <p style="color: #A395FF; font-size: 20px">(optional)</p>

            <div id="plusbutton">
                <p id="plusbuttonimage">+</p>
            </div>

          </div>

        </div>

        <div id="rightdiv" class="leftdivdiv">
          <input placeholder="Title" v-model="title">
          <input placeholder="Description" v-model="description" id="descriptioninput">
        </div>

      </div>

      <button id="postbutton" v-on:click="postComment">Post</button>


    </div>

  </body>


</template>


<script>

export default {
  components: {

  },
  name: 'post-a-comment-website',
  data () {
    return {
      inputurltext : '',
      title : '',
      description : '',
      selectedRating : 0,
    }

  },

  methods:{
    buttonOne(){
      this.selectedRating = 1
    },
    buttonTwo(){
      this.selectedRating = 2
    },
    buttonThree(){
      this.selectedRating = 3
    },
    buttonFour(){
      this.selectedRating = 4
    },
    buttonFive(){
      this.selectedRating = 5
    },

    async postComment(){

      let data = {
        "currentuuid" : localStorage.getItem("usertoken"),
        "comment" : this.description,
        "url" : this.inputurltext,
        "title" : this.title,
        "note" : this.selectedRating,

      }

      await fetch('http://localhost:8080/postcomment', {
        method : 'POST',
        headers : {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:8080'
        },
        body : JSON.stringify(data)
      }).then(()=>{
        this.$router.push('/')
      })

    }
  }

}

</script>

<style scoped>

#title{
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 5px 10px rgba(66, 24, 217, 0.1);
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
}

.mainbloc{
  background-color: #f5f5f5;
  margin: 5% 15%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

}

#inputforurldiv{
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 1%;
}

#inputforurldiv > input{

  all : unset;
  width: 80%;
  border-radius: 10px;
  height: 40px;
}

#bottomdiv{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

#leftdiv{
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 4%;
}

.leftdivdiv {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 5%;
  align-items: center;
  text-align: center;
  margin: 3% 0%;
}

p{
  font-family: 'Poppins', sans-serif;
}

::placeholder{
  font-family: 'Poppins', sans-serif;
}

#plusbutton{
  height: 60px;
  width: 60px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: #CBC3FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 2%;
}

#imageselector{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#plusbuttonimage{

  color: white;
  font-size: 35px;

}

#rightdiv{
  height: 100%;
  background-color: white;
  width: 60%;
  margin-left: 5%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

#rightdiv > input {

  all: unset;
  width: 100%;
  margin: 2%;
}

#descriptioninput{
  height: 80%;
}

#postbutton{

  border : transparent 0px solid;
  background: rgba(66, 24, 217, 0.86);
  color: white;
  padding: 2%;
  font-family: 'Poppins', sans-serif;
  width: 15%;
  font-size: 25px;
  align-items: center;
  margin: 2% auto 0 auto;
  border-radius: 10px;
}


</style>