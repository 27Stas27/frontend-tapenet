<template>
    <div class="base-avatar">
      <img
        :src="image"
        :alt="alt"
      >
    </div>
</template>

<script>
  export default {
    name: "baseAvatar",
    props: {
      image: {
        type: String,
        default: 'https://picsum.photos/200'
      },
      alt: {
        type: String,
      },

    },
  }
</script>

<style lang="scss">
  .base-avatar{
      width: 139px;
      height: 139px;
      border-radius: 139px;
      overflow: hidden;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
