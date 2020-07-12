<template>
    <div class="room">
        <img :src="item.adminPfp || 'https://icon-library.com/images/default-profile-icon/default-profile-icon-1.jpg'" alt="" class="pfp">
        <h1>{{ item.name }}</h1>
        <h3>Hosted by {{ item.adminName }}</h3>
        <p>{{ timeString }}</p>
        <hr>
        <button @click="openStream">Join <svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "Room",
    props: ['item'],
    computed: {
        timeString() {
            return `${moment(this.item.timeframe.start).format('h:mm A')} - ${moment(this.item.timeframe.finish).format('h:mm A')}`
        }
    },
    methods: {
        openStream() {
            this.$router.push(`/class/${this.item.uuid}`)
        }
    }
}
</script>

<style scoped>
    h1, h3, p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 25px;
        margin-bottom: 0.1em;
        margin-top: 20px;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 0.1em;
    }
    
    p {
        font-size: 18px;
        font-weight: 400;
        margin: 0.1em 0;
    }

    hr {
        border: 1px solid rgba(175, 175, 175, 0.274)
    }

    button {
        cursor: pointer;
        font-family: Montserrat;
        color: var(--d-color);
        font-weight: 600;
        font-size: 15px;
        background-color: transparent;
        border: 0 none;
    }

    button::after {
        content: "";
        background-color: var(--d-color);
        display: block;
        width: 120%;
        height: 2px;
        cursor: pointer;
    }

    button:hover button::after {
        content: "";
        background-color: var(--a-color);
    }

    button:hover {
        font-family: Montserrat;
        color: var(--a-color);
        font-weight: 600;
        font-size: 15px;
        background-color: transparent;
        border: 0 none;
    }

    button:active {
        font-family: Montserrat;
        color: var(--e-color);
        font-weight: 600;
        font-size: 15px;
        background-color: transparent;
        border: 0 none;
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

    #arrow-right {
        height: 0.8em;
        margin: 0 -5px;
        padding: 0;
        transform: scale(1.5);
    }

    .room {
        position: relative;
        margin: 0 10px;
        margin-top: 60px;
        padding: 15px;
        border: 1.5px solid rgba(175, 175, 175, 0.274);
        border-radius: 10px;
        height: 14vh;
    }

    .pfp {
        height: 80px;
        border-radius: 100%;
        position: absolute;
        top: -50px;
    }
</style>