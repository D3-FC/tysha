<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <ul style="display: flex; margin: 10px">
               <li
                       v-for="(icon, i) in icons"
                       :key="i"
               >
                    <div>
                      {{icon}}
                    </div>
                    <div style="margin-top: 10px; display: flex; justify-content: center">
                      <tysha-icon :icon="icon"/>
                    </div>
               </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TyshaIcon from './TyshaIcon.vue'
import { Icon } from './enums/Icon'

export default {
  components: {
    TyshaIcon
  },
  computed: {
    icons () {
      return Object.values(Icon)
    }
  }
}
</script>
