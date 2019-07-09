<template>
  <div class="map-button"
       @click="toggle = !toggle">
    <span class="map-button__icon-close"
          v-show="toggle"></span>
    <span class="map-button__black"></span>
    <span class="map-button__orange"></span>
    <div class="map-button__description"
         v-show="toggle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MapButton.vue',
    data () {
      return {
        toggle: false
      }
    }
  }
</script>

<style lang="scss">
.map-button{
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
</style>
