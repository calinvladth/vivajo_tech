<template>
  <div :class="$style.box">
    <div>
      <a href="#overview">{{ link_1[lang] }}</a>
    </div>
    <div>
      <a href="#layout">
        {{ link_2[lang] }}
      </a>
    </div>
  </div>
</template>

<style lang="sass" module>
@import "./index"
</style>

<script>
export default {
  data() {
    return {
      link_1: {
        en: 'Overview',
        de: 'Überblick'
      },
      link_2: {
        en: 'Layout options',
        de: 'Layoutoptionen'
      },
    }
  },
  computed: {
    lang() {
      return this.$store.state.config.lang
    }
  }
}
</script>
