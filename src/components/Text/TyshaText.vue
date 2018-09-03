<template>
  <component
    :is="tag"
    :class="[sizeClassList, colorClassList]"
    class="tysha-text">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { WithColor } from '../../mixins/WithColor'
import { mixins } from 'vue-class-component'
import { WithSize } from '../../mixins/WithSize'

@Component
export default class TyshaText extends mixins(WithColor, WithSize) {
  @Prop({default: 'span', type: String}) tag!: string
}
</script>

<style lang="scss">
  .tysha-text {
    @include tysha-theme--color__color;
    @include tysha-theme--size__font;
  }
</style>
