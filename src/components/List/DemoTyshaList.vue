<template>
  <div class="demo-container">
    <div
      v-for="(color, i) in colors"
      :key="i"
      class="demo-container__item"
    >
      <div>
        {{ color }}
        <tysha-list
          :color="color"
        >
          <tysha-list-item
            :activated="selected === 0"
            @click.native="selected = 0">Item 1</tysha-list-item>
          <tysha-list-item
            :activated="selected === 1"
            @click.native="selected = 1">Item 2</tysha-list-item>
          <tysha-list-item
            :activated="selected === 2"
            @click.native="selected = 2">Item 3</tysha-list-item>
        </tysha-list>
      </div>
    </div>
  </div>
</template>

<script>
import TyshaList from './TyshaList.vue'
import TyshaListItem from './TyshaListItem.vue'
import { ThemeColor } from '../../enums/ThemeColor'

export default {
  components: {
    TyshaListItem,
    TyshaList
  },
  data () {
    return {
      selected: 0
    }
  },
  computed: {
    colors () {
      return Object.values(ThemeColor)
    }
  }
}
</script>
