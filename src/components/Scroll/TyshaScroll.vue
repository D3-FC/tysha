<template>
  <vue-perfect-scrollbar
    :settings="settings"
    class="tysha-scroll-area"
    @ps-y-reach-end="scrollEnd"
  >
    <slot/>
  </vue-perfect-scrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'TyshaScroll',
  components: {
    VuePerfectScrollbar
  },
  props: {},
  data () {
    return {
      settings: {
        minScrollbarLength: 20,
        useBothWheelAxes: false,
        suppressScrollX: true
      }
    }
  },
  methods: {
    scrollEnd () {
      this.$emit('scrollEnd')
    }
  }
}
</script>

<style
        scoped
>
    .tysha-scroll-area {
      max-height: 100%;
      display: block;
      padding-right: 20px;

      &-container {
        height: 100%;
      }
    }
</style>
