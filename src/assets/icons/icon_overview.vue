<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" :style="style" viewBox="0 0 48 48">
    <rect :class="$style.a" width="48" height="48"/>
    <path :class="$style.b" d="M1110.608,898.388c1.565-5.441,6.229-9.388,11.739-9.388s10.175,3.949,11.74,9.391"
          transform="translate(-1098.346 -872.043)"/>
    <path :class="$style.c"
          d="M4.695,9.391a4.7,4.7,0,0,1-3.32-8.016A4.7,4.7,0,0,1,6.254.265,2.113,2.113,0,1,0,9.126,3.137,4.7,4.7,0,0,1,4.695,9.391Z"
          transform="translate(19.304 21.652)"/>
  </svg>
</template>

<style lang="sass" module>
.a, .b
  fill: none


.b
  stroke: #1a1a1a
  stroke-miterlimit: 10
  stroke-width: 2px

.c
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