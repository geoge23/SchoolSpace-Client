<template>
    <div class="video">
        <div class="holder">
            <video ref="video" autoplay></video>
        </div>
        <div class="otherside">
            <User v-for="user of roomManifest" 
                :isSpeaking="user.isSpeaking" :isWaving="user.isWaving" 
                :key="user.img" :image="user.img" :name="user.name" />
        </div>
        <BottomBar @question="toggle" @leave="socket.disconnect()" />
        <VidBlocker @click="startStream" v-if="vidblocked"/>
        <Recorder v-if="recorder" @close="toggle" @msg="message" />
    </div>
</template>

<script>
/* eslint-disable */
import User from '@/components/User'
import BottomBar from '@/components/BottomBar'
import VidBlocker from '@/components/VidBlocker'
import Recorder from '@/components/Recorder'
import io from 'socket.io-client'
import axios from 'axios'
let mediaBuffer, socket;

export default {
    name: "Class",
    components: {
        BottomBar,
        User,
        VidBlocker,
        Recorder
    },
    data() {
        return {
            roomManifest: {},
            currentUser: {},
            vidblocked: true,
            recorder: false
        }
    },
    mounted() {
        const video = this.$refs.video
        const mediasource = new MediaSource()
        video.src = URL.createObjectURL(mediasource)
        mediasource.addEventListener('sourceopen', () => {
        mediaBuffer = mediasource.addSourceBuffer('video/webm; codecs=vp8, opus')
        socket = io('192.168.86.47:3000')
        let queue = []
        let r2r = false

        

        this.$auth.currentUser.getIdToken(true)
        .then(token => {

            /*axios.get('http://localhost:3000/api/ad', {
                responseType: 'arraybuffer'
            }).then(r => {
                mediaBuffer.appendBuffer(r.data)
            })*/

            socket.on('first-chunks', (data) => {
                //gets the encoding and beginning region for webm compliance
                console.log(data, 'first-chunks')
                mediaBuffer.appendBuffer(data);
            })

            socket.on('new-data', data => {
                console.log(data)
                mediaBuffer.appendBuffer(data)
            })

            mediaBuffer.addEventListener('abort', (e) => {
                console.log(e)
            })

            socket.on('error', (data) => {
                this.$notify({
                    group: 'main',
                    title: 'Error',
                    text: data
                })
            })

            socket.on('close-room', () => {
                this.$router.push('/hub')
                this.$notify({
                    group: 'main',
                    title: 'Closed',
                    text: 'That room just closed. Hope you had a great time!'
                })
            })

            socket.on('room-manifest', (data) => {
                console.log('room manifest', data)
                this.roomManifest = data;
            })
            socket.emit('join-room', {
                token,
                room: this.$route.params.id
            })
            socket.on('room-joined', () => {
                socket.emit('room-manifest')
                socket.emit('get-first-chunks', {})
            }) 
            console.log('fired')
        })
            
        })
    },
    beforeDestroy() {
        socket.close()
    },
    methods: {
        toggle() {
            this.recorder = !this.recorder
        },
        message(msg) {
            socket.emit('message', msg)
        },
        startStream() {
            //brings stream to present by passing in an enormous number
            document.querySelector('#app > div.video > div.holder > video').currentTime = 9999999
            let play = document.querySelector('#app > div.video > div.holder > video').play()

            if (play !== undefined) {
                play.then(() => {
                    this.vidblocked = false;
                })
                .catch(e => {
                    this.$notify({
                        group: 'main',
                        title: 'Error',
                        text: 'Failed to connect to stream, try again in a few seconds'
                    })
                })
            }
            
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