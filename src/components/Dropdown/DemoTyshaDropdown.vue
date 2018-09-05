<template>
  <div class="demo-container">
    <div
            class="demo-container__item"
            style="margin-left: 200px"
    >
      <tysha-dropdown>
        <tysha-dropdown-button slot="button"/>
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
import TyshaList from '../List/TyshaList.vue'
import TyshaListItem from '../List/TyshaListItem.vue'
import TyshaDropdownButton from './TyshaDropdownButton'

export default {
  components: {
    TyshaDropdownButton,
    TyshaListItem,
    TyshaList,
    TyshaDropdown
  }
}
</script>
