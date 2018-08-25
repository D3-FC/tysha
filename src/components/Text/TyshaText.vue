<template>
  <component :is="tag" class="tysha-text" :class="colorClassList">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { WithColor } from '../../mixins/WithColor'
import { mixins } from 'vue-class-component'

@Component
export default class TyshaText extends mixins(WithColor) {
  @Prop({default: 'span', type: String}) tag!: string
}
</script>

<style lang="scss">
  .tysha-text {
    font-size: 14px;

    @include tysha-theme--color;
  }
</style>
