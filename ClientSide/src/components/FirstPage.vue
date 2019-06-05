<template>
  <div>
    <div class="top"></div>

    <p class="second">עושים טוב</p>

    <SignPage v-on:close="closeSignPopup()" class="ogPage" v-if="OpenSignPopup"></SignPage>
    <log-in-page v-on:close="closeLoginPopup()" class="ogPage" v-if="OpenLoginPopup"></log-in-page>

    <video width="100%" autoplay loop muted>
      <source src="../video/Pexels Videos 2957.mp4" type="video/mp4">
    </video>
    <div class="CirLine">
      <button class="cicrcle">ארוחות שבת</button>
      <button class="cicrcle">ביקור חולים</button>
      <button class="cicrcle">עזרה בבית</button>
      <button class="cicrcle">מתן בסתר</button>
      <button class="cicrcle">כתיבת טסטים</button>
      <button class="cicrcle">סיוע אחר</button>
    </div>
    <center>
      <button  id="SignBtn" @click="openSignPopup()">להרשמה</button>
      <button  id="LogInBtn" @click="openLoginPopup()">להתחברות</button>
    </center>
  </div>
</template>

<script>
import SignPage from "./SignPage.vue";
import logInPage from "./LoginPage.vue";

export default {
  name: "FirstPage",
  data() {
    return {
        OpenSignPopup: false,
      OpenLoginPopup: false
    };
  },
  components: {
    SignPage,
    logInPage
  },
  methods: {
    openSignPopup() {
      this.OpenSignPopup = true;
    },
    closeSignPopup() {
      this.OpenSignPopup = false;
    },
    openLoginPopup() {
      this.OpenLoginPopup = true;
    },
    closeLoginPopup() {
      this.OpenLoginPopup = false;
    }
  }
};
</script>

<style>
video {
  /* position: absolute; */
  position: relative;
  clip-path: inset(20% 0 21% 0);
  margin-top: -190px;
  z-index: 0;
}
.second {
  /* vertical-align: middle;    */
  font-size: 130px;
  font-family: "Assistant", sans-serif;
  color: white;
  margin-top: 190px;
  margin-left: 35%;
  position: absolute;
  z-index: 1;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.top {
  background-color: rgb(129, 0, 33);
  height: 70px;
  z-index: -1;
}
.cicrcle {
  width: 150px;
  height: 150px;
  border-radius: 200px;
  background: rgb(129, 0, 33) 100%;
  padding: 50px;
  margin-left: 100px;
  font-family: "Assistant", sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
}

.CirLine {
  margin-top: -250px;
  /* width: 100%; */
  /* background-color: #73ad21; */
  position: relative;
  z-index: 3;
}
#LogInBtn{
    margin: 20px;
  align-items: center;
  margin-top: 50px;
  z-index: 43;
  width: 350px;
  height: 60px;
  border: 3px solid rgb(129, 0, 33);
  font-family: "Assistant", sans-serif;
  font-size: 35px;
  color: rgb(129, 0, 33);
  fill-opacity: unset;
  border-radius: 25px;
}
#SignBtn {
  align-items: center;
  margin-top: 50px;
  z-index: 43;
  width: 350px;
  height: 60px;
  border: 3px solid rgb(129, 0, 33);
  font-family: "Assistant", sans-serif;
  font-size: 35px;
  color: rgb(129, 0, 33);
  fill-opacity: unset;
  border-radius: 25px;
}
#SignBtn:hover {
  background-color: whitesmoke;
  color: rgb(129, 0, 33);
}
#LogInBtn:hover {
  background-color: whitesmoke;
  color: rgb(129, 0, 33);
}
.ogPage {
  z-index: 100;
  position: absolute;
  margin: 100px;
  margin-left: 500px;
  align-self: center;
  align-items: center;
}
</style>
