<script setup>
import { ref } from 'vue';

const props = defineProps({
    channelList: Array
});

const emits = defineEmits(['change']);

const selectedChannel = ref('');



function setSelectedChannel(newId){
    selectedChannel.value = newId;
}



</script>

<template>
    <section v-for="channel in channelList">
        <div :id="channel.id" @click="setSelectedChannel(channel.id)">
            <img :src="channel.img">
            <p>{{ channel.name }}</p>
        </div>
    </section>
    <section>
        <div id="createChannel">
            <img> <!-- mettre un plus -->
            <p>Créer un channel</p>
        </div>
    </section>
</template>

<style scoped>
</style>
