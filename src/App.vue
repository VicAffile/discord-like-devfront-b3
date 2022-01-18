<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Login from './components/Login.vue';
import Channel from './components/Channel.vue';

import { ref } from 'vue';

const channelList = ref([{name: "bonjour", img: null, id:1},{name: "au revoir", img: null, id:2}]);
//const channelList = ref([]);

async function getChannel() {
  const options = {
      method: "GET",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ImZhbHNlIiwiaWF0IjoiMTY0MjUxMjk2NCIsInN1YiI6ImFqYWNvYiJ9.E-7iJLetcp_-Esp3krrn59YMAZsy4bFyV-tJD3rAiO8' 
      }
  };
  const response = await fetch('https://edu.tardigrade.land/msg/protected/user/channels', options);
  if (response.status == 200) {
      response.json().then(data => {
          console.log(data)
          channelList.value = data;
      });
  }
}

//getChannel();
</script>

<template>
  <Login />
  <Channel :channelList="channelList" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ImZhbHNlIiwiaWF0I…vYiJ9.femrt8gdtxBkzz62zzxY-8k1mppaf9NvwuR262AUvQg -->