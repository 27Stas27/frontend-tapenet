<template>
  <div class="base-nav-fon">
    <div class="base-nav">
      <ul class="base-nav__list">
        <li
          v-for="nav in navLink"
          :key="nav.id"
        >
          <a class="base-nav__list__link" :href="href">
            {{nav.name}}
          </a>
        </li>
        <li>
          <router-link class="base-nav__list__link"
                       to="/Discover">
            Discover
          </router-link>
        </li>
      </ul>
    </div>
<!--    <base-tabs>-->

<!--    </base-tabs>-->
  </div>
</template>

<script>

export default {
  name: 'BaseNav',
  props: {
    href: {
      type: String,
      default: '#'
    }
  },
  data () {
    return {
      navLink: [
        {
          id: '1',
          name: 'Friend'
        },
        {
          id: '3',
          name: 'Hot!'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .base-nav-fon {
    background-image: linear-gradient(to left, #ff7eac, #ff8376);
  }

  .base-nav {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
    padding: 21px 15px;

    &__list {
      padding: 0;
      margin: 0 auto;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 450px;

      &__link {
        font-family: "Roboto";
        font-size: 24px;
        letter-spacing: 0px;
        color: #ffffff;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: border-bottom .7s ;
      }

      &__link:hover {
        font-weight: bolder;
        border-bottom: 2px solid #fff;
      }
    }
  }
</style>
