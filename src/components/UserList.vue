<script setup>

const props = defineProps({
    channel: Object,
});

</script>

<template>
    <section>
        <div v-for="user in channel.users">
            <span>{{ user }}</span>
        </div>
    </section>
</template>

<style scoped>
</style>
