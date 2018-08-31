
<template>
  <div
    :class="[sizeClassList, {
      'tysha-list-item--status_active': activated,
    }]"
    class="tysha-list-item">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { WithSize } from '../../mixins/WithSize'

enum ListItemTheme {
  general = 'general',
  small = 'small'
}

@Component
export default class TyshaListItem extends mixins(WithSize) {
  @Prop(Boolean) activated!: boolean
}
</script>

<style lang="scss">
  .tysha-list-item {
    $tysha-list-item__right-margin: 32px;
    $shift: 8px;

    background-color: transparent;
    @include tysha-transition(background-color);
    @include reset-button;
    width: calc(100% + #{$shift});
    font-family: $tysha-font;
    font-size: 20px;
    font-weight: 300;
    white-space: normal;
    justify-content: flex-start;
    text-align: left;

    &--size {
      &_lg {
        padding: 13px 20px;
      }
      &_md {
        padding: 10px 17px;
      }
      &_sm {
        padding: 6px 10px;
      }
      &_xs {
        padding: 3px 5px;
      }
    }
    @include tysha-theme--font__size;
    &--status_active{
      background-color: $tysha-sidebar__item--hover__background__color!important;
      color: $tysha-color--secondary;
      @include tysha-shadow;
      border-radius: 1px;
      position: relative;
    }
    &:hover{
      @include tysha-transition(background-color);
      background-color: rgba($tysha-color--base, 0.1);
    }
  }
</style>
