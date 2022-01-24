<script setup>
import { ref } from 'vue';

defineProps({
    channel : Object,
})

const message = ref([]);

const textInput = ref('');

async function getMessage() {
    const options = {
        method : "GET",
        headers : { Authorization : "bearer " + token.value } 
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + channel.id.value + '/messages/0', )
    if (response.status == 200){
        response.json.then(data => {
            console.log(data);
            msg.value = data;
        })
    }
}

async function postMessage(content) {
    json = JSON.stringify(json);
    const options = {
        method: "POST",
        body: json,
        headers : { Authorization : "bearer " + token.value }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + channel.id.value + '/message', options);
    if (response.status == 200) {
        response.json().then(data => {
            textInput.value = "" ;
        });
    }
}
</script>


<template>

<section>
    <div id="channelName">
         <p v-if="channel"> {{ channel.name }} </p> 
    </div>
</section>

<section v-for="unmsg in message">
    <div id="message">
        <p style="text-align: left;"><em>{{ unmsg.author }}</em></p>
        <br />
        <div id="contenu">{{ unmsg }}</div>
    </div>
</section>

<section>
    <span id="form">
        <input type="text" id="inputText" v-model="textInput" placeholder="Taper votre message"/>
        <button @click="postMessage(textInput.value)">Send</button>
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
#contenu{

}
#message{

}
</style>