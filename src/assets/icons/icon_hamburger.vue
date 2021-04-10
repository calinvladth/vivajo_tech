<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
    <rect :class="$style.a" width="26" height="26"/>
    <g transform="translate(-307.016 -18)">
      <rect :class="$style.b" width="22" height="2" transform="translate(309.016 26)"/>
      <rect :class="$style.b" width="22" height="2" transform="translate(309.016 34)"/>
    </g>
  </svg>
</template>

<style lang="sass" module>
.a
  fill: none

.b
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