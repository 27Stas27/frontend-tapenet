<template>
  <svg class="map-svg"
       width="100%"
       height="100%"
       viewBox="0 50 750 388"
 >

    <image xlink:href="../../assets/images/map.svg"
           height="388"
           width="750"/>
    <circle
            data-id="map-svg__usa"
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
            fill="#ff8376"
            data-id="map-svg__usa"/>
    <circle
            data-id="map-svg__brazil"
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
            fill="#ff8376"
            data-id="map-svg__brazil"/>
    <circle
            data-id="map-svg__chili"
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
            fill="#ff8376"
            data-id="map-svg__chili"/>
    <circle
            data-id="map-svg__africa"
            @click="showDescription"
            cx="380"
            cy="160"
            r="15"
            stroke="rgba(0,0,0,0.5)"
            stroke-width="15"
            fill="#000"/>
    <circle v-if="!isCircle"
            cx="380"
            cy="160"
            r="3"
            fill="#ff8376"
            data-id="map-svg__africa"/>
      <polyline v-else
                points="375,155, 385,165 380,160 375,165 385,155"
                fill="none" stroke="#fff" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  name: 'MapSvg',
  data () {
    return {
      isCircle: false
    }
  },
  methods: {
    showDescription (e) {
      if (e.target.tagName === 'circle') {
        this.isCircle = !this.isCircle
        this.$emit('showDescription', {
          x: e.target.cx.animVal.valueAsString,
          y: e.target.cy.animVal.valueAsString,
          country: e.target.dataset.id
        })
      } else {
        this.$emit('showDescription', {
          x: '0',
          y: '0',
          country: ''
        })
      }
    }
  },
  created () {
    document.addEventListener('click', this.showDescription)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.showDescription)
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
