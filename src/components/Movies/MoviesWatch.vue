<template>
  <BaseCard class="movies-watch">
    <p>Movies to Watch</p>
    <ul>
      <li>
        <a href="#">Designated Survivor</a>
      </li>
      <li>
        <a href="#">Narcos</a>
      </li>
      <li>
        <a href="#">Abstract</a>
      </li>
      <li>
        <a href="#">Ice Age</a>
      </li>
      <li>
        <a href="#">Home alone</a>
      </li>
    </ul>
  </BaseCard>
</template>

<script>
import BaseCard from "../Base/Card/BaseCard";
export default {
  name: 'MoviesWatch',
  components: {BaseCard}
}
</script>

<style lang="scss">

  .movies-watch{
    padding: 41px 60px 60px 41px;
    box-sizing: border-box;
    margin: 30px 0;
    ul{
      padding-left: 0;
      list-style: none;
      margin: 0;
      li{
        padding-bottom: 45px;
      }
      li:last-child{
        padding-bottom: 0;
      }
    }
    a {
      color: var(--salmon);
      text-decoration: none;
      font-size: 24px;
      letter-spacing: 1.5px;
      font-family: "Roboto";
    }
    p{
      font-size: 24px;
      letter-spacing: 1.5px;
      color: var(--warm-grey);
      text-align: center;
      margin:0 0 52px 0;
      font-family: "Roboto";
    }
  }
</style>
