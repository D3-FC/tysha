<template>
  <component
    :is="tag"
    class="tysha-board"
  >
    <div class="tysha-board__container">
      <div class="tysha-board__content">
        <slot/>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TyshaBoard extends Vue {
  @Prop({type: String, default: 'div'}) tag!: string
}
</script>

<style lang="scss">
  .tysha-board {
    @include reset-block;
    @include tysha-shadow;
    display: flex;
    &__container {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    &__content {
      @include reset-block;
      background-color: $tysha-board__background__color;
      margin-top: auto;
      padding: 10px;
    }
  }
</style>
