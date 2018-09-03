<template>
  <span class="tysha-icon">
    <span
            class="tysha-icon tysha-icon--ellipsis-v"
            v-if="icon === iconType.ellipsisV"
    />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Icon } from './enums/Icon'

@Component
export default class TyshaIcon extends Vue {
  @Prop({
    validator (v) {
      return Object.values(Icon).indexOf(v) >= 0
    }
  }) icon!: string

  get iconType () {
    return Icon
  }
}
</script>

<style lang="scss" src="./assets/vendor/icomoon/style.scss"/>
