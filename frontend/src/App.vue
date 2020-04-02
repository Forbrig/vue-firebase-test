<template>
  <div id="app">
    <top-header v-if="!['Login', 'Register'].includes($route.name)"></top-header>
    <router-view/>
  </div>
</template>

<script>
  import TopHeader from "./components/Top-Header";
  export default {
    components: {'top-header': TopHeader}
  }
</script>

<style lang="scss">
  @import '../public/roboto.ttf';

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    height: 100%;
    background-color: #F0F0F5;
  }

  .button {
    font-weight: 700;
    width: 100%;
    height: 40px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: filter 0.2s;
    cursor: pointer;
  }

  .button:hover {
    filter: brightness(90%);
  }

  input.input {
    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }

  .error {
    margin-top: 16px;
    padding: 14px;

    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

    border: 1px solid transparent;
    border-radius: 8px;
  }
</style>
