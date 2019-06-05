<template>
  <div>
    <div v-if="SecsessShow" class="Mysecsess">
      <p>
        <b> נרשמת בהצלחה </b>
      </p>
      <p>...הנך מועבר לדף הבית</p>
    </div>
<div class="MyFaild" v-if="FaildShow">
   <p><b>אופס... נסה שוב</b></p>
</div>
    <center>
    <loder v-if="loder" id="lowder"></loder>
    </center>
    <div class="frame">
      <br>
      <h1>דף הרשמה</h1>
      <div class="field">
        <label class="label">שם פרטי ומשפחה</label>
        <div class="control">
          <input class="input" v-model="name" type="text" placeholder="הכנס שם מלא">
        </div>
      </div>

      <div class="field">
        <label class="label">מייל</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" v-model="mail" type="email" placeholder="הכנס מייל" value>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help"></p>
      </div>

      <div class="field">
        <label class="label">הכנס סיסמא</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="password"
            type="password"
            placeholder="הכנס סיסמא"
            value="bulma"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help"></p>
      </div>

      <div class="control has-icons-left">
        <label class="label"></label>

        <div class="select is-rounded is-fullwidth">
          <select v-model="city">
            <option selected>עיר</option>
            <option>בחר עיר</option>
            <option>With options</option>
          </select>
        </div>
        <span class="icon is-left">
          <i class="fas fa-globe"></i>
        </span>
        <button @click="sendData()" class="btnSend">תרשום אותי</button>
        <button @click="$emit('close')" class="btnC">תחזיר אותי אחורה</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loder from './loder.vue';
import { setTimeout } from 'timers';

export default {
  name: "logPage",
  components:{
    loder,
  },
  data() {
    return {
      SecsessShow: false,
      FaildShow: false,
      loder: false,
      name: "",
      mail: "",
      password: "",
      city: ""
    };
  },
  methods: {
    conectSecsess(data) {
      this.name = data;
      this.SecsessShow = true;
      setTimeout(() => {
        this.SecsessShow = false;
        this.$emit('close');
      }, 3000);
    },
    consecFaild(){
      this.FaildShow = true;
      setTimeout(() => {
        this.FaildShow = false;
      }, 3000);
    },
    async sendData() {
      if (
        this.name != "" &&
        this.mail != "" &&
        this.password != "" &&
        this.city != ""
      ) {
        this.loder = true;

        setTimeout(async() => {
          this.loder = false;
          await axios.post("http://localhost:8000/addUser", {
          name: this.name,
          mail: this.mail,
          password: this.password,
          city: this.city
        }).then(()=> this.conectSecsess()).catch(()=>this.consecFaild());

        }, 10000)
        
      }

      // const msg = await axios.get('http://localhost:8000/');
      // alert(msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame {
  width: 700px;
  height: 700px;
  border: 10px solid darkgray;
  box-shadow: 20px 20px 50px grey;
  padding: 40px;
  background-color: white;
}
div,
label,
input,
select {
  font-family: "Assistant", sans-serif;
}
h1 {
  font-family: "Assistant", sans-serif;
  font-size: 70px;
  color: brown;
}
label {
  font-size: 20px;
}
.btnSend {
  align-items: center;
  width: 250px;
  height: 50px;
  border: 3px solid rgb(0, 129, 43);
  font-family: "Assistant", sans-serif;
  font-size: 20px;
  color: rgb(0, 129, 43);
  border-radius: 25px;
  margin-left: 30px;
}
.btnC {
  align-items: center;
  width: 250px;
  height: 50px;
  border: 3px solid rgb(177, 0, 0);
  font-family: "Assistant", sans-serif;
  font-size: 20px;
  color: rgb(177, 0, 0);
  border-radius: 25px;
  margin: 20px;
  margin-top: 40px;
}
.btnC:hover {
  background-color: rgb(177, 0, 0);
  color: white;
}
.btnSend:hover {
  background-color: rgb(0, 129, 43);
  color: white;
}
#lowder{
  position:absolute;
  z-index: 100;
}
.Mysecsess {
  padding-top: 500px;
  position: absolute;
  z-index: 100;
  width: 700px;
  height: 700px;
  border: 10px solid rgba(57, 122, 57, 0.507);
  box-shadow: 20px 20px 50px grey;
  background-image: url("../img/picSecsess.png");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
p {
  font-size: 25px;
}
.MyFaild{
  padding-top: 500px;
  position: absolute;
  z-index: 100;
  width: 700px;
  height: 700px;
  border: 10px solid rgba(168, 32, 32, 0.507);
  box-shadow: 20px 20px 50px grey;
  background-image: url("../img/PicFaild.png");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
