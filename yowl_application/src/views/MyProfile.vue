<template>

  <div class="box-myprofile">
    <div class="left-part">
      <h1 class="myprofile">My profile </h1>


      <img class="image-profil" :src=profilpicturesrc alt="profile picture">

      <p class="change-profile-picture">change profil picture</p>
    </div>

    <div class="right-part">
      <div class="ligne1">
        <h2>First Name</h2>
        <input placeholder="Monica" v-model="firstnameplaceholder">

      </div>

      <div class="barre"></div>

      <div class="ligne2">
        <h2>Last Name</h2>
        <input placeholder="Smith" v-model="lastnameplaceholder">
      </div>

      <div class="barre"></div>

      <div class="ligne3">
        <h2>Username</h2>
        <input placeholder="monica_smith" v-model="usernameplaceholder">
      </div>

      <div class="barre"></div>

      <div class="ligne4">
        <h2>Email</h2>
        <input placeholder="monica.smith@example.com" v-model="mailplaceholder">
      </div>

      <div class="barre"></div>

      <div class="ligne5">
        <h2>Phone Number</h2>
        <input placeholder="Phone number" v-model="phoneplaceholder">
      </div>

    </div>

  </div>

  <div class="button">
    <button class="button-save" v-on:click="updateUser">Save Changes</button>
  </div>


</template>
<script>
// @ is an alias to /src


export default {
  name: 'MyProfile',
  components: {
  },
  data (){
    return {
      mailplaceholder : '',
      phoneplaceholder : '',
      firstnameplaceholder : '',
      lastnameplaceholder : '',
      usernameplaceholder : '',
      profilpicturesrc : ''
    }
  },
  async beforeMount() {

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
    this.profilpicturesrc = res[0].imageurl

    // Update the name
    this.firstnameplaceholder = res[0].firstname
    this.lastnameplaceholder = res[0].lastname

    // Update the username
    this.usernameplaceholder = res[0].username

    // Update the email adress
    this.mailplaceholder = res[0].email

    // Update the phone number
    if (res[0].phonenumber){
      this.phoneplaceholder = res[0].phonenumber
    }else{
      this.phoneplaceholder = "01.23.45.67.89"
    }


  },
  methods : {
    async updateUser(){

      console.log("button cliced")
      let data = {
        "email" : this.mailplaceholder,
        "phonenumber" : this.phoneplaceholder,
        "firstname" : this.firstnameplaceholder,
        "lastname" : this.lastnameplaceholder,
        "username" : this.usernameplaceholder,
        "uuid" : localStorage.getItem("usertoken")
      }

      await fetch('http://localhost:8080/updateuserinformations', {
        method : 'POST',
        headers : {
          'content-type': 'application/json',
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

p{
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #A395FF;
}

h1{
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  color: #7D6BF2;
  font-weight: 600;
}

h2{
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #7D6BF2;
  margin-right: 10%;


}

input{
  width: 30%;
  margin-right: 30%;
  border: 1px solid #DFDAFF;
}

.barre{
  height:1px;
  width:100%;
  background-color: #ACACAC;
  margin-top: 1%;
  margin-bottom: 2%;

}

.box-myprofile{
  display: flex;
  flex-direction: row;
}

.image-profil{
  border-radius: 15px;
  width: 212px;
}

.left-part{
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 20%;
}

.myprofile{
  margin-bottom: 20%;
}

.change-profile-picture{
  margin-top: 10%;
}

.ligne1{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.ligne2{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.ligne3{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.ligne4{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.ligne5{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.right-part{
  width: 50%;
  margin-right: 5%;
  margin-top: 8%;
  margin-left: 5%;
}

.button-save{
  background: rgba(66, 24, 217, 0.86);
  border-radius: 10px;
  border: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: #FFFFFF;
  width: 20%;
  height: 40%;
  padding: 1%;
}

.button{
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

::placeholder{
  font-family: 'Poppins', sans-serif;
}


</style>