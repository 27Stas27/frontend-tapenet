<template>
  <div class="map-description">
      <img :src="mapD.image"
           alt="lorem">
      <p class="map-description__text">
        <span>Place:</span><br>
        {{mapD.place}}
      </p>
      <p class="map-description__text">
        <span>Time:</span><br>
        {{mapD.time}}
      </p>
  </div>
</template>

<script>
  export default {
    name: 'MapDescription.vue',
    props: {
      mapD: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  .map-description {
      position: absolute;
      top: 0;
      left: 0;
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
