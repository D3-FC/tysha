<template>
  <tysha-board class="domain-current-user">
    <tysha-text
      tag="div"
      size="lg"
      color="secondary"
    >
      Natalia Zavarotnuk
    </tysha-text>
    <tysha-text
      tag="div"
      size="xs"
      color="muted"
    >
      Administrator
    </tysha-text>
  </tysha-board>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TyshaBoard from '../../Board/TyshaBoard.vue'
import TyshaText from '../../Text/TyshaText.vue'

@Component({
  components: {TyshaText, TyshaBoard}
  })
export default class DomainCurrentUser extends Vue {

}
</script>

<style lang="scss">
  .domain-current-user {
    background: url("https://images.pexels.com/photos/614503/pexels-photo-614503.jpeg?auto=compress&cs=tinysrgb&h=200") center no-repeat;
    background-size: cover;
    height: 153px;
  }
</style>
