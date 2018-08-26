<template>
  <component :is="tag" class="tysha-text" :class="[sizeClassList, colorClassList]">
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
    @include tysha-theme--color;
    @include tysha-theme--font__size;
  }
</style>
