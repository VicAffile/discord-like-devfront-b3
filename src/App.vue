<script setup>
import { ref } from 'vue';
import Login from './components/Login.vue'
import UserList from './components/UserList.vue'

let login = ref(false);

async function loginToken(userPast) {
  const options = {
    method: "POST",
    headers: {
      Authorization: 'Bearer '+JSON.parse(localStorage.discord_like_devfront_b3).token
    }
  };
  const response = await fetch('https://edu.tardigrade.land/msg/protected/extend_session', options);
  if (response.status == 200) {
    console.log("Token valide!");
    login.value = true;
    response.json().then(data => {
      localStorage.removeItem('discord_like_devfront_b3');
      localStorage.setItem('discord_like_devfront_b3', JSON.stringify({
        username: userPast.username,
        token: data.token,
        timestamp: Date.now()
      }));
    });
  } else {
    console.log("Token éronné!");
    login.value = false;
    localStorage.removeItem('discord_like_devfront_b3');
    localStorage.setItem('discord_like_devfront_b3', JSON.stringify({
      username: "",
      token: "",
      timestamp: undefined
    }));
  }
}


if (localStorage.getItem('discord_like_devfront_b3') == undefined || localStorage.getItem('discord_like_devfront_b3') == 'null') {
  login.value = false;
  localStorage.setItem('discord_like_devfront_b3', JSON.stringify({
    username: "",
    token: "",
    timestamp: undefined
  }));
} else {
  login.value = false;
  let user = JSON.parse(localStorage.discord_like_devfront_b3); 
  console.log(user.token)
  if (Date.now() - user.timestamp < 10800000 && user.username != "") {
    loginToken(user);
  }
}

</script>

<template>
  <UserList v-if="login" />
  <Login v-else />
</template>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  --background-color: rgb(72, 76, 84);
  --primary-color: rgb(54, 57, 63);
  --secondary-color: rgb(114, 137, 218);
  --black-color: rgb(48, 51, 57);
  --white-color: rgb(238, 238, 238);

  margin: 0px;
  background-color: var(--background-color);
}
</style>
