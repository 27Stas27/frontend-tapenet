<template>
  <footer class="base-footer">
    <div>
      <ul class="base-footer__list">
        <li class="base-footer__list__title">
          COMPANY
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            About Us
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="">
            Join the Team
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Pricing
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="base-footer__list">
        <li class="base-footer__list__title">
          ME
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Account
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            FAQ
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Subscription
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="base-footer__list">
        <li class="base-footer__list__title">
          CONTACT
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Contact Us
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="">
            Support
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Press Opportunities
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="#">
            Press Kit
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="base-footer__list">
        <li class="base-footer__list__title">
          TALK TO SALES
        </li>
        <li>
          <a class="base-footer__list__link" href="tel:910-434-4703">
            <span>Phone:</span> 910-434-4703
          </a>
        </li>
        <li>
          <a class="base-footer__list__link" href="mailto:sales@tape.net">
            <span>Email:</span> sales@tape.net
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="base-footer__list">
        <li class="base-footer__list__title">
          © 2017 Shkodran Arifi
        </li>
        <li>
          <a href="#">
            <img class="base-footer__list__link__img"
              src="../../../assets/images/combined.svg"
              alt="facebook">
          </a>
          <a href="#">
            <img class="base-footer__list__link__img"
              src="../../../assets/images/shape.svg"
              alt="twitter">
          </a>
          <a href="#">
            <img class="base-footer__list__link__img"
              src="../../../assets/images/invalid.svg"
              alt="invalid">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'BaseFooter'
  }
</script>

<style lang="scss">
  .base-footer {
    width: 100%;
    max-width: 1200px;
    padding: 125px 0;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    &__list {
      padding: 0;
      margin: 0;
      list-style: none;

      &__title {
        font-family: "Roboto";
        font-size: 15px;
        font-weight: bold;
        padding-bottom: 20px;
        line-height: 1.2;
        letter-spacing: normal;
        color: var(--greyish-brown);
      }
      &__link{
        text-decoration: none;
        font-family: Roboto;
        font-size: 14px;
        line-height: 1.86;
        color: var(--greyish-brown);
        &__img{
          height: 19px;
          margin-right: 14px;
          opacity: .6;
          object-fit: contain;
          vertical-align: top;
        }
        span{
          font-weight: bold;
        }
      }
    }
  }
</style>
