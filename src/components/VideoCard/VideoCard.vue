<template>
  <base-card class="video-card">
    <div class="video-card__top">
      <div class="video-card__top_name">
        <base-avatar class="video-card__avatar"/>
        <p>{{video.user}}</p>
      </div>
      <h6>{{video.publishedAt}}</h6>
    </div>
    <video-gif :image="video.image" alt="mountain"/>
    <div class="video-card__bottom">
      <div class="video-card__bottom_title">
        <p>{{video.name}}</p>
      </div>
      <div class="video-card__bottom_info">
        <div>
          <p>Year: <span class="video-card__bottom_year">{{video.released}}</span></p>
          <p>Genders: {{video.genders}} </p>
        </div>
        <div>
          <p><span class="video-card__bottom_age">{{video.available}}</span></p>
          <p>{{video.season}}</p>
        </div>
      </div>
    </div>
    <div class="video-card__comment">
      <div>
        <p>Add a comment</p>
      </div>
      <div class="video-card__comment_links">
        <a href="#">
          <img src="../../assets/images/2.svg" alt="heart">
        </a>
        <a href="#">
          <img src="../../assets/images/1.svg" alt="share">
        </a>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '../Base/Card/BaseCard'
import VideoGif from '../Base/VideoGif/VideoGif'
import BaseAvatar from '../Base/Avatar/BaseAvatar'

export default {
  name: 'VideoCard',
  components: { VideoGif, BaseCard, BaseAvatar },
  props: {
    video: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .video-card {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    width: 100%;
    padding: 25px 35px 35px 35px;
    box-sizing: border-box;
    margin-bottom: 50px;

    &__avatar {
      width: 54px;
      height: 54px;
    }

    .video-gif__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 21px;

      h6 {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: 0px;
        text-align: right;
        color: var(--warm-grey);
        margin: 5px 0;
      }

      &_name {
        display: flex;
        align-items: center;

        p {
          font-family: Roboto;
          font-size: 24px;
          letter-spacing: 0px;
          color: var(--black);
          padding-left: 20px;
          margin: 5px 0;
          text-transform: capitalize;
        }
      }
    }

    &__bottom {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 26px 0 20px 0;
      border-bottom: solid 1px #dbdee3;

      &_title {
        flex: 1;
        display: flex;

        p {
          font-family: Roboto;
          font-size: 24px;
          letter-spacing: 8.9px;
          color: var(--greyish-brown);
          text-transform: uppercase;
          padding: 3px 0px 3px 53px;
          background: url("../../assets/images/play.jpg") no-repeat 0% 50%;
          background-size: 34px;
          margin: 0;
        }
      }

      &_year {
        font-family: Roboto-Light;
      }

      &_age {
        text-align: center;
        width: 35px;
        display: inline-block;
        border: solid 1px var(--warm-grey);
      }

      &_info {
        display: flex;
        text-align: right;
        align-items: center;
        justify-content: flex-end;

        div:first-child {
          min-width: 150px;
        }

        div:last-child {
          padding-left: 16px;
          min-width: 70px;
        }

        p {
          font-family: Roboto;
          font-size: 15px;
          margin: 0;
          padding: 10px 0;
          letter-spacing: 0.94px;
          color: var(--warm-grey);
        }
      }
    }

    &__comment {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding-top: 23px;

      p {
        margin: 0;
        font-family: Roboto;
        font-size: 15px;
        letter-spacing: 0.94px;
        color: var(--warm-grey);
      }

      &_links {
        a {
          padding-right: 10px;
        }

        a:last-child {
          padding-right: 0;
        }
      }
    }
  }

</style>
