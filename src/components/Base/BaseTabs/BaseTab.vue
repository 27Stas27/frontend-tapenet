<template>
  <div class="base-tab" v-show="isActive">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseTab.vue',
  props: {
    name: {
      type: String,
      default: ''
    },
    selected: {
      default: false
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    href () {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>

<style scoped>

</style>
