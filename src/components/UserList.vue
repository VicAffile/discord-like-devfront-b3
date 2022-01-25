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
div {
    transition: 0.3s;
    padding: 2px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

div:hover {
    background-color: var(--background-color);
    border-radius: 5px;
}

section {
    padding: 5px;
    width: 20%;
    margin-top: 20px;
    background-color: var(--black-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

span {
    color: var(--secondary-color);
    font-size: large;
    font-weight: bold;
}
</style>
