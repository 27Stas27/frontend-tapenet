<template>
  <div>
    <button class="base-button">
      <slot/>
    </button>
  </div>
</template>

<style lang="scss">
  .base-button {
    min-width: 162px;
    min-height: 48px;
    border-radius: 3px;
    background: none;
    outline: none;
    border: solid 1px var(--salmon);
    text-transform: capitalize;
  }
</style>
