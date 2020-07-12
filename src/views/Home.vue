<template>
  <div class="home">
    <Header />
    <div class="body">
      <div class="left">
        <h1><span class="highlight">Equal</span> Opportunities</h1>
        <h3>For varied schooling plans across the nation</h3>
        <p>With the unprecedented events unfolding during the time of coronavirus, schools need to have the necessary resources to keep children healthy and educated</p>
        <button>Explore our product</button>
      </div>
      <div class="right">
        <img id="studysvg" src="studying.svg" alt="">
      </div>
    </div>
    <AbstractLine />
  </div>
</template>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: var(--e-color);
    z-index: 100;
  }
  
  .body {
    display: flex;
    height: 80%;
    margin-left: 10vw;
    margin-right: 10vw;
    justify-content: space-between;
    align-items: center;
  }

  .left h1 {
    font-size: 60px;
  }

  .left h3 {
    font-weight: 500;
    font-size: 30px;
    margin-top: -30px;
  }

  .left p {
    margin-top: -10px;
    font-size: 20px;
    max-width: 40%;
  }

  .left button {
    font-family: Montserrat;
    background-color: transparent;
    border: 3px solid var(--d-color);
    font-size: 25px;
    padding: 10px 15px;
    border-radius: 15px;
    transition: 500ms ease
  }

  .left button:hover {
    cursor: pointer;
    border: 3px solid rgb(30, 65, 102);
    font-size: 25px;
    padding: 10px 15px;
    border-radius: 15px;
    z-index: 10;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #studysvg {
    height: 50vh;
    transform: skewY(10deg);
    animation: shake 5s ease 0 alternate-reverse;
  }

  @keyframes shake {
    0% {
      transform: skewY(0deg);
    }
    12% {
      transform: skewY(10deg);
    }
    25% {
      transform: skewY(12deg);
    }
    45% {
      transform: skewY(8deg);
    }
    85% {
      transform: skewY(18deg);
    }
    100% {
      transform: skewY(10deg);
    }
  }
</style>

<script>
import Header from '@/components/Header'
import AbstractLine from '@/components/AbstractLine'

export default {
  name: 'Home',
  components: {
    Header,
    AbstractLine
  }
}
</script>
