<template>
  <svg class="map-svg"
       width="100%"
       height="100%"
       viewBox="0 50 750 388">

    <image xlink:href="../../assets/images/map.svg"
           height="388"
           width="750"/>
    <circle
            id="map-svg__usa"
            @click="showDescription"
            cx="230"
            cy="120"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="230"
            cy="120"
            r="3"
            fill="#ff8376"/>
    <circle
            id="map-svg__brazil"
            @click="showDescription"
            cx="250"
            cy="225"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="250"
            cy="225"
            r="3"
            fill="#ff8376"/>
    <circle
            id="map-svg__chili"
            @click="showDescription"
            cx="280"
            cy="290"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle cx="280"
            cy="290"
            r="3"
            fill="#ff8376"/>
    <circle
            id="map-svg__africa"
            @click="showDescription"
            cx="380"
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
  methods: {
    showDescription (e) {
      this.$emit('showDescription', {
        x: e.target.cx.animVal.valueAsString,
        y: e.target.cy.animVal.valueAsString,
        country: e.target.id
      })
    }
  }
}
</script>

<style lang="scss">
  .map-svg {
    circle {
      cursor: pointer;
    }
  }
</style>
