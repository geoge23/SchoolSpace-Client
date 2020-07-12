<template>
    <div class="header">
        <div class="left">
            <p id="title">Schoolspace</p>
        </div>
        <div class="right">          
            <p>Contact Us</p>
            <p>Login</p>
            <p id="mlh">Built for <img class="icon" src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-grayscale.svg"/></p>
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #title {
        color: rgb(0, 0, 0);
        font-size: 3ch;
        font-weight: 4000;
        letter-spacing: 0.1em;
        margin-left: 2.5vw;
    }

    .right {
        display: flex;
        align-items: center;
    }

    .right p {
        margin-right: 1vw;
    }

    .icon {
        height: 1em;
        padding-left: 2px;
        padding-right: 2px;
        position: relative;
        top: 0.15em;
    }

    #mlh {
        background-color: var(--b-color);
        padding: 4px;
        border-radius: 5px;
    }
</style>