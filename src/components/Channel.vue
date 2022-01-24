<script setup>
import { ref } from 'vue';
import store from '../store';
import Modal from './ModalChannel.vue';

const props = defineProps({
    channelList: Array
});

const isModal = ref(false);

function invokeModal() {
    isModal.value = true
    console.log(isModal.value);
}

function setChannel(id){
    store.commit('setSelectedChannel', id)
    console.log(id)
}
</script>

<template>
    <div class="container">
        <section v-for="channel in channelList">
            <div :id="channel.id" @click="setChannel(channel.id)" class="flex">
                <img :src="channel.img">
                <div class="name">{{ channel.name }}</div>
            </div>
        </section>
        <section>
            <div id="createChannel" @click="invokeModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <div class="name">Créer un channel</div>
            </div>
        </section>
    </div>
    <Modal v-show="isModal.value" />
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
