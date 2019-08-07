<template>
  <div :class="picture.class.galleryClass">
    <img :src="picture.image.picture1"
         :class="picture.class.className1">
    <img :src="picture.image.picture2"
         :class="picture.class.className2">
    <img :src="picture.image.picture3"
         :class="picture.class.className3">
    <img :src="picture.image.picture4"
         :class="picture.class.className4">
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

.gallery-top {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto 29px auto;
  display: grid;
  grid-template-rows: 155px 155px;
  grid-template-columns: 452px 247px;
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
.gallery-bottom {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto 29px auto;
  display: grid;
  grid-template-rows: 155px 155px;
  grid-template-columns: 247px 452px;
  grid-gap: 22px 25px;
  grid-template-areas:
    "picture5 picture7 picture8"
    "picture6 picture7 picture8";

  &__picture5 {
    grid-area: picture5;
  }

  &__picture6 {
    grid-area: picture6;
  }

  &__picture7 {
    grid-area: picture7;
  }

  &__picture8 {
    grid-area: picture8;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
