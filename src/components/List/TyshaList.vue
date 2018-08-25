<template>
  <div class="tysha-list">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VList extends Vue {

}
</script>

<style lang="scss">
  .tysha-list {
    background-color: transparent;
  }
</style>
