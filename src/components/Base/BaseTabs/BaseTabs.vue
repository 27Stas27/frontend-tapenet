<template>
  <div class="base-tabs">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs"
            :key="tab.id"
            :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href"
             @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <base-tab name="first" :selected="true">
        <h1>What we do</h1>
      <base-tab/>
    </div>
  </div>
</template>

<script>
import BaseTab from './BaseTab'

export default {
  name: 'BaseTabs.vue',
  components: { BaseTab },
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
</script>

<style scoped>

</style>
