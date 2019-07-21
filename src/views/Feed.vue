<template>
  <div class="feed">

    <base-nav/>
    <main-fon-page>
      <div>
        <video-card
          v-for="video in videoList.slice(0,2)"
          :key="video.id"
          :video="video"
        />
      </div>
      <div>
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

  }
}

</script>
<style lang="scss">

</style>
