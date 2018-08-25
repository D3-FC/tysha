<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <tysha-text tag="div">
              in div
            </tysha-text>
        </div>
        <div class="demo-container__item">
            <tysha-text>
             in span
            </tysha-text>
        </div>
        <div class="demo-container__item">
            Theme colors:
            <div style="background-color: #000">
              <tysha-text
                      v-for="(color, i) in colors"
                      :key="i"
                      :color="color"
              >
              {{color}}
              </tysha-text>
            </div>
        </div>
    </div>
</template>

<script>
import TyshaText from './TyshaText.vue'
import { ThemeColor } from '../../enums/ThemeColor'

export default {
  components: {
    TyshaText
  },
  computed: {
    colors () {
      return Object.values(ThemeColor)
    }
  }
}
</script>
<style src="../../assets/sass/demo.scss"/>
