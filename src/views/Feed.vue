<template>
  <div class="feed">


    <base-nav/>
    <main-fon-page>
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
    </main-fon-page>


  </div>
</template>
<script>
  import UserCard from '../components/User/UserCard'
  import MoviesWatch from '../components/Movies/MoviesWatch'
  import VideoCard from '../components/VideoCard/VideoCard'
  import BaseNav from '../components/Base/BaseHeader/BaseNav'
  import MainFonPage from '../components/MainFonPage/MainFonPage'

  export default {
    name: 'Feed.vue',
    components: { MainFonPage, BaseNav, VideoCard, MoviesWatch, UserCard },
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
          }

        ]
      }
    }
  }
</script>
<style lang="scss">

</style>
