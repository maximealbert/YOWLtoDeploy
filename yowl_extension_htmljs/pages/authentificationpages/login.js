document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("continuepara").addEventListener('click', ()=>{

        authentificateUser()


    })

    async function authentificateUser(){

        let enteredemailadress = document.getElementById('emailinput').value
        let enteredpassword = document.getElementById('passwordinput').value

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
            window.location.href = '../homepage/homepage.html';
        })

    }

})