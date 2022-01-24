<script setup>
import { ref } from 'vue';

defineProps({
    channel: Object,
});

</script>

<template>
    <section v-if="channel">
        <div v-for="(user,index) of channel.users">
            <span>{{ user }}</span>
        </div>
    </section>
</template>

<style scoped>
</style>
