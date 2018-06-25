<template>
  <m-layout-grid>
    <m-layout-grid-cell>
      <m-textfield v-model="username" id="textfield">
        <m-floating-label for="textfield">User name:</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-textfield>
      <m-textfield v-model="password" id="passwordfield" type="password" required minlength="8" aria-controls="pw-validation">
        <m-floating-label for="passwordfield">Password:</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-textfield>
    </m-layout-grid-cell>
    <m-layout-grid-cell>
      <m-button v-on:click="login">Login</m-button>
    </m-layout-grid-cell>
  </m-layout-grid>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Button from 'material-components-vue/dist/button'
import LayoutGrid from 'material-components-vue/dist/layout-grid'
import LineRipple from 'material-components-vue/dist/line-ripple'
import FloatingLabel from 'material-components-vue/dist/floating-label'
import TextField from 'material-components-vue/dist/textfield'
Vue.use(Button)
Vue.use(FloatingLabel)
Vue.use(LayoutGrid)
Vue.use(LineRipple)
Vue.use(TextField)
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      axios.get('https://accounts.spotify.com/authorize/?client_id=03d39f1e9afd4a55872f49d7c5683706&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A8080%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09')
        .then((response) => { return response.json() })
        .then((data) => {
          console.log(`Spotify login: ${data}`)
        }).catch(error => { console.log(error) })
    }
  }}
</script>

<style lang="scss">
  @import "material-components-vue/dist/button/styles";
  @import "material-components-vue/dist/button/button.min.css";
  @import "material-components-vue/dist/floating-label/styles";
  @import "material-components-vue/dist/floating-label/floating-label.min.css";
  @import "material-components-vue/dist/layout-grid/styles";
  @import "material-components-vue/dist/layout-grid/layout-grid.min.css";
  @import "material-components-vue/dist/line-ripple/styles";
  @import "material-components-vue/dist/line-ripple/line-ripple.min.css";
  @import "material-components-vue/dist/textfield/styles";
  @import "material-components-vue/dist/textfield/textfield.min.css";
</style>
