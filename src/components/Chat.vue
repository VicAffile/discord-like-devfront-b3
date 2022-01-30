<script setup>
import { ref, watchEffect } from 'vue';
import store from '../store.js';
import { watch } from 'vue';

const props = defineProps({
    channel: Object,
})

const message = ref([]);

const textInput = ref('');

async function getMessage() {
    const options = {
        method: "GET",
        headers: { Authorization: "Bearer " + store.state.token }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + props.channel.id + '/messages/0', options)
    if (response.status == 200) {
        response.json().then(data => {
            console.log(data);
            message.value = data;
        })
    }
}

async function postMessage(content) {
    json = JSON.stringify(json);
    const options = {
        method: "POST",
        body: json,
        headers: { Authorization: "Bearer " + store.state.token }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + props.channel.id + '/message', options);
    if (response.status == 200) {
        response.json().then(data => {
            textInput.value = "";
        });
    }
}

watchEffect(() => {
    console.log('oskur')
    getMessage()
})

</script>


<template>
    <section>
        <div id="channelName">
            <h2 v-if="channel">{{ channel.name }}</h2>
        </div>

        <div id="conversation">
            <div class="message" v-for="unmsg in message">
                <p style="text-align: left;">
                    <em>{{ unmsg.author }}</em>
                </p>
                <div id="contenu">{{ unmsg.content.Text }}</div>
            </div>
        </div>

        <div id="foot">
            <div id="input">
                <input
                    type="text"
                    id="inputText"
                    v-model="textInput"
                    placeholder="Taper votre message"
                />
                <button id="send" @click="postMessage(textInput.value)">Send</button>
            </div>
        </div>
    </section>
</template>


<style scoped>
em {
    font-weight: bold;
    font-size: large;
    color: var(--secondary-color);
}

h2 {
    font-style: italic;
}

input {
    width: 100%;
    color: var(--white-color);
    background-color: var(--input-message-color);
    border: none;
    resize: both;
}

input:focus {
    border: none;
}

section {
    width: calc(80% - 72px);
    height: calc(100vh - 20px);
    position: sticky;
    bottom: 0px;
    margin-top: 20px;
    border-radius: 10px 0px 0px 0px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.message {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.message p {
    margin-top: 0px;
    margin-bottom: 5px;
}

.message:hover {
    transition: 0.2s;
    background-color: var(--black-color);
}

#conversation {
    overflow-y: scroll;
    height: 80%;
}

#conversation::-webkit-scrollbar-thumb {
    color: red;
}

#foot {
    margin-top: 25px;
    position: relative;
    bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#input {
    padding: 10px;
    width: 90%;
    background-color: var(--input-message-color);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#send {
    margin-left: 10px;
    background-color: var(--input-message-color);
    color: var(--white-color);
    border: solid var(--white-color) 2px;
    border-radius: 10px;
}

#send:hover {
    color: white;
    border-color: white;
}
</style>