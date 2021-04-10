<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" :style="style">
    <g transform="translate(40) rotate(90)">
      <g transform="translate(0 40) rotate(-90)">
<!--        <rect class="c" width="40" height="40"/>-->
        <path :class="$style.d" d="M3.508,13.542l10,10,10-10" transform="translate(7.325 2.291)"/>
      </g>
    </g>
  </svg>
</template>

<style lang="sass" module>
.c, .d
  fill: none

.d
  stroke-width: 2px

</style>

<script>
export default {
  computed: {
    style() {
      return {
        width: '100%',
        height: '100%',
        stroke: 'inherit'
      }
    }
  }
}
</script>