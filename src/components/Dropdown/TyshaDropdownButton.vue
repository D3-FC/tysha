<template>
  <tysha-button color="base" size="xs" class="tysha-dropdown-button">
    <tysha-icon icon="ellipsis-v" class="tysha-dropdown-button__icon"/>
  </tysha-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TyshaIcon from '../Icon/TyshaIcon.vue'
import TyshaButton from '../Button/TyshaButton'

@Component({
  components: {TyshaButton, TyshaIcon}
  })
export default class TyshaDropdownButton extends Vue {

}
</script>

<style lang="scss">
  .tysha-dropdown-button {
    &__icon{
      margin-left: -3px;
      font-size: 18px;
    }
  }
</style>
