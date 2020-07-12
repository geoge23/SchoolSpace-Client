<template>
    <div class="vidBlocker" @click="$emit('click')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <p>Click to connect to stream</p>
    </div>
</template>

<script>
export default {
    name: "VidBlocker"
}
</script>

<style scoped>
    .vidBlocker {
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(177, 177, 177, 0.308);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    svg {
        color: white;
        height: 20vh;
        width: 20vh;
    }

    p {
        color: white;
        font-size: 3vh;
    }
</style>