<template>
  <div class="discover">
    <base-nav/>
    <div class="discover__dropDown">
      <div class="discover__dropDown__year">
        <p class="discover__dropDown__year__item">Sort by year</p>
      </div>
      <div class="discover__dropDown__genres">
        <p class="discover__dropDown__genres__item">Sort by genres</p>
      </div>
    </div>
    <div class="discover__content-cover">
      <discover-content
              v-for="page in pages"
              :page="page"/>
    </div>
    <div class="discover__more">
      <button class="discover__more_button" @click="loadMore()">
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import BaseNav from '../components/Base/BaseHeader/BaseNav'
import DiscoverContent from '../components/DiscoverContent/DiscoverContent'
import axios from 'axios'

export default {
  name: 'Discover.vue',
  components: { DiscoverContent, BaseNav },
  data () {
    return {
      pages: []
    }
  },
  async created () {
    this.loadMore()
  },
  methods: {
    async loadMore () {
      const videoList = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/videoList')).data
      const gallery = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/gallery')).data

      this.pages.push({
        videoList,
        gallery
      })
      this.winWidth()
    },
    winWidth () {
      const windowWidth = window.innerWidth
      if (windowWidth > 575 && windowWidth < 769) {
        this.pages[0].videoList = this.pages[0].videoList.slice(0, 2)
      } else if (windowWidth < 575) {
        this.pages[0].videoList = this.pages[0].videoList.slice(0, 1)
      } else {
        this.pages[0].videoList = this.pages[0].videoList.slice(0, 3)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base";
  .discover {
    background: #f7f8fa;

    &__content-cover {
      min-height: calc(100vh - 403px);
    }

    &__dropDown {
      padding: 30px 15px 0 15px;
      width: 100%;
      max-width: 1230px;
      margin: 0 auto;
      display: flex;

      &__year {
        margin-right: 26px;
        border-radius: 6px;
        border: solid 1px var(--salmon);
        padding: 10px 25px 10px 33px;
        font-family: Roboto;
        font-size: 16px;
        line-height: 1.5;
        color: var(--salmon);

        &__item {
          margin: 0;
          padding-right: 30px;
          background: url("../assets/images/shape22.svg") no-repeat 100% 50%;
        }
      }

      &__genres {
        margin-right: 26px;
        border-radius: 6px;
        border: solid 1px var(--salmon);
        padding: 10px 25px 10px 33px;
        font-family: Roboto;
        font-size: 16px;
        line-height: 1.5;
        color: var(--salmon);

        &__item {
          margin: 0;
          padding-right: 30px;
          background: url("../assets/images/shape22.svg") no-repeat 100% 50%;
        }
      }
    }

    &__more {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 0 90px 0;

      &_button {
        cursor: pointer;
        padding: 11px 47px;
        outline: none;
        font-family: Roboto;
        font-size: 16px;
        line-height: 1.5;
        color: var(--salmon);
        border-radius: 6px;
        border: solid 1px var(--salmon);
        background: none;
      }
    }
  }
  @include lg() {
    .discover-content__videoList .video-card {
      flex: 0 0 31%;
    }
    .video-card__bottom_info p{
      font-size: 13px;
    }
  }
  @include md() {
    .discover-content__videoList .video-card .video-gif {
      height: 156px;
    }
    .discover-content__videoList .video-card__top {
      padding: 0 10px;
    }
    .discover-content__videoList .video-card__top_name p {
      font-size: 12px;
      padding-left: 10px;
    }
    .video-card__avatar {
      width: 45px;
      height: 45px;
    }
    .video-card__top h6,
    .video-card__comment p{
      font-size: 13px;
    }
    .video-card__bottom_info p{
      padding: 5px 0px;
    }
    .discover-content__videoList .video-card__bottom_title {
      flex: 0 0 100%;
    }
    .video-card__bottom_title p{
      font-size: 20px;
      background-size: 27px;
    }
    .discover-content__videoList .video-card__bottom {
      width: calc(100% - 20px);
      padding: 5px 0;
    }
    .discover-content__videoList .video-card__bottom_info div:first-child{
      flex-direction: column;
    }
    .video-card__bottom_info{
      text-align: center;
    }
    .discover-content__videoList .video-card__comment {
      padding: 13px 10px 0 10px;
    }
    .video-card__comment_links a img{
      width: 25px;
    }
    .gallery-top,
    .gallery-bottom{
      grid-template-columns: 35% 30%;
    }
  }
  @include sm() {
    .gallery-top,
    .gallery-bottom {
      grid-template-rows: 100px 100px;
    }
    .discover-content__videoList .video-card {
      flex: 0 0 48%;
    }
    .video-card__bottom_title p {
      padding: 3px 0px 3px 39px;
    }
    .discover-content__videoList .video-card__bottom{
      flex: inherit;
    }
  }
  @include xs() {
    .discover__dropDown{
      justify-content: center;
      &__year,
      &__genres{
        padding: 10px 5px;
        font-size: 14px;
        flex: 1;
        max-width: 170px;
      }
      &__genres{
        margin-right: 0;
      }
    }
    .discover-content__videoList .video-card {
      flex: 0 0 100%;
      max-width: 366px;
      margin: 0 auto 35px auto;
    }
    .discover-content__videoList{
      margin: 30px auto 0 auto;
    }
    .gallery-top,
    .gallery-bottom {
      grid-template-rows: 50px 50px;
      grid-template-columns: 31% 26%;
      grid-gap: 7px 10px;
    }
    .gallery-top{
      margin-bottom: 10px;
    }
  }
</style>
