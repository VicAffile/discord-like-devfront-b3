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

function setChannel(id) {
    store.commit('setSelectedChannel', id)
    console.log(id)
}
</script>

<template>
    <section>
        <div class="container">
            <div>
                <img src="david-goodenough.png" />
            </div>
            <hr />
        </div>
        <div v-for="channel in channelList" :id="channel.id" @click="setChannel(channel.id)">
            <div class="containerChannel">
                <img :src="channel.img" alt="Channel img" />
            </div>
            <div class="name">{{ channel.name }}</div>
        </div>
        <div id="createChannel" @click="invokeModal">
            <div class="containerAdd">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </div>
            <div class="name">Créer un channel</div>
        </div>
    </section>
    <Modal v-show="isModal.value" />
</template>

<style scoped>
hr {
    width: 50%;
}

img {
    width: 100%;
    object-fit: cover;
}

section {
    width: 72px;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

svg {
    color: var(--green-color);
}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container div {
    width: 80%;
    border-radius: 10px;
    background-color: var(--secondary-color);
}
.containerAdd {
    overflow: hidden;
    margin: 5px;
    width: 48px;
    height: 48px;
    transition: 0.3s;
    border-radius: 50%;
    background-color: var(--background-color);
}

.containerAdd:hover {
    border-radius: 20%;
    background-color: var(--green-color);
}

.containerAdd:hover svg {
    color: var(--white-color);
}
.containerChannel {
    overflow: hidden;
    margin: 5px;
    width: 48px;
    height: 48px;
    transition: 0.3s;
    border-radius: 50%;
    background-color: var(--background-color);
}

.containerChannel:hover {
    border-radius: 20%;
}

.containerChannel:hover svg {
    color: var(--white-color);
}

.name {
    display: none;
    top: 4rem;
    left: 4rem;
}
</style>
