<template>
  <div>
    <div class="demo-container">
      <div
        v-for="(size, i) in sizes"
        :key="i"
        class="demo-container__item"
      >

        <div>
          {{ size }}
          <tysha-list-item :size="size" activated>
            Menu item
          </tysha-list-item>
        </div>
      </div>

    </div>
    <div class="demo-container">
      <div class="demo-container__item">
        <div>
          <div>activated</div>
          <tysha-list-item activated>
            List item active
          </tysha-list-item>
        </div>
      </div>
    </div>
    <div class="demo-container">
      <div class="demo-container__item">
        <div>
          <div>genera</div>
          <tysha-list-item>
            List item
          </tysha-list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TyshaListItem from './TyshaListItem.vue'
import { ThemeSize } from '../../enums/ThemeSize'

export default {
  components: {
    TyshaListItem
  },
  computed: {
    sizes () {
      return Object.values(ThemeSize)
    }
  }
}
</script>
