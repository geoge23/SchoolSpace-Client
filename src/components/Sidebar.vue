<template>
    <div class="sidebar">
        <div class="item">
            <img src="" alt="" ref="image" v-tooltip.right="'Hello, ' + this.$auth.currentUser.displayName">
        </div>
        <div class="button" v-tooltip.right="'Available Rooms'" @click="route('list')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </div>
        <div class="button" v-tooltip.right="'Create Meeting'" @click="route('create')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </div>
        <div class="button logout" v-tooltip.right="'Logout'" @click="logout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    mounted() {
        this.$refs.image.src = this.$auth.currentUser.photoURL ? this.$auth.currentUser.photoURL : "https://icon-library.com/images/default-profile-icon/default-profile-icon-1.jpg"
        console.log(this.$auth.currentUser.getIdToken(true))
    },
    methods: {
        logout() {
            this.$auth.signOut()
            this.$router.push('/')
        },
        route(newComponent) {
            this.$emit('route', newComponent)
        }
    }
}
</script>

<style scoped>

    .sidebar {
        position: absolute;
        left: 0;
        height: 100vh;
        background-color: rgb(37, 37, 37);
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        z-index: 5;
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
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .item img {
        margin: 15px 0;
        color: white;
        height: 60px;
        width: auto;
        border-radius: 100%;
    }

    .logout {
        margin-top: auto;
    }
</style>