<template>
    <vue-perfect-scrollbar
            class="tysha-scroll-area"
            :settings="settings"
            @ps-y-reach-end="scrollEnd"
    >
        <slot/>
    </vue-perfect-scrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'TyshaScroll',
  data () {
    return {
      settings: {
        minScrollbarLength: 20,
        useBothWheelAxes: false,
        suppressScrollX: true
      }
    }
  },
  components: {
    VuePerfectScrollbar
  },
  props: {},
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
