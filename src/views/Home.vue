<template>
  <div class="home">
    <section class="feed__section__top">
      <h1 class="feed__section__top__banner">
        Best video-on-demand online platform ever
      </h1>
      <input
        class="feed__section__top__search"
        type="text"
        v-model="search"
        placeholder="Search for titles, people, genres "
      >
      <base-slider :movies="movies"
                   :type="'continue'"
                   :search="search"
                   :reloading="reloading">
        <span class="base-slider__around__icon-radio-unchecked"></span>
        <span class="base-slider__around__description">
          Continue watching
        </span>
      </base-slider>
    </section>
    <section class="feed__section__spot">
      <div class="feed__section__spot__around">
        <div class="feed__section__spot__around__title">
          On Spot Today
        </div>
        <div class="feed__section__spot__around__film">
          <img class="feed__section__spot__around__film__img"
               :src="image"
               :alt="alt">
          <p class="feed__section__spot__around__film__name">
            Dark Circles
          </p>
        </div>
        <div class="feed__section__spot__around__map">
          <map-svg @showDiscription="onL"/>
          <map-description v-show="toggle"
                           v-for="mapD in mapDiscriptions"
                           :key="mapD.id"
                           :mapD="mapD"/>
          <p class="feed__section__spot__around__map__text">
            On the Set
          </p>
        </div>
      </div>
    </section>
    <section class="feed__section__bottom">
      <div class="feed__section__bottom__oval">
        <div class="feed__section__bottom__oval__module"></div>
      </div>
      <base-slider class="feed__section__bottom__trending"
                   :movies="movies"
                   :type="'trending'"
                   :search="search"
                   :reloading="reloading">
        <span class="base-slider__around__icon-radio-unchecked"></span>
        <span class="base-slider__around__description">
          Trending
        </span>
      </base-slider>
      <base-slider :movies="movies"
                   :type="'action'"
                   :search="search"
                   :reloading="reloading">
        <span class="base-slider__around__icon-radio-unchecked"></span>
        <span class="base-slider__around__description">
          Action
        </span>
      </base-slider>
    </section>
  </div>
</template>

<script>
import BaseSlider from '../components/Base/BaseSlider/BaseSlider'
import MapDescription from '../components/Map/MapDescription'
import MapSvg from '../components/Map/MapSvg'
import axios from 'axios'

export default {
  name: 'Home.vue',
  components: { MapSvg, MapDescription, BaseSlider },
  props: {
    image: {
      type: String,
      default: 'https://picsum.photos/300'
    },
    alt: {
      type: String
    }

  },
  methods: {
    onL (data) {
      this.toggle = data.toggle
      this.country = data.country

      console.log(this.toggle, this.country)
    }
  },
  data () {
    return {
      movies: [],
      search: '',
      toggle: false,
      country: '',
      reloading: false,
      mapDiscriptions: [
        {
          id: '1',
          place: 'Salvador, USA',
          image: 'https://picsum.photos/200',
          time: '08:00 - 16:00',
          country: 'usa'
        },
        {
          id: '2',
          place: 'Salvador, Brazil',
          image: 'https://picsum.photos/200',
          time: '09:00 - 12:00',
          country: 'brazil'
        }
      ]
    }
  },
  async created () {
    this.movies = (await axios.get('http://my-json-server.typicode.com/D3-FC/json-server-demo/movies')).data
    this.reloading = true
  }

}
</script>
<style lang="scss">
  .feed {
    &__section__top {
      padding-bottom: 130px;
      background: url("../assets/images/oval.svg") no-repeat 100% 127px, linear-gradient(to bottom, rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.11));

      &__banner {
        font-family: "Roboto-Light";
        font-size: 36px;
        font-weight: 500;
        line-height: 1.33;
        letter-spacing: -0.8px;
        text-align: center;
        color: #43484d;
        margin: 50px auto 0 auto;
        max-width: 560px;
      }

      &__search {
        display: block;
        width: 100%;
        max-width: 594px;
        height: 60px;
        border-radius: 8px;
        box-shadow: 0 0 17px 0 #f0e2e1;
        border: none;
        font-family: SFUIText;
        font-size: 18px;
        outline: none;
        margin: 35px auto 77px auto;
        padding-left: 30px;
        background: url("../assets/images/shape.png") no-repeat, #fff;
        background-position: calc(100% - 28px) center;
      }
    }

    &__section__spot {
      padding: 38px 0;
      background-image: linear-gradient(to left, #ff7eac, #ff8376);

      &__around {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-areas: 'title title title' 'film map map';
        grid-template-columns: 1.5fr 2.5fr;

        &__title {
          grid-area: title;
          font-family: Roboto;
          font-size: 36px;
          font-weight: 300;
          line-height: 1.61;
          letter-spacing: -0.8px;
          text-align: center;
          color: #ffffff;
        }

        &__film {
          grid-area: film;

          &__img {
            box-shadow: 0 0 10px 0 #cf594d;
            margin: 17px 0 0 42px;
            vertical-align: top;
            max-width: 315.7px;
            width: 100%;
            object-fit: cover;
            height: 454.6px;
          }

          &__name {
            /* в макете не по центру*/
            font-family: "Roboto";
            font-size: 36px;
            letter-spacing: 0px;
            color: #ffffff;
            margin-top: 33px;
            margin-bottom: 0;
            padding-left: 102px;
          }
        }

        &__map {
          position: relative;
          grid-area: map;

          &__text {
            position: absolute;
            bottom: -14px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 109px;
            height: 40px;
            font-family: "Roboto-Light";
            font-size: 24px;
            line-height: 1.67;
            color: #ffffff;
          }
        }
      }
    }

    &__section__bottom {
      position: relative;
      padding: 74px 0 40px 0;
      width: 100%;
      max-width: 1519px;
      margin: 0 auto;

      &__oval {
        position: absolute;
        top: 166px;
        left: -77px;
        width: 479.8px;
        height: 479.8px;
        opacity: 0.5;
        background: var(--circle);
        padding: 40px;
        border-radius: 100%;

        &__module {
          background: #fff;
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      &__trending {
        margin-bottom: 62px;
      }

    }
  }

  @media screen and (max-width: 1108px) {
    .feed__section__spot__around {
      grid-template-areas: 'title title title' 'film film film' 'map map map';
      grid-template-rows: auto auto 463px;
    }
    .feed__section__spot__around__film {
      text-align: center;

      &__img {
        margin: 0;
        height: auto;
      }

      &__name {
        padding-left: 0;
      }
    }
    .base-slider__around__slick__img {
      height: auto;
    }
  }

</style>
