<script setup>
import { ref } from 'vue';

const id = ref('');
const pw = ref('');

const token = ref('');



async function login() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let json = { username: id.value, password: pw.value };
    json = JSON.stringify(json);
    console.log(json);
    const options = {
        method: "POST",
        mode: "cors",
        body: json,
        headers
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
        pw.value = '';
    }
}

</script>

<template>
    <section v-if="token == ''">
        <h1>Ressemble à Discord</h1>
        <form method="post">
            <label for="username">Username :</label>
            <input type="text" id="username" v-model="id" required />
            <br />
            <label for="password">Password :</label>
            <input type="password" id="password" v-model="pw" required />
            <br />
        </form>
        <button @click="login">Login</button>
    </section>
    <section v-else>
        <h1>Connecté</h1>
    </section>
</template>

<style scoped>
</style>
