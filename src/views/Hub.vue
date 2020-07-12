<template>
    <div class="hub">
        <Sidebar @route="handleRoute"/>
        <component :is="currentComponent" class="main"/>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */

//import Room from '@/components/Room'
import Sidebar from '@/components/Sidebar'
import List from './hub/List'
import Join from './hub/Join'
import Create from './hub/Create'

const views = {
    'list': List,
    'join': Join,
    'create': Create
}

export default {
    name: "Hub",
    data() {
        return {
            currentComponent: views['list']
        }
    },
    components: {
        Sidebar
    },
    methods: {
        handleRoute(newRoute) {
            this.currentComponent = views[newRoute];
        }
    }
}
</script>

<style scoped>
    .main {
        position: absolute;
        right: 0;
        width: calc(100vw - 100px);
    }
</style>