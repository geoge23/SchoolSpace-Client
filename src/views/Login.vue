<template>
    <div class="login">
        <div class="loginbox">
            <div id="loginholder">
                <p id="title">Schoolspace</p>
                <p>Sign in with one of the available options</p>
                <div id="login"></div>
            </div>
        </div>
        <AbstractLine />
    </div>
</template>

<style scoped>
    #title {
        color: rgb(0, 0, 0);
        font-size: 3ch;
        font-weight: 4000;
        letter-spacing: 0.1em;
        text-align: center;
        margin-bottom: 0;
    }
    p:nth-child(2) {
        margin-top: 15px;
    }
    .login {
        position: relative;
        height: 100vh;
        width: 100vw;
        background-color: var(--e-color);
        z-index: 100;
    }
    .loginbox {
        position: absolute;
        left: 10vw;
        height: 100%;
        display: flex;
        align-items: center;
    }
    #loginholder {
        background-color: var(--c-color);
        padding: 30px;
    }
</style>

<script>
/* ignore-unused-vars _ */

import AbstractLine from '@/components/AbstractLine'
import * as firebase from 'firebase';

export default {
  name: 'Home',
  components: {
    AbstractLine
  },
  mounted() {
      this.$ui.start('#login', {
          signInOptions: [
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
              firebase.auth.GoogleAuthProvider.PROVIDER_ID
          ],
          callbacks: {
              signInSuccessWithAuthResult: function(authResult) {
                  console.log(authResult)
                  this.$router.push('/hub')
                  return false;
              }.bind(this)
          }
      })
  }
}
</script>