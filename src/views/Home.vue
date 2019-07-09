<template>
  <div class="home">
    <section class="feed__section__top">
      <h1 class="feed__section__top__banner">
        Best video-on-demand online platform ever
      </h1>
      <input
        class="feed__section__top__search"
        type="text"
        placeholder="Search for titles, people, genres "
      >
      <base-slider>
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
          <div class="feed__section__spot__around__map__dot usa"
               @click="toggle = !toggle">
            <span class="feed__section__spot__around__map__dot__icon-close"
                  v-show="toggle"></span>
            <span class="feed__section__spot__around__map__dot__black"></span>
            <span class="feed__section__spot__around__map__dot__orange"></span>
            <div class="feed__section__spot__around__map__dot__description"
                 v-show="toggle">
              <img src="https://picsum.photos/200"
                   alt="">
              <p class="feed__section__spot__around__map__dot__description__text">
                <span>Place:</span><br>
                Salvador, USA
              </p>
              <p class="feed__section__spot__around__map__dot__description__text">
                <span>Time:</span><br>
                08:00 - 16:00
              </p>
            </div>
          </div>
          <div class="feed__section__spot__around__map__dot brazil">
            <span class="feed__section__spot__around__map__dot__black"></span>
            <span class="feed__section__spot__around__map__dot__orange"></span>
          </div>
          <div class="feed__section__spot__around__map__dot africa">
            <span class="feed__section__spot__around__map__dot__black"></span>
            <span class="feed__section__spot__around__map__dot__orange"></span>
          </div>
          <div class="feed__section__spot__around__map__dot chili">
            <span class="feed__section__spot__around__map__dot__black"></span>
            <span class="feed__section__spot__around__map__dot__orange"></span>
          </div>
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
      <base-slider class="feed__section__bottom__trending">
        <span class="base-slider__around__icon-radio-unchecked"></span>
        <span class="base-slider__around__description">
          Trending
        </span>
      </base-slider>
      <base-slider>
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

  export default {
    name: 'Home.vue',
    components: { BaseSlider },
    props: {
      image: {
        type: String,
        default: 'https://picsum.photos/300'
      },
      alt: {
        type: String
      }
    },
    data () {
      return {
        toggle: true
      }
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
          background: url("../assets/images/map.png") no-repeat 100% 44px;
          background-size: 735px;

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

          &__dot {
            cursor: pointer;
            position: absolute;
            width: 39.5px;
            height: 39.5px;
            border-radius: 100%;
            background: rgba(0, 0, 0, 0.4);

            &__icon-close {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              margin: auto;
              width: 11.5px;
              height: 11.5px;
              z-index: 1;
              background: #000;
            }

            &__icon-close:before {
              content: "\e902";
              font-size: 12px;
              color: #fff;
              vertical-align: top;
            }

            &__black {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              margin: auto;
              width: 28px;
              height: 28px;
              border-radius: 100%;
              background: var(--black);
            }

            &__orange {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              margin: auto;
              width: 6px;
              height: 6px;
              border-radius: 100%;
              background: var(--salmon);
            }

            &__description {
              position: absolute;
              bottom: -87px;
              left: 58px;
              width: 181.4px;
              border-radius: 8px;
              box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
              background: #fff;
              z-index: 2;

              &__text {
                font-family: "Roboto-Light";
                font-size: 16px;
                margin: 0 0 11px 0;
                padding-left: 10px;
                color: var(--greyish-brown);

                span {
                  font-family: "Roboto";
                }
              }

              img {
                width: 100%;
                height: 115px;
                margin-bottom: 13px;
                object-fit: cover;
                border-radius: 8px 8px 0 0;
              }
            }

            &__description:before {
              position: absolute;
              top: 118px;
              left: -8px;
              content: " ";
              width: 16px;
              height: 16px;
              transform: rotate(-45deg);
              box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
              background: #fff;
              z-index: -1;
            }
          }

          .usa {
            top: 130px;
            left: 146px;
          }

          .brazil {
            top: 238px;
            left: 160px;
          }

          .chili {
            top: 321px;
            left: 194px;
          }

          .africa {
            top: 160px;
            left: 333px;
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
    .feed__section__spot__around__map {
      background-position: 50% 44px;
    }
    .base-slider__around__slick__img {
      height: auto;
    }
  }

  @media screen and (max-width: 770px) {
    .feed__section__spot__around__map {
      background-size: contain;
    }
  }
</style>
