<template>
  <div class="tysha-dropdown">
    <div
      ref="button"
      class="tysha-dropdown__button"
      @click.stop="toggle"
    >
      <slot name="button"/>
    </div>
    <div
      v-if="isOpen"
      :style="contentStyle"
      class="tysha-dropdown__content"
      @click.stop
    >
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TyshaDropdown extends Vue {
  buttonHeight: number = 0
  button: any = null
  isOpen: boolean = false

  get contentStyle () {
    const button = this.button
    if (!(button instanceof Element)) return {}

    this.buttonHeight = button ? button.clientHeight : 0
    return {
      top: `${this.buttonHeight}px`
    }
  }

  setButton () {
    this.button = this.$refs.button
  }
  toggle () {
    this.isOpen = !this.isOpen
  }
  close () {
    this.isOpen = false
  }
  mounted () {
    this.setButton()
    window.addEventListener('click', this.close)
  }
  beforeDestory () {
    window.removeEventListener('click', this.close)
  }
}
</script>

<style lang="scss">
  .tysha-dropdown {
    position: relative;
    &__button {
      position: absolute;
      top: 0;
      right: 0;
    }
    &__content {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>
