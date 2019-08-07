<template>
  <div class="feed">

    <base-nav/>
    <main-fon-page>
      <div class="friends-page__body__itemVideo">
        <video-card
          v-for="video in videoList"
          :key="video.id"
          :video="video"
        />
      </div>
      <div class="friends-page__body__itemWatch">
        <user-card/>
        <movies-watch/>
      </div>
    </main-fon-page>

  </div>
</template>
<script>
import UserCard from '../components/User/UserCard'
import MoviesWatch from '../components/Movies/MoviesWatch'
import VideoCard from '../components/VideoCard/VideoCard'
import BaseNav from '../components/Base/BaseHeader/BaseNav'
import MainFonPage from '../components/MainFonPage/MainFonPage'
import axios from 'axios'
export default {
  name: 'Feed.vue',
  components: { MainFonPage, BaseNav, VideoCard, MoviesWatch, UserCard },
  data () {
    return {
      videoList: []
    }
  },
  async created () {
    this.videoList = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/videoList')).data
    this.videoList = this.videoList.slice(0, 2)
  }
}

</script>
<style lang="scss">
  @import "../assets/scss/base";

  @include lg() {
    .friends-page__body {
      justify-content: center;
      &__itemWatch{
        display: flex;
        justify-content: space-around;
        flex: 1;
        .movies-watch{
          margin: 0 0 30px 0;
          min-height: 331px;
          padding: 41px 60px 48px 41px;
          p{
            margin: 0 0 25px 0;
          }
          ul li {
            padding-bottom: 21px;
          }
        }
      }
    }
  }
  @include md() {
    .base-card{
      min-width: auto;
      flex-basis: 45%;
    }
  }
  @include sm() {
    .friends-page__body__itemWatch .movies-watch{
      padding: 41px 20px 10px 20px;
      min-height: 310px;
      ul ii{
        padding-bottom: 15px;
      }
      a{
        font-size: 18px;
      }
      p{
        font-size: 20px;
      }
    }
    .friends-page__body__itemVideo{
      padding: 0 15px;
    }
    .user-card{
      padding: 0 20px 20px 20px;
      &__name {
        margin-top: 24px;
      }
    }
    .base-card{
      min-height: 310px;
    }
  }
  @include xs() {
    .friends-page__body__itemWatch{
      flex-direction: column;
    }
    .base-card {
      min-width: 250px;
      flex-basis: auto;
      align-self: center;
    }
    .friends-page__body__itemWatch .movies-watch {
      margin: 30px 0 30px 0;
    }
    .video-card {
      padding: 25px 10px;

      &__top_name p {
        font-size: 20px;
        margin: 0;
      }

      &__avatar {
        width: 45px;
        height: 45px;
      }
      &__bottom_title p {
        font-size: 20px;
        padding: 3px 0px 3px 39px;
        background-size: 27px;
      }
      &__comment{
        padding-top: 15px;
      }
    }
    .video-gif{
      height: 200px;
    }
  }
</style>
