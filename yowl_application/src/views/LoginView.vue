<template>

  <h1>Login</h1>

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

    <div class="inputsforlogin">
      <p>Email</p>
      <input class="logininput" placeholder="john.doe@example.com" v-model="mailadress">
    </div>

    <div class="inputsforlogin">
      <p>Password</p>
      <input class="logininput" placeholder="•••••••••••••••" v-model="password">
    </div>

    <button id="continuebutton" v-on:click="authentificateUser">
      <p>Continue</p>
    </button>

    <p class="alreadyaccount" v-on:click="goToRegisterPage">You do not have an account? Sign up</p>
  </div>

</template>


<script>
export default {
  name: 'my-component',
  data() {
    return {
      mailadress:'',
      password: '',
    }
  },
  methods: {
    async authentificateUser(){

      console.log(this.mailadress + this.password)

      let enteredemailadress =  this.mailadress
      let enteredpassword = this.password

      // call the function
      let data = {
        "email" : enteredemailadress,
        "password" : enteredpassword
      }

      await fetch('http://localhost:8080/authentificateuser', {
        method : 'POST',
        headers : {
          'content-type': 'application/json',
        },
        body : JSON.stringify(data)

      }).then(response=>response.json()).then(async data => {
        console.log(data.token);
        await localStorage.setItem("usertoken", data.token);
        this.$router.push('/')
      })

    },
    goToRegisterPage(){
      this.$router.push('/register')
    }
  },
}
</script>


<style scoped>
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

.services > p {
  color: rgba(66, 24, 217, 0.86);
  text-shadow: 0px 5px 30px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
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
  border-radius: 10px;
  height: 20%;
  padding: 2%;
  border-radius: 24px;
}

.inputsforlogin > p {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  margin-bottom: 1%;
}

::placeholder{
  font-family: 'Poppins', sans-serif;
}

#continuebutton{
  all: unset;
  border-radius: 24px;
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

</style>



