<template>
  <button class="tysha-button" :class="[sizeClassList, colorClassList]">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WithSize } from '../../mixins/WithSize'
import { mixins } from 'vue-class-component'
import { WithColor } from '../../mixins/WithColor'

@Component
export default class TyshaButton extends mixins(WithSize, WithColor) {

}
</script>

<style lang="scss">
  %tysha-button{
    &:active{
      @include tysha-shadow--active;
    }
  }

  .tysha-button {
    @include reset-button;
    $shift: 8px;
    width: calc(100% + #{$shift});
    @include tysha-shadow;
    @include tysha-transition(background-color, color, box-shadow);
    border-radius: 1px;

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
        padding: 5px 7px;
      }
    }
    @include tysha-theme--size__font;

    &--color {
      &_base {
        background-color: $tysha-color--base;
        color: $tysha-color--secondary;

        &:hover{
          background-color: lighten($tysha-color--base, 10%);
          color: lighten($tysha-color--secondary, 10%) ;
        }
        @extend %tysha-button;
      }
      &_primary {
        background-color: $tysha-color--primary;
        color: $tysha-color--base;

        &:hover{
          background-color: lighten($tysha-color--primary, 20%);
          color: darken($tysha-color--base, 20%) ;
        }
        @extend %tysha-button;
      }
      &_secondary {
        background-color: $tysha-color--secondary;
        color: $tysha-color--base;

        &:hover{
          background-color: lighten($tysha-color--secondary, 5%);
          color: darken($tysha-color--base, 20%) ;
        }
        @extend %tysha-button;
      }
      &_error {
        background-color: $tysha-color--error;
        color: $tysha-color--white;

        &:hover{
          background-color: lighten($tysha-color--error, 5%);
        }
        @extend %tysha-button;
      }
      &_success {
        background-color: $tysha-color--success;
        color: $tysha-color--base;

        &:hover{
          background-color: lighten($tysha-color--success, 20%);
          color: darken($tysha-color--base, 20%) ;
        }
        @extend %tysha-button;
      }
      &_info {
        background-color: $tysha-color--info;
        color: $tysha-color--base;

        &:hover{
          background-color: lighten($tysha-color--info, 20%);
          color: darken($tysha-color--base, 20%) ;
        }
        @extend %tysha-button;
      }
      &_muted {
        background-color: $tysha-color--muted;
        color: $tysha-color--white;

        &:hover{
          background-color: lighten($tysha-color--muted, 10%);
        }
        @extend %tysha-button;
      }
    }
  }
</style>
