<template>
  <div class="gallery">
    <img :src="picture.image.picture1"
         class="gallery__picture1">
    <img :src="picture.image.picture2"
         class="gallery__picture2">
    <img :src="picture.image.picture3"
         class="gallery__picture3">
    <img :src="picture.image.picture4"
         class="gallery__picture4">
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    picture: {
      type: Object
    }
  }
}
</script>

<style lang="scss">

.gallery {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 155px 155px;
  grid-template-columns: 452px 247px;
  margin-bottom: 29px;
  grid-gap: 22px 25px;
  grid-template-areas:
    "picture1 picture4 picture2"
    "picture1 picture3 picture2";

  &__picture2 {
    grid-area: picture2;
  }

  &__picture3 {
    grid-area: picture3;
  }

  &__picture4 {
    grid-area: picture4;
  }

  &__picture1 {
    grid-area: picture1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
