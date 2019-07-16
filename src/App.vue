<template>
  <div id="app">
    <base-header/>
    <router-view/>
    <base-footer/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: "icomoon";
    src: url("./assets/fonts/icomoon/icomoon.eot");
    src: url("./assets/fonts/icomoon/icomoon.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/icomoon/icomoon.woff") format("woff"),
    url("./assets/fonts/icomoon/icomoon.ttf") format("truetype");
  }


  @font-face {
    font-family: "Roboto";
    src: url("./assets/fonts/Roboto/Roboto.eot");
    src: url("./assets/fonts/Roboto/Roboto.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Roboto/Roboto.woff") format("woff"),
    url("./assets/fonts/Roboto/Roboto.ttf") format("truetype");
  }

  @font-face {
    font-family: "SFUIText";
    src: url("./assets/fonts/SFD/SFUIDisplay-Regular.eot");
    src: url("./assets/fonts/SFD/SFUIDisplay-Regular.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/SFD/SFUIDisplay-Regular.woff") format("woff"),
    url("./assets/fonts/SFD/SFUIDisplay-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Light";
    src: url("./assets/fonts/Roboto/Roboto-Light.eot");
    src: url("./assets/fonts/Roboto/Roboto-Light.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Roboto/Roboto-Light.woff") format("woff"),
    url("./assets/fonts/Roboto/Roboto-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "SourceSansPro";
    src: url("./assets/fonts/SourceSansPro-Regular/SourceSansPro-Regular.eot");
    src: url("./assets/fonts/SourceSansPro-Regular/SourceSansPro-Regular.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/SourceSansPro-Regular/SourceSansPro-Regular.woff") format("woff"),
    url("./assets/fonts/SourceSansPro-Regular/SourceSansPro-Regular.ttf") format("truetype");
  }

  ::placeholder {
    color: #b7b4b4;
    opacity: 1;
    font-family: "SFUIText";
  }

  :-ms-input-placeholder {
    color: #b7b4b4;
    font-family: "SFUIText";
  }

  ::-ms-input-placeholder {
    color: #b7b4b4;
    font-family: "SFUIText";
  }

  [class^="__icon-"],
  [class*="__icon-"] {
    font-family: 'icomoon' !important;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --circle:linear-gradient(to left, #ff7eac, #ff8376);
    --black: #000;
    --salmon: #ff8376;
    --silver-50: rgba(208, 211, 218, 0.5);
    --warm-grey: #9b9b9b;
    --pinkish-grey-50: rgba(200, 200, 200, 0.5);
    --light-black-40: rgba(92, 92, 92, 0.4);
    --greyish-brown: #4a4a4a;

  }
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }

  /*#app {*/

  /*}*/

  @media screen and (min-width: 320px) and (max-width: 1199px) {
    .friends-page__body {
      justify-content: center;
    }
    .base-slider__around__slick__img{
      height: auto;
    }
  }
</style>
<script>


  import BaseHeader from './components/Base/BaseHeader/BaseHeader'
  import BaseFooter from './components/Base/BaseFooter/BaseFooter'

  export default {
    name: 'App.vue',
    components: { BaseFooter, BaseHeader }
  }
</script>
