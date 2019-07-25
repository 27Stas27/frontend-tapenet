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
    <discover-content
      v-for="page in pages"
      :page="page"/>
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
    }
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

</style>
