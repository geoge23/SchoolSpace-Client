<template>
    <div class="list">
        <div class="head">
            <div class="left"><h1>Available Rooms</h1></div>
        </div>
        <div class="rooms">
            <Room v-for="item in items" :key="item.uuid" :item="item" />
            <Nothing v-if="items.length <= 0" />
        </div>
    </div>
</template>

<script>
import Room from '@/components/Room'
import Nothing from '@/components/Nothing'
import axios from 'axios'

export default {
    name: 'List',
    components: {
        Room,
        Nothing
    },
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        const { data } = await axios({
            method: 'get',
            url: 'http://192.168.86.47:3000/api/room'
        })
        console.log(data.rooms)
        this.items = data.rooms;
    }
}
</script>

<style scoped>
    .head {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: auto;
        padding-left: 1vw;
        padding-right: 3vw;
    }

    .rooms {
        display: flex;
        flex-direction: row;
        flex-grow: 0;
        flex-shrink: 0;
        flex-wrap: wrap;
    }
</style>