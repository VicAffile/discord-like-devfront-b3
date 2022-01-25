<script setup>
import { ref, watchEffect } from 'vue';
import store from '../store.js';
import { watch } from 'vue';

const props = defineProps({
    channel : Object,
})

const message = ref([]);

const textInput = ref('');

async function getMessage() {
    const options = {
        method : "GET",
        headers : { Authorization : "Bearer " + store.state.token} 
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + props.channel.id + '/messages/0', options )
    if (response.status == 200){
        response.json().then(data => {
            console.log(data);
            message.value = data;
        })
    }
}

async function postMessage() {
    const regex = new RegExp("^https?:\/\/[^ ]+$");
    let json;
    console.log(textInput.value)

    if(regex.test(textInput.value)){
        json = { "Image": textInput.value };
    } else {
        json = { "Text": textInput.value };
    }
    console.log(json)
    json = JSON.stringify(json);
    const options = {
        method: "POST",
        body: json,
        headers : { 
            Authorization : "Bearer " + store.state.token,
            'Content-Type': 'application/json' 
        }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + props.channel.id + '/message', options);
    if (response.status == 200) {
        response.json().then(data => {
            textInput.value = "" ;
        });
    }
}

watch(() => props.channel, () => {getMessage()});


</script>


<template>

<section>
    <div id="channelName">
         <p v-if="channel"> {{ channel.name }} </p> 
    </div>
</section>

<section v-for="unmsg in message">
    <div class="message">
        <p style="text-align: left;"><em>{{ unmsg.author }}</em></p>
        <br />
        <div id="contenu" v-if="unmsg.content.Text">{{ unmsg.content.Text }}</div>
        <img v-else :src="unmsg.content.Image" :alt="unmsg.content.Image">
    </div>
</section>

<section>
    <span id="form">
        <input type="text" id="inputText" v-model="textInput" placeholder="Taper votre message"/>
        <button @click="postMessage()">Send</button>
    </span>
</section>
</template>


<style scoped>
#form{
    position: fixed, center;
    bottom: 0px;
    padding-top: 20px; 
    display: inline-block;
}
#inputText{
    resize : both;
}
</style>