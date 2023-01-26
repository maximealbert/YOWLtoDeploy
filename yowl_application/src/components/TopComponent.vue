<template>
  <div class="block-fond">
    <div class="left-side">
      <img src="YOWL-removebg-preview (1).png">
      <p class="classement">Top 3</p>
    </div>

    <div class="right-side">
      <div class="top2">
        <p class="number text2">2</p>
        <h1 class="titre">{Youtube}</h1>
        <p class="like">{2345678}</p>
      </div>

      <div class="top1">
        <p class="number text1">1</p>
        <h1 class="titre">{Amazon}</h1>
        <p class="like">{234567}</p>
      </div>

      <div class="top3">
        <p class="number text3">3</p>
        <h1 class="titre">{Wikipédia}</h1>
        <p class="like">{23456}</p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "TopComponent",
}
</script>

<style scoped>


h1{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #FFFFFF;
}

.block-fond{
  display: flex;
  flex-direction: row;
  background: rgba(66, 24, 217, 0.86);
  width: 80%;
  border-radius: 50px;
}

.right-side{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 3%;
}

.left-side{
  margin-left: 7%;
  margin-right: 15%;

}

.number{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  color: #FFFFFF;
  padding-bottom: 10%;
}


.top1{
  margin-right: 3%;
  background-color: #A395FF;
  width: 222px;

  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  padding-bottom: 25%;

}

.top2{
  margin-right: 3%;
  background-color: #CBC3FF;
  width: 222px;

  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  padding-bottom: 15%;
}

.top3{
  background-color: #DFDAFF;
  width: 222px;

  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  padding-bottom: 5%;
}


.text2{
  padding-top: 4%;
  text-align: center;
}

.text1{
  padding-top: 4%;
  text-align: center;
}

.text3{
  padding-top: 4%;
  text-align: center;
}

.titre{
  text-align: center;
  padding-bottom: 10%;
}

.like{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #FFFFFF;
  padding-bottom: 20%;
  text-align: center;
}

.classement{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
  z-index: 1;
}




</style>