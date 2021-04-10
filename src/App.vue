<template>
  <div>
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/header'

export default {

  components: {
    HeaderComponent
  }
}
</script>

<style lang="sass">
@import './assets/style/index.sass'
</style>