<template>
  <div class="demo-container">
    <div
            class="demo-container__item"
            style="margin-left: 200px"
    >
      <tysha-dropdown>
        <button slot="button">
          +
        </button>
        <tysha-list
                layer="overlay"
                color="primary"
                size="sm"
        >
          <tysha-list-item
                  size="sm"
                  activated
          >Menu item 1</tysha-list-item>
          <tysha-list-item size="sm">Menu item 1</tysha-list-item>
          <tysha-list-item size="sm">Menu item 1</tysha-list-item>
          <tysha-list-item size="sm">Menu item 1</tysha-list-item>
        </tysha-list>
      </tysha-dropdown>
    </div>

  </div>
</template>

<script>
import TyshaDropdown from './TyshaDropdown.vue'
import TyshaList from '../List/TyshaList'
import TyshaListItem from '../List/TyshaListItem'

export default {
  components: {
    TyshaListItem,
    TyshaList,
    TyshaDropdown
  }
}
</script>
