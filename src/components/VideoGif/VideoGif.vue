<template>
  <div class="video-gif">
    <img class="video-gif__img"
         :src="image"
         :alt="alt"
    >
    <span class="video-gif__plashka">
        <img
          src="../../assets/images/gif.svg"
          alt="gif">
      </span>
  </div>
</template>

<script>
  export default {
    name: "VideoGif",
    props: {
      image: {
        type: String,
        default: 'https://via.placeholder.com/600x500'
      },
      alt: {
        type: String,
      },

    },
  }
</script>

<style lang="scss">
  .video-gif {
    width: 100%;
    position: relative;
    max-width: 630px;
    height: 361px;

    &__plashka {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 15px 0 var(--pinkish-grey-50);
      background-color: var(--light-black-40);

      img {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        margin: auto;
      }
    }
  }

</style>
