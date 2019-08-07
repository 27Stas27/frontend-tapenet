<template>
  <div class="base-header">
    <div class="base-header__logo">
      <img src="../../../assets/images/logo.svg"
           alt="">
    </div>
    <div class="base-header__search">
      <span class="base-header__search__icon-search"></span>
      <input class="base-header__search__input"
             type="text"
             :placeholder="placeholder"
             @input="search"
      >
    </div>
    <div class="base-header__nav">
      <ul>
        <li>
          <router-link class="base-header__nav__link"
                       to="/">Home
          </router-link>
        </li>
        <li>
          <router-link class="base-header__nav__link"
                       to="/Feed">Feed
          </router-link>
        </li>
        <li>
          <a class="base-header__nav__link"
             href="#">
            <span class="base-header__nav__link__icon-bell"></span>
          </a>
        </li>
        <li>
          <a class="base-header__nav__link base-header__nav__link__last"
             href="#">
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
  },
  methods: {
    search (e) {
      this.$root.$emit('BaseHeaderSearchUpdate', e.target.value)
    }
  }
}
</script>

<style lang="scss">

  .base-header {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
    padding: 29px 15px 21px 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &__nav {

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
        display: inline-block;
        font-family: Roboto;
        font-size: 18px;
        letter-spacing: 1px;
        text-align: center;
        color: var(--black);
        text-decoration: none;
        padding-right: 57px;

        &__icon-bell:before {
          content: "\e901";
          color: #4a4a4a;
          font-size: 20px;
          font-weight: 100;
        }
      }

      &__link__last {
        padding-right: 0;
      }
    }

    &__search {
      flex-grow: 1;
      padding-left: 155px;

      &__icon-search:before {
        content: "\e986";
        color: #b7b4b4;
        font-size: 16px;
      }

      &__input {
        color: #b7b4b4;
        font-family: "SFUIText";
        font-size: 18px;
        border: none;
        outline: none;
        width: 280px;
        padding-left: 17px;

      }
    }

    &__logo {
      img{
        vertical-align: middle;
      }
    }
  }
</style>
