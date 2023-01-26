document.addEventListener("DOMContentLoaded", ()=>{

    // Show all the others comments
    document.getElementById("seemorebutton").addEventListener("click", ()=>{
        console.log("BUTTON CLICKED")
        showOthersComments()
    })

    // Go to the page 'postcomment' when the user click on the 'post a comment' button
    document.getElementById('postcommentbutton').addEventListener("click", ()=>{
        window.location.href = '../postcommentpage/postcomment.html'
    })

    document.getElementById('searchbutton').addEventListener("click", ()=>{
        getCommentsMatchingUrl()
    })
    // Call this function beforeLaunch so that the two first comments are shown on the page on first launch
    showAllCommentsFirstLaunch()

    // Call this function to update the actual website paragraph
    getActualWebsite()

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

    // This function will show only the two first comments on the page
    async function showAllCommentsFirstLaunch(){

        let res = await fetch('http://localhost:8080/', {
            method : 'GET',
            headers : {
                'content-type': 'application/json',
            },
        })

        res = await res.json();
        console.log(res.length)

        var container_comments = document.getElementById("allcomments")

        if (res.length> 2){
            for (let i = 0; i < 2; i ++){
                let maincomment = document.createElement('div')
                maincomment.classList.add('maincomment')

                let topbarcomment = document.createElement('div')
                topbarcomment.classList.add('topbarcomment')

                let pictureandnamebloc = document.createElement('div')
                pictureandnamebloc.classList.add('pictureandnamebloc')

                let profilcommentpicture = document.createElement('img')
                profilcommentpicture.classList.add('profilcommentpicture')
                profilcommentpicture.src = res[i].imageurl

                // Append to the date name bloc

                let datenamebloc = document.createElement('div')
                datenamebloc.classList.add('datename')

                let namepara = document.createElement('p')
                namepara.classList.add('authorname')
                namepara.innerHTML = res[i].firstname + ' ' + res[i].lastname

                let datepara = document.createElement('p')
                datepara.classList.add('date')
                let onlythedate = res[i].publicationdate.split('T')[0]
                datepara.innerHTML = onlythedate

                datenamebloc.appendChild(namepara)
                datenamebloc.appendChild(datepara)

                pictureandnamebloc.appendChild(profilcommentpicture)
                pictureandnamebloc.appendChild(datenamebloc)

                let websitepara = document.createElement('p')
                websitepara.classList.add('websitepara')
                websitepara.innerHTML = res[i].url

                topbarcomment.appendChild(pictureandnamebloc)
                topbarcomment.appendChild(websitepara)

                maincomment.appendChild(topbarcomment)

                // Star rating system
                let notepara = document.createElement('p')
                notepara.classList.add('rating')

                let numberoffullstars = res[i].note
                let numberofemptystars = 5 - (res[i].note)

                let notetext = document.createElement('p')
                notetext.classList.add('notetext')
                notetext.innerHTML="Note:  "
                notetext.style.color = "#A395FF"
                notetext.style.fontSize = "17px"



                let starcontainer = document.createElement('div')
                starcontainer.classList.add('starcontainer')

                starcontainer.appendChild(notetext)


                for (let i = 0; i<numberoffullstars; i++){
                    let fullstar = document.createElement('span')
                    fullstar.classList.add('fa')
                    fullstar.classList.add('fa-star')
                    fullstar.classList.add('checked')

                    starcontainer.appendChild(fullstar)
                }

                for (let r = 0; r < numberofemptystars; r ++){
                    let emptystar = document.createElement('span')
                    emptystar.classList.add('fa')
                    emptystar.classList.add('fa-star')
                    starcontainer.appendChild(emptystar)
                }

                maincomment.appendChild(starcontainer)


                let namewebsitepara = document.createElement('p')
                namewebsitepara.classList.add('commenttitle')
                namewebsitepara.innerHTML = res[i].title

                let descriptionpara = document.createElement('p')
                descriptionpara.classList.add('descriptionpara')
                descriptionpara.innerHTML = res[i].comment


                maincomment.appendChild(namewebsitepara)
                maincomment.appendChild(descriptionpara)

                let postcommentdiv = document.createElement('div')
                postcommentdiv.classList.add('postcommentdiv')

                let postcommentpara = document.createElement('p')
                postcommentpara.classList.add('postcommentpara')
                postcommentpara.innerHTML = "Reply"

                let likes = document.createElement('p')
                likes.classList.add('likespara')
                likes.innerHTML = res[i].likes + ' likes'

                postcommentdiv.appendChild(postcommentpara)
                postcommentdiv.appendChild(likes)

                maincomment.appendChild(postcommentdiv)

                container_comments.appendChild(maincomment)

            }
        }else{
            for (let i = 0; i < res.length; i ++){

                let maincomment = document.createElement('div')
                maincomment.classList.add('maincomment')

                let topbarcomment = document.createElement('div')
                topbarcomment.classList.add('topbarcomment')

                let pictureandnamebloc = document.createElement('div')
                pictureandnamebloc.classList.add('pictureandnamebloc')

                let profilcommentpicture = document.createElement('img')
                profilcommentpicture.classList.add('profilcommentpicture')
                profilcommentpicture.src = res[i].imageurl

                // Append to the date name bloc

                let datenamebloc = document.createElement('div')
                datenamebloc.classList.add('datename')

                let namepara = document.createElement('p')
                namepara.classList.add('authorname')
                namepara.innerHTML = res[i].firstname + ' ' + res[i].lastname

                let datepara = document.createElement('p')
                datepara.classList.add('date')
                let onlythedate = res[i].publicationdate.split('T')[0]
                datepara.innerHTML = onlythedate

                datenamebloc.appendChild(namepara)
                datenamebloc.appendChild(datepara)

                pictureandnamebloc.appendChild(profilcommentpicture)
                pictureandnamebloc.appendChild(datenamebloc)

                let websitepara = document.createElement('p')
                websitepara.classList.add('websitepara')
                websitepara.innerHTML = res[i].url

                topbarcomment.appendChild(pictureandnamebloc)
                topbarcomment.appendChild(websitepara)

                maincomment.appendChild(topbarcomment)

                // Star rating system
                let notepara = document.createElement('p')
                notepara.classList.add('rating')

                let numberoffullstars = res[i].note
                let numberofemptystars = 5 - (res[i].note)

                let notetext = document.createElement('p')
                notetext.classList.add('notetext')
                notetext.innerHTML="Note:  "
                notetext.style.color = "#A395FF"
                notetext.style.fontSize = "17px"



                let starcontainer = document.createElement('div')
                starcontainer.classList.add('starcontainer')

                starcontainer.appendChild(notetext)


                for (let i = 0; i<numberoffullstars; i++){
                    let fullstar = document.createElement('span')
                    fullstar.classList.add('fa')
                    fullstar.classList.add('fa-star')
                    fullstar.classList.add('checked')

                    starcontainer.appendChild(fullstar)
                }

                for (let r = 0; r < numberofemptystars; r ++){
                    let emptystar = document.createElement('span')
                    emptystar.classList.add('fa')
                    emptystar.classList.add('fa-star')
                    starcontainer.appendChild(emptystar)
                }

                maincomment.appendChild(starcontainer)


                let namewebsitepara = document.createElement('p')
                namewebsitepara.classList.add('commenttitle')
                namewebsitepara.innerHTML = res[i].title

                let descriptionpara = document.createElement('p')
                descriptionpara.classList.add('descriptionpara')
                descriptionpara.innerHTML = res[i].comment


                maincomment.appendChild(namewebsitepara)
                maincomment.appendChild(descriptionpara)

                let postcommentdiv = document.createElement('div')
                postcommentdiv.classList.add('postcommentdiv')

                let postcommentpara = document.createElement('p')
                postcommentpara.classList.add('postcommentpara')
                postcommentpara.innerHTML = "Hello"

                postcommentdiv.appendChild(postcommentpara)

                maincomment.appendChild(postcommentdiv)



                container_comments.appendChild(maincomment)

            }
        }



    }

    // This function will show, if needed, the others comments on the page
    async function showOthersComments(){

        let res = await fetch('http://localhost:8080/', {
            method : 'GET',
            headers : {
                'content-type': 'application/json',
            },
        })

        res = await res.json();
        console.log(res.length)

        var container_comments = document.getElementById("allcomments")

        for (let i = 2; i < res.length; i ++){


            let maincomment = document.createElement('div')
            maincomment.classList.add('maincomment')

            let topbarcomment = document.createElement('div')
            topbarcomment.classList.add('topbarcomment')

            let pictureandnamebloc = document.createElement('div')
            pictureandnamebloc.classList.add('pictureandnamebloc')

            let profilcommentpicture = document.createElement('img')
            profilcommentpicture.classList.add('profilcommentpicture')
            profilcommentpicture.src = res[i].imageurl

            // Append to the date name bloc

            let datenamebloc = document.createElement('div')
            datenamebloc.classList.add('datename')

            let namepara = document.createElement('p')
            namepara.classList.add('authorname')
            namepara.innerHTML = res[i].firstname + ' ' + res[i].lastname

            let datepara = document.createElement('p')
            datepara.classList.add('date')
            let onlythedate = res[i].publicationdate.split('T')[0]
            datepara.innerHTML = onlythedate

            datenamebloc.appendChild(namepara)
            datenamebloc.appendChild(datepara)

            pictureandnamebloc.appendChild(profilcommentpicture)
            pictureandnamebloc.appendChild(datenamebloc)

            let websitepara = document.createElement('p')
            websitepara.classList.add('websitepara')
            websitepara.innerHTML = res[i].url

            topbarcomment.appendChild(pictureandnamebloc)
            topbarcomment.appendChild(websitepara)

            maincomment.appendChild(topbarcomment)

            // Star rating system
            let notepara = document.createElement('p')
            notepara.classList.add('rating')

            let numberoffullstars = res[i].note
            let numberofemptystars = 5 - (res[i].note)

            let notetext = document.createElement('p')
            notetext.classList.add('notetext')
            notetext.innerHTML="Note:  "
            notetext.style.color = "#A395FF"
            notetext.style.fontSize = "17px"



            let starcontainer = document.createElement('div')
            starcontainer.classList.add('starcontainer')

            starcontainer.appendChild(notetext)


            for (let i = 0; i<numberoffullstars; i++){
                let fullstar = document.createElement('span')
                fullstar.classList.add('fa')
                fullstar.classList.add('fa-star')
                fullstar.classList.add('checked')

                starcontainer.appendChild(fullstar)
            }

            for (let r = 0; r < numberofemptystars; r ++){
                let emptystar = document.createElement('span')
                emptystar.classList.add('fa')
                emptystar.classList.add('fa-star')
                starcontainer.appendChild(emptystar)
            }

            maincomment.appendChild(starcontainer)


            let namewebsitepara = document.createElement('p')
            namewebsitepara.classList.add('commenttitle')
            namewebsitepara.innerHTML = res[i].title

            let descriptionpara = document.createElement('p')
            descriptionpara.classList.add('descriptionpara')
            descriptionpara.innerHTML = res[i].comment

            let postcommentdiv = document.createElement('div')
            postcommentdiv.classList.add('postcommentdiv')

            let postcommentpara = document.createElement('p')
            postcommentpara.classList.add('postcommentpara')
            postcommentpara.innerHTML = "Reply"

            let likes = document.createElement('p')
            likes.classList.add('likespara')
            likes.innerHTML = res[i].likes + ' likes'

            postcommentdiv.appendChild(postcommentpara)
            postcommentdiv.appendChild(likes)



            maincomment.appendChild(namewebsitepara)
            maincomment.appendChild(descriptionpara)

            maincomment.appendChild(postcommentdiv)

            container_comments.appendChild(maincomment)
        }

    }

    // This function return the website the user is currently on
    function getActualWebsite(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            // since only one tab should be active and in the current window at once
            // the return variable should only have one entry
            var activeTab = tabs[0];
            console.log(activeTab.url)

            // Check if the url contains '//' else use the full url
            let url = activeTab.url.split('//')[1]

            document.getElementById('actualwebsiteurl').innerHTML = "You are actually on: "+ url

        });
    }


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
        let profilepicture = document.getElementsByClassName('profileicon')
        profilepicture[0].src = res[0].imageurl
        profilepicture[1].src = res[0].imageurl

        // Update the name
        let name = document.getElementById('username')
        name.innerHTML = res[0].firstname + res[0].lastname

        // Update the username
        let username  = document.getElementById('username')
        username.innerHTML = '@'+res[0].firstname + '_'+res[0].lastname

        let usernamebutton = document.getElementById('usernameclosebutton')
        usernamebutton.innerHTML = '@'+res[0].firstname + '_'+res[0].lastname
        //username[1].innerHTML = '@'+res[0].firstname + '_'+res[0].lastname


    }

    // Search with the search bar
    async function getCommentsMatchingUrl(){

        let text = document.getElementById('searchinput').value
        let data = {
            "texttosearch" : text
        }

        let res = await fetch('http://localhost:8080/getcommentsthatcontainsurl', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body : JSON.stringify(data)
        })

        res = await res.json();

        for (let i = 0; i < res.length; i ++){

            var container_comments = document.getElementById("allcomments")

            // Delete all elements

            while (container_comments.firstChild) {
                container_comments.removeChild(container_comments.firstChild);
            }


            let maincomment = document.createElement('div')
            maincomment.classList.add('maincomment')

            let topbarcomment = document.createElement('div')
            topbarcomment.classList.add('topbarcomment')

            let pictureandnamebloc = document.createElement('div')
            pictureandnamebloc.classList.add('pictureandnamebloc')

            let profilcommentpicture = document.createElement('img')
            profilcommentpicture.classList.add('profilcommentpicture')
            profilcommentpicture.src = res[i].imageurl

            // Append to the date name bloc

            let datenamebloc = document.createElement('div')
            datenamebloc.classList.add('datename')

            let namepara = document.createElement('p')
            namepara.classList.add('authorname')
            namepara.innerHTML = res[i].firstname + ' ' + res[i].lastname

            let datepara = document.createElement('p')
            datepara.classList.add('date')
            let onlythedate = res[i].publicationdate.split('T')[0]
            datepara.innerHTML = onlythedate

            datenamebloc.appendChild(namepara)
            datenamebloc.appendChild(datepara)

            pictureandnamebloc.appendChild(profilcommentpicture)
            pictureandnamebloc.appendChild(datenamebloc)

            let websitepara = document.createElement('p')
            websitepara.classList.add('websitepara')
            websitepara.innerHTML = res[i].url

            topbarcomment.appendChild(pictureandnamebloc)
            topbarcomment.appendChild(websitepara)

            maincomment.appendChild(topbarcomment)

            // Star rating system
            let notepara = document.createElement('p')
            notepara.classList.add('rating')

            let numberoffullstars = res[i].note
            let numberofemptystars = 5 - (res[i].note)

            let notetext = document.createElement('p')
            notetext.classList.add('notetext')
            notetext.innerHTML="Note:  "
            notetext.style.color = "#A395FF"
            notetext.style.fontSize = "17px"



            let starcontainer = document.createElement('div')
            starcontainer.classList.add('starcontainer')

            starcontainer.appendChild(notetext)


            for (let i = 0; i<numberoffullstars; i++){
                let fullstar = document.createElement('span')
                fullstar.classList.add('fa')
                fullstar.classList.add('fa-star')
                fullstar.classList.add('checked')

                starcontainer.appendChild(fullstar)
            }

            for (let r = 0; r < numberofemptystars; r ++){
                let emptystar = document.createElement('span')
                emptystar.classList.add('fa')
                emptystar.classList.add('fa-star')
                starcontainer.appendChild(emptystar)
            }

            maincomment.appendChild(starcontainer)


            let namewebsitepara = document.createElement('p')
            namewebsitepara.classList.add('commenttitle')
            namewebsitepara.innerHTML = res[i].title

            let descriptionpara = document.createElement('p')
            descriptionpara.classList.add('descriptionpara')
            descriptionpara.innerHTML = res[i].comment


            maincomment.appendChild(namewebsitepara)
            maincomment.appendChild(descriptionpara)

            let postcommentdiv = document.createElement('div')
            postcommentdiv.classList.add('postcommentdiv')

            let postcommentpara = document.createElement('p')
            postcommentpara.classList.add('postcommentpara')
            postcommentpara.innerHTML = "Reply"

            let likes = document.createElement('p')
            likes.classList.add('likespara')
            likes.innerHTML = res[i].likes + ' likes'

            postcommentdiv.appendChild(postcommentpara)
            postcommentdiv.appendChild(likes)

            maincomment.appendChild(postcommentdiv)

            container_comments.appendChild(maincomment)

        }


    }

})