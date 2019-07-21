<template>
  <div class="base-slider">

    <slot/>
    <div class="base-slider__around">
      <slick
        class="base-slider__around__slick"
        ref="slick"
        :key="reload"
        :options="slickOptions">

        <img
          class="base-slider__around__slick__img"
          :key="'moviesPreview'+i"
          v-for="(movie, i) in moviesPreview"
          :src="movie.cover"
          :title="movie.title"
        >

      </slick>
      <button class="base-slider__around__icon-chevron-thin-right"
              @click="next">
      </button>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import '../../../../node_modules/slick-carousel/slick/slick.css'

export default {
  name: 'BaseSlider',
  components: { Slick },
  props: {
    movies: Array,
    type: String,
    search: String,
    reloading: Boolean
  },
  watch: {
    reloading () {
      this.reload = this.reloading ? ++this.reload : this.reload
    }
  },
  data () {
    return {
      reload: 1,
      slickOptions: {
        slidesToShow: 5,
        arrows: false
      }
    }
  },
  computed: {
    moviesPreview () {
      return this.movies.filter((movie) => {
        return movie.type === this.type && movie.title.toLowerCase().includes(this.search)
      })
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    }
  }
}
</script>

<style lang="scss">
  .base-slider {
    z-index: 2;
    position: relative;
    width: 85%;
    max-width: 1230px;
    margin: 0 auto;

    &__around {
      position: relative;

      &__icon-radio-unchecked {
        padding-left: 15px;
        vertical-align: middle;
      }

      &__icon-radio-unchecked:before {
        content: "\ea56";
        color: #ff8376;
        font-size: 24px;
      }

      &__description {
        font-family: SFUIText;
        font-size: 24px;
        font-weight: 600;
        padding-left: 21px;
        letter-spacing: 1px;
        color: var(--greyish-brown);
      }

      &__icon-chevron-thin-right:before {
        content: "\e900";
        font-size: 33px;
        position: absolute;
        left: -9px;
        top: 0;
      }

      &__icon-chevron-thin-right {
        cursor: pointer;
        outline: none;
        position: absolute;
        right: -40px;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 16.4px;
        height: 31.1px;
        border: 0;
        background: none;
        padding: 0;
      }
    }

    &__around__slick {
      width: 100%;
      margin: 31px 0 0 0;

      &__img {
        /**box-shadow как в макете не смог сделать**/
        box-shadow: 0 0 16px -1px #d9d9d9;
        /*max-width: 210px;*/
        object-fit: cover;
        height: 298px;
        vertical-align: middle;
      }
    }

    .slick-initialized .slick-slide {
      text-align: center;
      margin: 0;
      padding: 15px 12.5px;

      div {
        max-width: 210 xp;
      }
    }

  }
</style>
