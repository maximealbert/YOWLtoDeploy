<template>
  <table>
    <tr>
      <td class="ranking">1</td>
      <td class="website_title">Apple.com</td>
      <td class="comments">2,462 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.3%</p>
      </td>
    </tr>
    <tr class="even_line">
      <td class="ranking">2</td>
      <td class="website_title">Google.com</td>
      <td class="comments">2,168 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.1%</p>
      </td>
    </tr>
    <tr>
      <td class="ranking">3</td>
      <td class="website_title">Instagram.com</td>
      <td class="comments">1,861 comments</td>
      <td class="trends">
        <img class="decrease" src="../../public/decrease-arrow.png" alt="decrease arrow">
        <p class="trends_decrease">-0.2%</p>
      </td>
    </tr>
    <tr class="even_line">
      <td class="ranking">4</td>
      <td class="website_title">Youtube.com</td>
      <td class="comments">1,648 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.5%</p>
      </td>
    </tr>
    <tr>
      <td class="ranking">5</td>
      <td class="website_title">Twitter.com</td>
      <td class="comments">1,561 comments</td>
      <td class="trends">
        <img class="decrease" src="../../public/decrease-arrow.png" alt="decrease arrow">
        <p class="trends_decrease">-0.1%</p>
      </td>
    </tr>
    <tr class="even_line">
      <td class="ranking">6</td>
      <td class="website_title">Netflix.com</td>
      <td class="comments">1,316 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">-0.3%</p>
      </td>
    </tr>
    <tr>
      <td class="ranking">7</td>
      <td class="website_title">Lemonde.com</td>
      <td class="comments">1,198 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.2%</p>
      </td>
    </tr>
    <tr class="even_line">
      <td class="ranking">8</td>
      <td class="website_title">Wikipedia.com</td>
      <td class="comments">1,103 comments</td>
      <td class="trends">
        <img class="decrease" src="../../public/decrease-arrow.png" alt="decrease arrow">
        <p class="trends_decrease">-0.2%</p>
      </td>
    </tr>
    <tr>
      <td class="ranking">9</td>
      <td class="website_title">Amazon.com</td>
      <td class="comments">984 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.2%</p>
      </td>
    </tr>
    <tr class="even_line">
      <td class="ranking">10</td>
      <td class="website_title">Pinterest.com</td>
      <td class="comments">895 comments</td>
      <td class="trends">
        <img class="increase" src="../../public/increase-arrow.png" alt="increase arrow">
        <p class="trends_increase">+0.1%</p>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "BoardComponent"
}
</script>

<style>

table {
  width: 80%;
  height: 744px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  margin: auto;
  margin-bottom: 50px;
}

.even_line {
  background: rgba(223, 218, 255, 0.31);
}

table img {
  width: 9%;
  height: 8%;
  margin-right: 8px;
}

.ranking {
  width: 10%;
  height: 43px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #A395FF;
  padding-top: 20px;
  padding-left: 50px;
}

.website_title {
  width: 384px;
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  text-decoration-line: underline;
  color: #A395FF;
  padding-left: 50px;
}

.comments {
  width: 384px;
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  color: #A395FF;
  padding-left: 100px;
}

.trends {
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  padding-left: 50px;
}

.trends_increase {
  color: #78A55A;
}

.trends_decrease {
  color: #BB271A
}

.decrease {
  transform: rotate(90deg);
}

</style>