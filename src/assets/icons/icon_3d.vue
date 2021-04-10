<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" :style="style">

    <path :class="$style.e" d="M2795-814h-4v-40h40v12h-8v-8h-12v12h-4v-12h-12v0h4v32h24v-12h-8v-4h16v20Zm16-24v-12h4v12Z"
          transform="translate(-2791 854)"/>
  </svg>
</template>

<style lang="sass" module>
.e
  fill: #1a1a1a

</style>

<script>
export default {
  computed: {
    style() {
      return {
        width: '100%',
        height: '100%'
      }
    }
  }
}
</script>