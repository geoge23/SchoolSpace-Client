<template>
    <div class="recorderbox">
        <div class="recorder">
            <p id="x" @click="$emit('close')">x</p>
            <h4>Enter your question</h4>
            <FormulateForm
                @submit="handleSubmit"
            >
                <FormulateInput
                    type="textarea"
                    label="Your question"
                    style="height: 15vh; width: 20vw"
                    name="question"
                    v-model="message"
                />
                <FormulateInput
                    type="button"
                    label="Ask"
                    @click="handleSubmit"
                />
            </FormulateForm>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: "Recorder",
    data() {
        return {
            message: ""
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.message)
            if (this.message.length > 0) {
                this.$emit('msg', this.message)
                this.$emit('close')
            }
        }
    }
}
</script>

<style scoped>
    #x {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .recorderbox {
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(177, 177, 177, 0.308);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .recorder {
        position: relative;
        padding: 30px;
        background-color: white;
    }

    p {
        font-size: 18px;
        font-weight: 300;
        text-align: center;
    }

    .button {
        cursor: pointer;
        height: 8vh;
        width: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(233, 233, 233);
        border-radius: 100%;
        border: 1px solid green;
        margin-left: auto;
        margin-right: auto;
    }

    svg {
        height: 4vh;
        width: 4vh;
    }

    #formulate--class-cc802893-c788-4d0c-9ee7-6fa75f7066d5-3 {
        width: 20vw; 
        height: 15vh;
    }
</style>