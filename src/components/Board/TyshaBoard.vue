<template>
  <component
          :is="tag"
          class="tysha-board"
          :style="style"
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
  @Prop(String) src!: string

  get style () {
    const style: any = {}
    if (this.src) {
      style.backgroundImage = `url('${this.src}')`
    }
    return style
  }
}
</script>

<style lang="scss">
  .tysha-board {
    @include reset-block;
    @include tysha-shadow;
    display: flex;

    background: center no-repeat;
    background-size: cover;
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
