<template>
    <div class="video">
        <div class="holder">
            <video ref="video" autoplay muted></video>
        </div>
        <div class="otherside">
            <Question @delete="remQ" v-for="(question, index) in questions" :index="index" :q="question" :key="index" />
        </div>
        <AdminBottomBar @close-room="endStream" />
    </div>
</template>

<script>
/* eslint-disable */
import User from '@/components/User'
import Question from '@/components/Question'
import AdminBottomBar from '@/components/AdminBottomBar'
import io from 'socket.io-client'
import axios from 'axios'
let recorder, listener;
const socket = io('192.168.86.47:3000')

export default {
    name: "Class",
    components: {
        AdminBottomBar,
        User,
        Question
    },
    data() {
        return {
            roomManifest: {},
            currentUser: {},
            questions: []
        }
    },
    mounted() {
        navigator.mediaDevices.getUserMedia({audio: true, video: true})
        .then(async stream => {
            const video = this.$refs.video
            video.srcObject = stream;
            video.play();
            recorder = new MediaRecorder(stream, {mimeType: 'video/webm; codecs=vp8, opus'})
            this.$auth.currentUser.getIdToken(true)
            .then(this.registerEndpoints)
            .then(this.beginStream)
        })
    },
    methods: {
        registerEndpoints(token) {
            console.log('test')
            socket.on('error', (data) => {
                this.$notify({
                    group: 'main',
                    title: 'Error',
                    text: data
                })
            })
            socket.on('room-manifest', (data) => {
                console.log('room manifest', data)
                this.roomManifest = data;
            })
            socket.on('new-msg', this.newQ)
            return new Promise((res, _) => {
                socket.emit('join-room', {
                    token,
                    room: this.$route.params.id
                })
                socket.on('room-joined', () => {
                    socket.emit('room-manifest')
                    res()
                })
            })
        },
        newQ(qdoc) {
            this.questions.push(qdoc)
        },
        remQ(index){
            console.log(index)
            this.questions.splice(index, 1)
        },
        beginStream() {
            console.log(recorder.mimeType)
            recorder.start(1000)
            console.log(recorder)
            listener = recorder.addEventListener('dataavailable', async e => {
                const data = await e.data.arrayBuffer();
                console.log(data)
                socket.emit('video-ready', data)
            })
        },
        endStream() {
            socket.emit('close-room')
            console.log('room closing')
            socket.on('close-room', () => {
                console.log('initiatied room closing')
                this.$router.push('/hub')
                this.$notify({
                    group: 'main',
                    title: 'Closed',
                    text: 'That room just closed. Hope you had a great time!'
                })
            })
        }
    }
}
</script>

<style scoped>
    .otherside {
        display: flex;
        flex-wrap: wrap;
        height: 90%;
        width: 30%;
        background-color: rgba(185, 185, 185, 0.76);
        flex-direction: column;
    }

    .video {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
    }

    .holder {
        background-color: black;
        height: 90%;
        width: 70%;
    }

    video {
        height: 100%;
        width: 100%;
    }
</style>