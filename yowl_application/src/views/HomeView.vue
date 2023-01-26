<template>
  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">

    <section id="homepage">
        <div class="text">
            <h1>Add the Yowl extension for Chrome</h1>
            <p>Thanks to Yowl you can add a comment and give a note on any site where you are located and you can also see other people's comments. React to comments!</p>
            <button id="downloadbutton">Click here to add Yowl</button>
        </div>
        <div class="img_rocket">
            <img id="rotateImg270" src="ezgif.com-gif-maker-removebg-preview.png" alt="rocket" style="order: 1;">
        </div>
    </section>
<div>
    <div id="search_container">
      <div class="text-top-searchbar">
        <p id="search_title">Search a website to see these comments</p>
      </div>
        <div id="searchbarandbutton">
          <img src="loupe.png" id="searchbutton" alt="search button" v-on:click="inputChanged">
          <input class="search_input" type="text" placeholder="Search..." v-model="inputvalue">
        </div>
    </div>
</div>
  <div class="position-txt">
    <section class="last-comments">
      <h4>Last comments</h4>
      </section>
  </div>
  <div class="commentaires" v-for="comment in allcomments" :key="comment[idcomments]">
      <commentaire-component :publicationdate="(comment.publicationdate).split('T')[0]" :userprofilepicture="comment.imageurl" :rating="comment.note" :likes="comment.likes" :url="comment.url" :lastname="comment.lastname" :firstname="comment.firstname" :comment="comment.comment" :commenttitle="comment.title" :ratinglessrating="5-(comment.note)" :id="comment.idcomments"></commentaire-component>
  </div>



</template>

<script>
import CommentaireComponent from "@/components/CommentaireComponent";
export default {
  components: {
    CommentaireComponent
  },
  name: 'my-component',
  data () {
    return {
      allcomments : [],
      inputvalue : ''
    }

  },

  methods:{

    async inputChanged(){

      let data = {
        "texttosearch" : this.inputvalue
      }

      let res = await fetch('http://localhost:8080/getcommentsthatcontainsurl', {
        method : 'POST',

        headers : {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:8080/getcommentsthatcontainsurl'
        },
        body : JSON.stringify(data)
      })

      res = await res.json();

      this.allcomments = await res
    }

  },
  async beforeMount(){

    let res = await fetch('http://localhost:8080/', {
      method : 'GET',
      headers : {
        'content-type': 'application/json',
      },
    })

    res = await res.json();

    this.allcomments = await res

  }

}

</script>

<style scoped>
body {
  background: linear-gradient(to right, #C4BDF2, #F2F2F2);
  margin: auto;
  width: 100%;
}

#homepage {
  display: flex;
  align-items: center;
  text-align: start;
  justify-content: space-between;
}

#homepage img {
  height: 800px;
  float: start;
}

.img_rocket {
  overflow: hidden;
  max-width: 100%;
  width: 888px;
  height: 914px;
  left: 855px;
  top: 982px;
  padding: 0 25px;
}

.text {
  width: 40%;
  margin-left: 140px;
}

#homepage h1{
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 90px;
  line-height: 85px;
  padding-bottom: 15px;
}

#homepage p{
  color: #4218D9;
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 400;
}

#homepage button {
  background-color: #4218D9;
  margin-top: 3%;
  color: #FFF;
  font-weight: 600;
  font-size: 15px;
  border: 0;
  border-radius: 20px;
  padding: 14px 80px 14px 65px;
  background-repeat: no-repeat;
  cursor: pointer;
}

#rotateImg270 {
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

#search_title {

  display: flex;
  flex-direction: row;
  color: rgba(66, 24, 217, 0.86);
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: normal;

}

.search_input {
  height: 44px;
  width: 918px;
  border: 2px solid #7D6BF2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 40px;
  font-family: 'Poppins', sans-serif;
  padding-left: 2%;
  color: #ACACAC;
}

.last-comments h4 {
  left:10%;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  color: #4D25DA;
}


.position-txt{
  position: relative;
  margin: 2%;
}

#search_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.text-top-searchbar{
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.commentaires{
  margin-bottom: 2%;
}

#searchbarandbutton{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}

#searchbutton{
  all: unset;
  width: 4%;
  height: 4%;
  margin-right: 2%;
}

#downloadbutton{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>




