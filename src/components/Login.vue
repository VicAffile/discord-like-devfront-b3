<script setup>
import { ref } from 'vue';
import {useStore} from 'vuex';
const id = ref('');
const pw = ref('');

const store=useStore();
const token = ref('');



async function login() {
    let json = { username: id.value, password: pw.value };
    json = JSON.stringify(json);
    console.log(json);
    const options = {
        method: "POST",
        mode: "cors",
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/login', options);
    if (response.status == 200) {
        response.json().then(data => {
            console.log(data)
            token.value = data.token;
            localStorage.removeItem('discord_like_devfront_b3');
            localStorage.setItem('discord_like_devfront_b3', JSON.stringify({
                username: id.value,
                token: data.token,
                timestamp: Date.now()
            }));
        });
        store.commit('logIn');
        pw.value = '';
    }
}

</script>

<template>
    <section v-if="token == ''">
        <div class="picture_container">
            <img src="didigoodenough.png" alt="Logo" />
        </div>
        <form method="post" @submit.prevent="login">
            <div class="login_input">
                <label for="username">Username :</label>
                <input type="text" id="username" v-model="id" autocomplete="off" required />
            </div>
            <div class="login_input">
                <label for="password">Password :</label>
                <input type="password" id="password" v-model="pw" autocomplete="off" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </section>
</template>

<style scoped>
button {
    width: 90%;
    height: 40px;
    color: var(--white-color);
    font-size: large;
    border: solid 2px var(--secondary-color);
    border-radius: 5px;
    background-color: var(--secondary-color);
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    height: 280px;
    border-radius: 10px;
    background-color: var(--primary-color);
}

label {
    font-weight: bold;
}

input {
    width: 100%;
    height: 40px;
    color: var(--white-color);
    border: solid 2px var(--white-color);
    border-radius: 5px;
    background-color: var(--black-color);
}

input:hover {
    color: var(--white-color);
    border-color: var(--secondary-color);
}

input:focus {
    border: solid 3px var(--secondary-color);
    background-color: var(--black-color);
}

section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-top: 50vh;
    transform: translateY(-50%);
    width: 33%;
    color: var(--white-color);
}

.login_input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
}

.picture_container {
    z-index: -10;
    position: relative;
    bottom: -5px;
    width: 90%;
}

.picture_container img {
    width: 100%;
    object-fit: contain;
}
</style>
