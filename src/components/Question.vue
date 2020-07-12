<template>
    <div class="question" @click="$emit('delete', index)">
        <img :src="q.pic || 'https://icon-library.com/images/default-profile-icon/default-profile-icon-1.jpg'" alt="">
        <div class="other">
            <p><b>{{ q.name }}</b> asks</p>
            <p>{{ q.question }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Question",
    props: ['q', 'index']
}
</script>

<style scoped>
    .question {
        height: 7vh;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        margin: 15px;
    }

    p {
        margin: 0;
        padding: 0;
        margin-right: 5px;
    }

    img {
        height: 5vh;
        border-radius: 100%;
        margin: 10px;
    }
    
    .play {
        position: absolute;
        right: 5px;
        top: auto;
        bottom: auto;
        background-color: transparent;
        border: 0px solid transparent;
        font-size: 15px;
    }

</style>