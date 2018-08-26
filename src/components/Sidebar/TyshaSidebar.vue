<template>
  <nav class="tysha-sidebar">
    <div class="tysha-sidebar__container">
      <div class="tysha-sidebar__logo">
        <slot name="logo"/>
      </div>
      <div class="tysha-sidebar__user">
        <slot name="user"/>
      </div>
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
      flex: 1;
    }
    &__logo{
      @include reset-block;
      @include tysha-shadow;
      z-index: 1;
      flex-shrink: 0;
    }
    &__user{
      @include reset-block;
      @include tysha-shadow;
      flex-shrink: 0;
    }
  }
</style>
