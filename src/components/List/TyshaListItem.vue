<template>
  <div class="tysha-list-item" :class="{'tysha-list-item--status_active': activated}">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'tysha-list-item',
  props: {
    activated: Boolean
  }
}
</script>

<style lang="scss">
  .tysha-list-item {
    $tysha-list-item__right-margin: 32px;

    background-color: transparent;
    padding: 13px (20px + $tysha-list-item__right-margin) 13px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include tysha-transition(background-color);
    @include reset-button;
    border-radius: 1px;
    width: calc(100% + #{$tysha-list-item__right-margin});
    right: -$tysha-list-item__right-margin;
    font-family: $tysha-font;
    font-size: 20px;
    font-weight: 300;

    &--status_active{
      background-color: $tysha-sidebar__item--hover__background__color;
    }
  }
</style>
