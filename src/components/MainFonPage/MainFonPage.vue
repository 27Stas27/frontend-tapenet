<template>
  <div class="main-fon-page">
    <section class="friends-page__body">
      <slot/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'MainFonPage'
  }
</script>

<style lang="scss">
  .main-fon-page {
    background: #f7f8fa;
    padding-bottom: 107px;
    padding-top: 50px;
  }
  .friends-page__body {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }

</style>
