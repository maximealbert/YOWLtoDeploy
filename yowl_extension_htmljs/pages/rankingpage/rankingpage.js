document.addEventListener("DOMContentLoaded", ()=>{

    // Get the user informations
    async function getUserInfoUpdatePage(){

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
        let profilepicture = document.getElementsByClassName('profileicon')[0]
        profilepicture.src = res[0].imageurl

        let menuprofilepicture = document.getElementsByClassName('profileicon')[1]
        menuprofilepicture.src = res[0].imageurl

        // Update the name
        let name = document.getElementById('username')
        name.innerHTML = res[0].firstname + res[0].lastname

        // Update the username
        let username  = document.getElementById('username')
        username.innerHTML = '@'+res[0].firstname + '_'+res[0].lastname


    }

    // Call the function to update the view with the good user information
    getUserInfoUpdatePage()


    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        sidenav.classList.add("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        sidenav.classList.remove("active");
    }



})