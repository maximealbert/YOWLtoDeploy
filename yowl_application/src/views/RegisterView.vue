<template>
  <h1>Sign up</h1>

  <div id="mainbloc">

    <div id="signinwithservices">
      <button class="services">
        <p>Sign up with Google</p>
        <img id="logo1" src="../../public/google_logo.png" alt="Google logo">
      </button>

      <button class="services">
        <p>Sign up with Apple</p>
        <img id="logo2" src="../../public/apple_logo.png" alt="Apple logo">
      </button>
    </div>

    <div id="userinformations">
      <div class="inputsforlogin">
        <p>First name</p>
        <input class="logininput" placeholder="John" v-model="firstname" style="height: 100%">
      </div>
      <div class="inputsforlogin" style="margin-left: 2%; margin-right: 2%">
        <p>Last name</p>
        <input class="logininput" placeholder="Doe" v-model="lastname" style="height: 100%">
      </div>
      <div class="inputsforlogin">
        <p>Username</p>
        <input class="logininput" placeholder="john_doe" v-model="username" style="height: 100%">
      </div>
    </div>

    <div class="inputsforlogin">
      <p>Email</p>
      <input class="logininput" placeholder="john.doe@example.com" v-model="mailadress">
    </div>

    <div id="allpassword">
      <div class="inputsforlogin">
        <p>Password</p>
        <input class="logininput" placeholder="•••••••••••••••" v-model="password" style="margin-right: 1%" type="password">
      </div>
      <div class="inputsforlogin" style="margin-left: 1%">
        <p>Confirm password</p>
        <input class="logininput" placeholder="•••••••••••••••" v-model="confirmpassword" type="password">
      </div>
    </div>

    <button id="continuebutton" v-on:click="authentificateUser">
      <p>Continue</p>
    </button>

    <p class="alreadyaccount" v-on:click="goToLoginPage">Already have an account? Log in</p>
  </div>
</template>


<script>
export default {
  name: 'my-component',
  data() {
    return {
      mailadress:'',
      password: '',
      confirmpassword : '',
      firstname : '',
      lastname : '',
      username : ''
    }
  },
  methods: {
    async authentificateUser(){
      console.log(this.mailadress + this.password)

      let firstname = this.firstname
      let lastname = this.lastname
      let email = this.mailadress
      let password = this.password
      let passwordconfirmation = this.confirmpassword
      let username = this.username

      if (passwordconfirmation === password && email && firstname && lastname && username){
        // The passwords are the same, and there is an email, a last name and a firstname provided - the account can be created
        let data = {
          "firstname" : firstname,
          "lastname" : lastname,
          "email" : email,
          "password" : password,
          "username" : username
        }

        await fetch('http://localhost:8080/createuser', {
          method : 'POST',
          headers : {
            'content-type': 'application/json',
          },
          body : JSON.stringify(data)

        }).then(response=>response.json())
            .then(data => {console.log(data.token);
              localStorage.setItem("usertoken", data.token);
              this.$router.push('/')})

      }

    },
    goToLoginPage(){
      this.$router.push('/login')
    }
  },
}
</script>


<style>
body {
  background-color: #CBC3FF;
  width: 100%;
  align-items: center;
}

h1{
  color: #FFFFFF;
  text-shadow: 0px 5px 10px rgba(66, 24, 217, 0.1);
  font-size: 50px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.services{
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  width: 25%;
  padding: 1.5%;
  border-radius: 24px;
  box-shadow: 0px 20px 30px 5px rgba(0, 0, 0, 0.1);
}

.services > p {
  color: rgba(66, 24, 217, 0.86);
  text-shadow: 0px 5px 30px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
}

#logo1 {
  width: 8%;
  height: 88%;
  margin-left: 12px;
}

#logo2 {
  width: 7%;
  height: 94%;
  margin-left: 12px;
}

#signinwithservices{
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 2% auto;
  cursor: pointer;

}

.inputsforlogin{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  margin: 2% auto;
}

.inputsforlogin > input {
  all: unset;
  background: #FFFFFF;
  border-radius: 24px;
  height: 20%;
  padding: 3%;
}

.inputsforlogin > p {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  margin-bottom: 1%;
  font-weight: 100;
}

::placeholder{
  font-family: 'Poppins', sans-serif;
}

#continuebutton{
  all: unset;
  border-radius: 10px;
  background-color: #7D6BF2;
  padding: 2%;
  color: white;
  margin: 3% auto;
  cursor: pointer;

}

#continuebutton > p {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
}

#mainbloc{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.alreadyaccount{
  color: white;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 3%;
}

#allpassword{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  margin: 2% auto;
}

#allpassword > input {
  padding-top: 3%;
  padding-bottom: 3%;
}

#userinformations{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  margin: 2% auto;
}


</style>



