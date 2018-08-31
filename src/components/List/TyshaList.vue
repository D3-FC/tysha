<template>
  <div
    :class="[colorClassList, sizeClassList]"
    class="tysha-list"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { WithColor } from '../../mixins/WithColor'
import { mixins } from 'vue-class-component'
import { WithSize } from '../../mixins/WithSize'

@Component
export default class TyshaList extends mixins(WithColor, WithSize) {

}

</script>

<style lang="scss">
  .tysha-list {
    background-color: transparent;
    @include tysha-theme--color('background-color');
    border-radius: 1px;
    padding-top: 4px;
    padding-bottom: 4px;

    &--color{
      &_primary, &_secondary, &_error, &_success,&_info, &_muted{
        color: $tysha-color--base;
      }
    }
    &--size {
      &_lg {
        width: $tysha-list__width--lg;
      }
      &_md {
        width: $tysha-list__width--md;
      }
      &_sm {
        width: $tysha-list__width--sm;
      }
      &_xs {
        width: $tysha-list__width--xs;
      }
    }
  }
</style>
