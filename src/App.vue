<template>
  <div id="app">
    <router-view />
    <notifications group="main" />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.afterEach((to, from) => {
      console.log('no fireeeede')
      console.log(to, from)
      switch (to) {
        case '/home':
          break;
        case '/login':
          break;
        default:
          if (this.$auth.currentUser == undefined) {
            console.log('no')
            this.$router.push('/login')
            this.$notify({
              group: 'main',
              title: 'Login',
              text: 'Please login to continue',
            })
          }
          break;
      }
    })
  },
}
</script>

<style></style>
