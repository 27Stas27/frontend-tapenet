<template>
  <div id="app">
    <base-header/>
    <base-nav/>
    <div class="main-fon-page">
      <section class="friends-page__body">
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
      </section>
    </div>
    <base-footer/>
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

  :root {
    --black: #000;
    --salmon: #ff8376;
    --silver-50: rgba(208, 211, 218, 0.5);
    --warm-grey: #9b9b9b;
    --pinkish-grey-50: rgba(200, 200, 200, 0.5);
    --light-black-40: rgba(92, 92, 92, 0.4);
    --greyish-brown: #4a4a4a;

  }

  body {
    margin: 0;
  }

  .main-fon-page {
    background: #f7f8fa;
    padding-top: 50px;
  }

  /*#app {*/

  /*}*/

  .friends-page__body {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }

  @media screen and (min-width: 320px) and (max-width: 1199px) {
    .friends-page__body {
      justify-content: center;
    }
  }
</style>
<script>
  import UserCard from './components/User/UserCard'
  import MoviesWatch from './components/Movies/MoviesWatch'
  import VideoCard from './components/VideoCard/VideoCard'
  import BaseHeader from './components/Base/BaseHeader/BaseHeader'
  import BaseNav from './components/Base/BaseHeader/BaseNav'
  import BaseFooter from './components/Base/BaseFooter/BaseFooter'

  export default {
    components: { BaseFooter, BaseNav, BaseHeader, VideoCard, MoviesWatch, UserCard },
    data () {
      return {
        videoList: [
          {
            id: '1',
            name: 'DESIGNATED SURVIVOR',
            image: 'https://picsum.photos/500/400',
            publishedAt: '2m ago',
            released: '2017',
            genders: 'TV Shows',
            available: '13+',
            season: '1 season',
            user: {
              name: 'Shkodran Arifi'
            }
          },
          {
            id: '2',
            name: 'NARCOS',
            image: 'https://picsum.photos/500/400',
            publishedAt: '5m ago',
            released: '2013',
            genders: 'TV Series',
            available: '3+',
            season: '4 season',
            user: {
              name: 'Jane Brewer'
            }
          },

        ],
      }
    }
  }
</script>
