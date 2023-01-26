<template>

  <body>

    <img class="settings_img" src="../../public/settingsimage.png">

    <div id="listofsettings">

      <h1>Settings</h1>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/cadenas.png" class="settinglineimage">
          <p class="settinglinepara">Privacy</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/check.png" class="settinglineimage">
          <p class="settinglinepara">Security</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/ring.png" class="settinglineimage">
          <p class="settinglinepara">Notifications</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/bonhomme.png" class="settinglineimage">
          <p class="settinglinepara">Accessibility, display and languages</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/bouee.png" class="settinglineimage">
          <p class="settinglinepara">Help</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>

      <div class="settingline">
        <div class="firstblocsetting">
          <img src="../../public/information.png" class="settinglineimage">
          <p class="settinglinepara">About</p>
        </div>
        <img class="settinglinechevron" src="../../public/right-arrow.png" alt="right-arrow">
      </div>


    </div>

  </body>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'SettingView',
  components: {
  },
  beforeMount() {

  }
}
</script>

<style scoped>

body{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 50px;
}

.settings_img {
  width: 40%;
  margin-right: 110px;
}

h1 {
  width: 50%;
  height: 31px;
  color: #7D6BF2;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 5%;
}

#listofsettings{
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  margin-right: 250px;
}

.settingline{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120%;
  margin: 3% 0 3% 0;
  padding-bottom: 2%;
  border-bottom: 1px solid #ACACAC;
}

.settinglineimage{
  height: 30px;
  width: 30px;
  margin-right: 10%;
}

p {
  color: #A395FF;
  font-size: 30px;
  /*margin-left: 10%;*/
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
}

.firstblocsetting{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.settinglinechevron{
  width: 3%;
}

</style>