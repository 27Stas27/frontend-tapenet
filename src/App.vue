<template>
  <div class="app">
    <div>
      <video-card
        v-for="video in videoList"
        :key="video.id"
        :video="video"
      />
    </div>
    <div>
      <user-card/>
      <movies-watch/>
    </div>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: "Roboto";
    src: url("./assets/fonts/Roboto/Roboto.eot");
    src: url("./assets/fonts/Roboto/Roboto.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Roboto/Roboto.woff") format("woff"),
    url("./assets/fonts/Roboto/Roboto.ttf") format("truetype");
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

  :root {
    --salmon: #ff8376;
    --silver-50: rgba(208, 211, 218, 0.5);
    --warm-grey: #9b9b9b;
    --pinkish-grey-50: rgba(200, 200, 200, 0.5);
    --light-black-40: rgba(92, 92, 92, 0.4);
    --greyish-brown: #4a4a4a;

  }

  .app {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
<script>
  import UserCard from './components/User/UserCard'
  import MoviesWatch from './components/Movies/MoviesWatch'
  import VideoCard from "./components/VideoCard/VideoCard";

  export default {
    components: {VideoCard, MoviesWatch, UserCard},
    data() {
      return {
        videoList: [
          {
            id: '1',
            name: 'DESIGNATED SURVIVOR',
            image: 'https://picsum.photos/500/400',
            publishedAt: '2m ago',
            user: {
              name: 'Shkodran Arifi',
              //...
            }
          },
          {
            id: '2',
            name: 'asdsadasd',
            image: 'https://picsum.photos/500/400',
            publishedAt: '5m ago',
            user: {
              name: 'Shkodran asdasdasdsad',
              //...
            }
          },

        ]
      }
    },
  }
</script>
