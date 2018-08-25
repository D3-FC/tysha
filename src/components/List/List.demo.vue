<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <tysha-list>
                <tysha-list-item activated>Item 1</tysha-list-item>
                <tysha-list-item>Item 2</tysha-list-item>
                <tysha-list-item>Item 3</tysha-list-item>
            </tysha-list>
        </div>
    </div>
</template>

<script>
import TyshaList from './TyshaList.vue'
import TyshaListItem from './TyshaListItem'

export default {
  components: {
    TyshaListItem,
    TyshaList
  }
}
</script>
