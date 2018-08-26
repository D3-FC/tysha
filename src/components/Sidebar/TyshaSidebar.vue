<template>
  <nav class="tysha-sidebar">
    <div class="tysha-sidebar__container">
      <div class="tysha-sidebar__logo">TYSHA</div>
      <div class="tysha-sidebar__user"></div>
      <tysha-scroll class="tysha-sidebar__list-container">
        <slot/>
      </tysha-scroll>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TyshaScroll from '../Scroll/TyshaScroll.vue'
@Component({
  components: {TyshaScroll}
  })
export default class TyshaSidebar extends Vue {

}
</script>

<style lang="scss">
  .tysha-sidebar {
    @include reset-nav;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 200px;
    max-width: 200px;
    display: flex;
    flex-direction: row;
    color: $tysha-sidebar__text__color;
    &__container{
      @include reset-block;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &__list-container{
      @include reset-block;
      border-right: 1px solid rgba($tysha-color--secondary, 0.4);
      margin-top: 22px;
      margin-bottom: 22px;
      flex: 1;
    }
    &__logo{
      @include reset-block;
      height: 137px;
      background-color: #262A2A;
      @include tysha-shadow;
      z-index: 1;
      font-size: 24px;
      font-weight: 800;
      color: $tysha-color--secondary;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    &__user{
      @include reset-block;
      background: url("https://images.pexels.com/photos/614503/pexels-photo-614503.jpeg?auto=compress&cs=tinysrgb&h=200") center no-repeat;
      background-size: cover;
      height: 153px;
      @include tysha-shadow;
      flex-shrink: 0;
    }
  }
</style>
