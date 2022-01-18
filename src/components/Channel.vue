<script setup>
import { ref } from 'vue';

const props = defineProps({
    channelList: Array
});

const emits = defineEmits({
    "update:selectedChannel": Number
});

const selectedChannel = ref('');
const token = ref('eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ImZhbHNlIiwiaWF0IjoiMTY0MjUxMjk2NCIsInN1YiI6ImFqYWNvYiJ9.E-7iJLetcp_-Esp3krrn59YMAZsy4bFyV-tJD3rAiO8');


function setSelectedChannel(newId){
    selectedChannel.value = newId;
}

async function createChannel(){
    //voir pour ajouter un popup pourrenseigner les champs
    // name
    // img
    json = null;
    const options = {
      method: "PUT",
      body: json,
      headers: {
        Authorization: 'Bearer '+ token.value 
      }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel', options);
    if (response.status == 200) {
        response.json().then(data => {
            selectedChannel.value = data.id;
        });
    }
}


</script>

<template>
    <section v-for="channel in channelList">
        <div :id="channel.id" @click="setSelectedChannel(channel.id)">
            <img :src="channel.img">
            <p>{{ channel.name }}</p>
        </div>
    </section>
    <section>
        <div id="createChannel" @click="createChannel">
            <img> <!-- mettre un plus -->
            <p>Créer un channel</p>
        </div>
    </section>
</template>

<style scoped>
</style>
