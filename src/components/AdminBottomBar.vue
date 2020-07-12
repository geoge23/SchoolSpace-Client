<template>
    <div class="bottombar">
        <div class="button right" v-tooltip.top="'End Stream'" @click="$emit('close-room')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-stop-circle"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>
        </div>
    </div>
</template>

<style scoped>
    .right {
        margin-left: auto;
    }

    .bottombar {
        position: absolute;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: rgb(37, 37, 37);
        display: flex;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        transition: 300ms ease;
        cursor: pointer;
    }

    .button:hover {
        background-color: rgb(24, 24, 24);
    }

    .button svg {
        height: 40px;
        width: auto;
        color: white;
    }
</style>