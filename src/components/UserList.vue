<script setup>
import { ref } from 'vue';
import store from '../store';

const props = defineProps({
    channel: Object,
});

const addSwitch = ref(false);
const addedUser = ref('');

async function addUser(){
    const options = {
        method: "PUT",
        headers : { 
            Authorization : "Bearer " + store.state.token,
        }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel/' + props.channel.id + '/user/' + addedUser.value, options);
    if (response.status == 200) {
        response.json().then(data => {
            addSwitch.value = false;
            addedUser.value = '';
        });
    }
}

</script>

<template>
    <section>
        <div v-for="user in channel.users">
            <span>{{ user }}</span>
        </div>
        <div v-if="channel.creator==store.state.user">
            <span v-if="!addSwitch" @click="addSwitch=true">Ajouter un membre</span>
            <template v-else>
                <input type="text" v-model="addedUser">
                <button @click="addUser">+</button>
            </template>
        </div>
    </section>
</template>

<style scoped>
div {
    transition: 0.3s;
    padding: 2px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

div:hover {
    background-color: var(--background-color);
    border-radius: 5px;
}

section {
    padding: 5px;
    width: 20%;
    margin-top: 20px;
    background-color: var(--black-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

span {
    color: var(--secondary-color);
    font-size: large;
    font-weight: bold;
}
</style>
