<template>
    <div class="user">
        <img :src="image ? image : 'https://icon-library.com/images/default-profile-icon/default-profile-icon-1.jpg'" alt="">
        <p class="iconholder" v-if="isWaving">👋</p>
        <p class="iconholder green" v-if="isSpeaking">🎤</p>
        <p class="name">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "User",
    props: ['isWaving', 'isSpeaking', 'image', 'name']
}
</script>

<style scoped>
    .user {
        position: relative;
        height: 10vh;
        width: 10vh;
        margin: 20px;
    }

    img {
        height: 10vh;
        width: 10vh;
        border-radius: 100%;
    }

    .iconholder {
        position: absolute;
        top: -10px;
        right: 0;
        background-color: white;
        padding: 3px;
        border-radius: 100%;
    }

    .green {
        background-color: green;
    }

    .name {
        transition: 500ms ease;
        height: 0ch;
        opacity: 0;
        margin: 0;
        padding: 0;
        width: 120%;
        position: absolute;
    }

    .user:hover .name {
        height: 2ch;
        opacity: 1;
    }
</style>