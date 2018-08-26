<template>
  <div class="domain-logo">
    TYSHA
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DomainLogo extends Vue {

}
</script>

<style lang="scss">
  .domain-logo {
    height: 137px;
    background-color: #262A2A;
    font-size: 24px;
    font-weight: 800;
    color: $tysha-color--secondary;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
