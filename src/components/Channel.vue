<script setup>
import { ref } from 'vue';

const props = defineProps({
    channelList: Array
});

const emits = defineEmits({
    "update:selectedChannel": Number
});

const selectedChannel = ref('');
const token = ref('eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ImZhbHNlIiwiaWF0IjoiMTY0MjU3Njg4MCIsInN1YiI6ImFqYWNvYiJ9.vvwgygGYjKdVZsS0eOStX3tQ_DCAkFm4-QIrItTYjts');


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
    <div class="container">
        <section v-for="channel in channelList">
            <div :id="channel.id" @click="setSelectedChannel(channel.id)" class="flex">
                <img :src="channel.img">
                <div class="name">{{ channel.name }}</div>
            </div>
        </section>
        <section>
            <div id="createChannel" @click="createChannel">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <div class="name">Créer un channel</div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .flex{
        display: flex;
    }

    img, svg {
        width: 4rem;
        height: 4rem;
        transition: 0.3s;
        border-radius: 50%; 
    }

    svg{
       /* color: var(--secondary-color); */
       /* background-color: var(--primary-color) */
    }

    img:hover, svg:hover{
        transition: 0.3s;
        border-radius: 20%;
    }

    .name{
        display: none;
        top: 4rem;
        left: 4rem;

    }

    img:hover + .name, svg:hover + .name {
        display: block;
    }
</style>
