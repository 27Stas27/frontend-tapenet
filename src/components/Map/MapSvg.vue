<template>
  <svg class="map-svg"
       width="100%"
       height="100%"
       viewBox="0 50 750 388">

    <image xlink:href="../../assets/images/map.svg"
           height="388"
           width="750"/>
    <circle class="map-svg__usa"
            @click="showDiscription"
            cx="230"
            cy="120"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle class="map-svg__usa"
            cx="230"
            cy="120"
            r="3"
            fill="#ff8376"/>
    <circle cx="250"
            cy="225"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="250"
            cy="225"
            r="3"
            fill="#ff8376"/>
    <circle cx="280"
            cy="290"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="280"
            cy="290"
            r="3"
            fill="#ff8376"/>
    <circle cx="380"
            cy="160"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="380"
            cy="160"
            r="3"
            fill="#ff8376"/>
  </svg>
</template>

<script>
  export default {
    name: 'MapSvg',
    data () {
      return {
        toggle: true,
        country: 'usa'
      }
    },
    methods: {
      showDiscription () {
        this.$emit('showDiscription', {
          toggle: this.toggle,
          country: this.country
        })
      }
    }
  }
</script>

<style lang="scss">
  .map-svg {
    &__usa {
      cursor: pointer;
    }
  }
</style>
