<template>
    <div class="form">
        <h1 class="head">Create a Room</h1>
        <div class="formholder">
            <FormulateForm @submit="handleSubmit">
                <FormulateInput
                    type="text"
                    name="name"
                    label="Meeting Name"
                    v-bind="form.name"
                />
                <FormulateInput
                    type="time"
                    name="start"
                    label="Meeting Start Time"
                />
                <FormulateInput
                    type="time"
                    name="end"
                    label="Meeting Finish Time"
                    help="Just give a guess"
                />
                <FormulateInput
                    type="checkbox"
                    name="private"
                    label="Private Mode"
                    help="Users will need your private link to join"
                    v-bind="form.private"
                />
                <FormulateInput
                    type="submit"
                    name="Create Room"
                />
            </FormulateForm>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
    name: "Create",
    methods: {
        async handleSubmit(data) {
            console.log(data)
            this.form.name = data.name
            this.form.timeframe.start = moment(data.start).format()
            this.form.timeframe.finish = moment(data.end).format()
            //below is needed to cover undefineds
            this.form.private = data.private ? true : false
            axios({
                method: 'put',
                url: 'http://192.168.86.47:3000/api/room',
                data: {
                    ...this.form,
                    token: await this.$auth.currentUser.getIdToken(true)
                }
            })
            .then(res => {
                console.log(res)
                this.$notify({
                    group: 'main',
                    title: 'Success',
                    text: 'Room created, your shareable link is schoolspace.tech/stream/' + res.data.room
                })
                this.$router.push(`/stream/${res.data.room}`)
            })
        }
    },
    data() {
        return {
            form: {
                name: "",
                timeframe: {
                    start: "",
                    finish: ""
                },
                private: false
            }
        }
    }
}
</script>

<style scoped>
    form {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: scale(1.5);
        overflow: hidden;
    }

    .formholder {
        display: flex;
        align-items: left;
        z-index: -1;
    }

    .head {
        display: flex;
        position: absolute;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: auto;
        padding-left: 1vw;
        padding-right: 3vw;
    }
</style>