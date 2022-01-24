<script setup>
import { ref } from 'vue';

const name = ref('');
const img = ref('');

async function createChannel(){
    let json = { name: name.value, img: img.value };
    json = JSON.stringify(json);
    const options = {
      method: "PUT",
      body: json,
      headers: {
        Authorization: 'Bearer '+ store.state.token 
      }
    };
    const response = await fetch('https://edu.tardigrade.land/msg/protected/channel', options);
    if (response.status == 200) {
        response.json().then(data => {
            store.commit('setSelectedChannel', data.id);
        });
    }
}

</script>

<template>
    <div class="modal-backdrop">
        <div class="modal">
            <label for="channelName">Nom du Channel :</label>
            <input type="text" id="channelName" v-model="name" autocomplete="off" required />
            <label for="picture">URL de l'Image :</label>
            <input type="text" id="picture" v-model="img" autocomplete="off" required />

            <button @click="createChannel">Créer</button>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}
</style>