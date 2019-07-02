<template>
    <section class="base-card">
      <slot/>
    </section>
</template>

<style lang="scss">
  .base-card {
    align-self: flex-start;
    min-width: 450px;
    min-height: 397px;
    border-radius: 10px;
    box-shadow: 0 -1px 54px 0 var(--silver-50);
    background-color: #ffffff;
  }
</style>
