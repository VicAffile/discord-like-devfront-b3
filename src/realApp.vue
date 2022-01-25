<script setup>
import Login from './components/Login.vue';
import UserList from './components/UserList.vue';
import Channel from './components/Channel.vue';
import Chat from './components/Chat.vue';
import ModalChannelVue from './components/ModalChannel.vue';
import {computed, ref} from 'vue';
import store from './store';

async function getChannel() {
  const options = {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + store.state.token 
      }
  };
  //console.log(store.state.token)
  const response = await fetch('https://edu.tardigrade.land/msg/protected/user/channels', options);
  if (response.status == 200) {
    response.json().then(data => {
        store.commit('addChannelList', data);
    });
  }
  //console.log('getChannel out')
}

getChannel();

const currentChannel = computed (() =>{
    for(let element of store.state.channelList ){
        if(element.id == store.state.selectedChannel){
            //console.log(element)
            return element ;
        }
    }
    return null;
}) 

</script>

<template>
    <Channel :channelList="store.state.channelList" />
    <Chat :channel="currentChannel" v-if="currentChannel" />
    <UserList :channel="currentChannel" v-if="currentChannel" />
</template>

<style scoped>

</style>