<script setup>
import { ref } from 'vue';

defineProps({
    channel: Object,
});

const users = ["Vic", "Tchu", "Aymeric"];

</script>

<template>
    <section>
        <div v-for="(user,index) of users">
            <span>{{ user }}</span>
        </div>
    </section>
</template>

<style scoped>
</style>
