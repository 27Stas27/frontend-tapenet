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
    <div class="discover__videoList">
      <video-card
        v-for="video in videoList.slice(0,3)"
        :key="video.id"
        :video="video"
      />
    </div>
    <gallery v-for="picture in gallery"
             :key="picture.id"
             :picture="picture"/>
    <div class="discover__videoList">
      <video-card
        v-for="video in videoList.slice(0,3)"
        :key="video.id"
        :video="video"
      />
    </div>
    <div class="discover__more">
      <button class="discover__more_button">
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import BaseNav from '../components/Base/BaseHeader/BaseNav'
import VideoCard from '../components/VideoCard/VideoCard'
import Gallery from '../components/Gallery/Gallery'
import axios from 'axios'
export default {
  name: 'Discover.vue',
  components: { Gallery, VideoCard, BaseNav },
  data () {
    return {
      videoList: [],
      gallery: []
    }
  },
  async created () {
    this.videoList = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/videoList')).data
    this.gallery = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/gallery')).data

  }
}
</script>

<style lang="scss">

  .discover {
    background: #f7f8fa;

    &__dropDown {
      padding: 30px 0 0 0;
      width: 100%;
      max-width: 1200px;
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

    &__more {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 0 90px 0;

      &_button {
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

</style>
