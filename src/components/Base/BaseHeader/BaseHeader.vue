<template>
  <div class="base-header">
    <div class="base-header__logo">
      <p>tape</p>
    </div>
    <div class="base-header__search">
      <input class="base-header__search__input"
             type="text"
             :placeholder="placeholder"
      >
    </div>
    <div class="base-header__nav">
      <ul>
        <li>
          <a class="base-header__nav__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="base-header__nav__link" href="#">
            Feed
          </a>
        </li>
        <li>
          <a class="base-header__nav__link" href="#">
            <font-awesome-icon class="base-header__nav__link__icon" :icon="['far', 'bell']"/>
          </a>
        </li>
        <li>
          <a class="base-header__nav__link" href="#">
            <base-avatar/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BaseAvatar from '../Avatar/BaseAvatar'

  export default {
    name: 'BaseHeader',
    components: { BaseAvatar },
    props: {
      placeholder: {
        type: String,
        default: 'Search for titles, people, genres'
      }
    }
  }
</script>

<style lang="scss">
  .base-header {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 29px 0 21px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &__nav {
      flex-grow: 1;

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
      }

      .base-avatar {
        width: 40px;
        height: 40px;
      }

      &__link {
        font-family: Roboto;
        font-size: 18px;
        letter-spacing: 1px;
        text-align: center;
        color: var(--black);
        text-decoration: none;

        &__icon {
          color: #4a4a4a;
          width: 20px !important;
          height: 21px;
          vertical-align: middle;
          font-weight: 100;
        }
      }
    }

    &__search {
      flex-grow: 2;
      padding-left: 155px;

      &__input {
        color: #b7b4b4;
        font-family: "SFUIText";
        font-size: 18px;
        border: none;
        outline: none;
        width: 280px;
        padding-left: 25px;
        background: url("../../../assets/images/search.png") no-repeat 0% 50%;
        background-size: 20px;
      }
    }

    &__logo {
      p {
        font-size: 35px;
        margin: 0;
        font-weight: bold;
        color: var(--salmon);
        font-family: "SourceSansPro";
      }
    }
  }
</style>
