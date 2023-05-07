<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {},
  props: {
    scrollspy: {
      type: String,
      default: 'cls: uk-animation-slide-bottom; delay: 300;'
    },
  },
  data() {
    return {

    }
  },
})
</script>

<template>
  <footer class="footer"></footer>
</template>

<style lang="scss">
.footer {}
</style>