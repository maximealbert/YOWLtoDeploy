<template>
<div class="header-global">

  <div class="button-login-signin">
  <button class="login-button" v-on:click="switchpagelogin">
    <p>Login</p>
  </button>
    <button class="login-button" v-on:click="switchpageregister">
      <p>Register</p>
    </button>
  </div>

  <div class="menu">
    <button href="#" class="togglebox" id="togglebutton" v-on:click="changeState">
      <span class="icon"></span>
    </button>
    <div class="menu-container" v-show="showMenu">
      <img src="mainlogo.png" class="mainlogomenu" v-on:click="changeState">
      <nav>
        <ul>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="accueil.png">
            <router-link to="/">Home</router-link>
          </li>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="ecrire.png">
            <router-link to="/comment">Post a comment</router-link>
          </li>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="aimer.png">
            <router-link to="/liked">Most likes sites</router-link>
          </li>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="commentaire.png">
            <router-link to="/commented">Most commented sites</router-link>
          </li>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="utilisateur.png">
            <router-link to="/profile">My profile</router-link>
          </li>
          <li class="liste-burger" v-on:click="changeState">
            <img class="img-burger" src="reglages.png">
            <router-link to="/settings">Settings</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
  <router-view/>


</template>

<script>
export default {
data() {
  return {
    showMenu: false
  }
},
methods:{
  changeState(){

    let button = document.getElementById('togglebutton')
    if (this.showMenu===true){

      button.classList.remove('buttondisabled')
      button.classList.add('togglebox')
      this.showMenu=false;
    }
    else if(this.showMenu===false){
      // hide the button

      button.classList.add('buttondisabled')
      button.classList.remove('togglebox')
      this.showMenu=true
    }
  },
  switchpagelogin(){
    this.$router.push('/login')
  },

  switchpageregister(){
    this.$router.push('/register')
  }

}}


</script>

<style>

body {
  background: linear-gradient(to right, #C4BDF2, #F2F2F2);
  margin: auto;
  width: 100%;
}

router-view{
  position: relative;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #7D6BF2FF;
}

/* button menu*/

.togglebox{
  position: absolute;
  margin: 52px;
  display: block;
  height: 52px;
  width: 52px;
  border-radius: 15px;
  border-style : none;
  left: 40px;
  top: 42px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1;


}
.icon{
  position: absolute;
  height: 4px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #7d6bf2;
}

.togglebox.active .icon{
  width: 0;
}

.buttondisabled{
  width: 0;
  height: 0;
  opacity: 0;
}


.togglebox:disabled {
  width: 0;
  height: 0;
}

.icon:before,.icon::after{
  position: absolute;
  content: '';
  height: 4px;
  width: 30px;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #7d6bf2;
  transition: 0.3s;
}
.icon:before{
  top: 12px;
}
.icon::after{
  bottom: 8px;
}

.togglebox.active .icon::before{
  width: 40px;
  transform-origin: right;
  transform: translate(-25px,4px)rotate(45deg);
}

.togglebox.active .icon::after{
  width: 40px;
  transform-origin: right;
  transform: translate(-25px,-6px)rotate(-45deg);
}


/*menu container*/
.menu-container{
  height: 70px;
  width: 70px;
  background: #ffffff;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  transition: 0.4s;
  position: relative;
  text-align: left;
  float: left;

}
.menu-container{
  height: 1001px;
  width: 423px;
}


/* images */
.img-burger{
  width: 25px;
  height: 23px;
  opacity: 50%;
  margin-right: 20px;
}

/* liste */
li{
  list-style: none;
}
li a{
  text-transform: uppercase;
  color: #D9D9D9;
}

.liste-burger{
  padding: 38px;
  font-family: 'Poppins', sans-serif;
  margin-left: 20px;
}


.menu{
  position: absolute;

}

.mainlogomenu{
  height: 169px;
  width: 213px;
  left: 105px;
  top: 47px;
}


/*css reset*/
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* fin */
.header-global{
  display: flex;
  flex-direction: column;

}

.button-login-signin{
  align-self: flex-end;
  margin-right: 32px;
  margin-top: 52px;
}

.login-button {
  margin: 21px;
  width: 139px;
  height: 52px;
  background: #4218D9;
  border-radius: 30px;
  border-style: none;
  z-index: 1;
  color: #FFFFFF;
  cursor: pointer;

}

p{
  font-family: 'Poppins', sans-serif;
}

::placeholder{
  font-family: 'Poppins', sans-serif;
}



</style>
