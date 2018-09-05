<template>
    <div class="demo-container">
        <div class="demo-container__item" style="background-color: white">
            <div v-for="(color, i) in colors" :key="i" style="margin: 10px;">
              {{color}}

              <div style=" border: 1px solid black">
                <tysha-button  :color="color">
                +
                </tysha-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import TyshaButton from './TyshaButton.vue'
import { ThemeColor } from '../../enums/ThemeColor'

export default {
  components: {
    TyshaButton
  },
  computed: {
    colors () {
      return Object.values(ThemeColor)
    }
  }
}
</script>
