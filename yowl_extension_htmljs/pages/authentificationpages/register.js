

document.addEventListener("DOMContentLoaded", ()=>{

    //TODO: error with the require


    async function registerUser(){

        let firstname = document.getElementById('firstname').value
        let lastname = document.getElementById('lastname').value
        let email = document.getElementById('inputsforlogin').value
        let password = document.getElementById('password').value
        let passwordconfirmation = document.getElementById('passwordconfirmation').value

        if (passwordconfirmation === password && email && firstname && lastname){
            // The passwords are the same, and there is an email, a last name and a firstname provided - the account can be created
            let data = {
                "firstname" : firstname,
                "lastname" : lastname,
                "email" : email,
                "password" : password
            }

            await fetch('http://localhost:8080/createuser', {
                method : 'POST',
                headers : {
                    'content-type': 'application/json',
                },
                body : JSON.stringify(data)

            }).then(response=>response.json())
                .then(data => {console.log(data.token); localStorage.setItem("usertoken", data.token); window.location.href = '../homepage/homepage.html';})

        }

    }

    document.getElementById('continuepara').addEventListener("click", registerUser)

})