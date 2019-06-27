<template>
  <base-card class="user-card">
    <base-avatar/>
    <p class="user-card__name">Shkodran Arifi</p>
    <base-button class="user-card__button">
      my profile
    </base-button>
  </base-card>
</template>

<script>
import BaseAvatar from '../Avatar/BaseAvatar'
import BaseButton from '../BaseButton/BaseButton'
import BaseCard from '../Card/BaseCard'
export default {
  name: 'UserCard',
  components: { BaseCard, BaseButton, BaseAvatar }
}
</script>

<style lang="scss">

  .user-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 33px;
    box-sizing: border-box;
    &__button{
      margin-top: auto;
      font-family: 'SourceSansPro';
    }
    .base-avatar{
      margin-top: 28px;
    }
    &__name{
      font-family: "Roboto";
      margin-top: 31px;
      font-size: 24px;
      letter-spacing: 1.5px;
      color: var(--warm-grey);
    }
  }
</style>
