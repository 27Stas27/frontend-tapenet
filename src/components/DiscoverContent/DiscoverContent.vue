<template>
  <div class="discover-content">
    <div class="discover-content__videoList">
      <video-card
        v-for="video in page.videoList"
        :key="video.id"
        :video="video"
      />
    </div>
    <gallery v-for="picture in page.gallery"
             :key="picture.id"
             :picture="picture"/>
    <div class="discover-content__videoList">
      <video-card
        v-for="video in page.videoList"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script>
import VideoCard from '../VideoCard/VideoCard'
import Gallery from '../Gallery/Gallery'
export default {
  name: 'DiscoverContent',
  components: { Gallery, VideoCard },
  props: {
    page: Object
  },
  created () {
    this.$root.$on('BaseHeaderSearchUpdate', (search) => this.filterMovies(search))
  },
  beforeDestroy () {
    this.$root.$off('BaseHeaderSearchUpdate', (search) => this.filterMovies(search))
  },
  methods: {
    filterMovies (search) {
      this.page.videoList = this.page.videoList.filter(
        (video) => video.name.toLowerCase().indexOf(search) !== -1
      )
    }
  }
}
</script>

<style lang="scss">
  .discover-content {

     &__videoList {
       width: 100%;
       max-width: 1200px;
       margin: 57px auto 0 auto;
       display: flex;
       justify-content: space-between;

       .video-card {
         flex: 0 0 370px;
         min-width: auto;
         padding: 14px 0 30px 0;

         .video-gif {
           height: 212px;
         }

         &__top {
           padding: 0 20px;
           margin-bottom: 14px;

           &_name {
             p {
               font-family: Roboto;
               font-size: 14px;
               font-weight: 500;
               line-height: 1;
               color: #5e6977;
             }
           }

           &__avatar {
             width: 30px;
             height: 30px;
           }
         }

         &__bottom {
           justify-content: center;
           padding: 20px 0 26px 0;
           width: calc(100% - 40px);
           margin: 0 auto;
           flex: none;

           &_title {
             flex: 0 0 245px;
             min-height: 68px;
             align-items: center;

             p {
               margin: 0 auto;
               letter-spacing: 2px;
             }
           }

           &_info {
             flex: 1;

             div:last-child {
               display: none;
             }

             div:first-child {
               display: flex;
               flex: 1;
               justify-content: space-between;
             }
           }
         }

         &__comment {
           padding: 23px 20px 0 20px;
         }
       }
     }
   }
</style>
