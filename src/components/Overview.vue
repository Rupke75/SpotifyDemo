<template>
  <m-layout-grid>
    <m-layout-grid-cell>
      <m-button>Hello</m-button>
    </m-layout-grid-cell>
  </m-layout-grid>
</template>

<script>
import Vue from 'vue'
import Button from 'material-components-vue/dist/button'
import LayoutGrid from 'material-components-vue/dist/layout-grid'
Vue.use(Button)
Vue.use(LayoutGrid)

export default {
  name: 'Overview',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "material-components-vue/dist/button/styles";
  @import "material-components-vue/dist/button/button.min.css";
  @import "material-components-vue/dist/layout-grid/styles";
  @import "material-components-vue/dist/layout-grid/layout-grid.min.css";
</style>
