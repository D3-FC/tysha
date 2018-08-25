<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <tysha-list-item>
              Menu item
            </tysha-list-item>
        </div>
        <div class="demo-container__item">
            <tysha-list-item activated>
              List item active
            </tysha-list-item>
        </div>
    </div>
</template>

<script>
import TyshaListItem from './TyshaListItem.vue'

export default {
  components: {
    TyshaListItem
  }
}
</script>
<style src="../../assets/sass/demo.scss"/>
