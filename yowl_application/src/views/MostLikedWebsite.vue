<template>
  <div class="block-top">
    <div class="left-part">
      <img src="YOWL-removebg-preview.png" alt="phone with messages and likes icon">
    </div>

      <div class="right-part">
      <h1>Most likes sites
        on Yowl </h1>

        <p>In 2022, the homepage of {Amazon}
          was the most liked with more
          than {247,000} likes !</p>

        <h2>See the whole ranking below</h2>
      </div>
  </div>

  <div class="block-middle">
   <top-componant></top-componant>
  </div>

  <div class="carrousel">
    <carrousel-component></carrousel-component>
  </div>

  <div class="tableau">
  <BoardComponent></BoardComponent>
  </div>




</template>

<script>
// @ is an alias to /src
import TopComponant from "@/components/TopComponent";
import BoardComponent from "@/components/BoardComponent";
import CarrouselComponent from "@/components/CarrouselComponent";

export default {
  name: 'MostlikedWebsite',
  components: {
    TopComponant,
    BoardComponent,
    CarrouselComponent
  }}
</script>

<style scoped>

p{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  display: flex;
  align-items: center;
  width: 667px;
  color: #7D6BF2;

}

h1{
font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  color: #FFFFFF;
  width: 735px;
}

h2{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #A395FF;
}

.block-top{
  display: flex;
  flex-direction: row;
}

.left-part{
  width: 707px;
  height: 715px;
  margin-left: 6%;
}

.right-part{
margin-top: 10%;
}

.block-middle{
  display: flex;
  justify-content: center;
}

</style>