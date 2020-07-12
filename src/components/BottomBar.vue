<template>
    <div class="bottombar">
        <div class="button" @click="$emit('question')" v-tooltip.top="'Ask a question'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="button right" @click="$emit('leave')" v-tooltip.top="'Leave'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
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