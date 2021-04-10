<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" :style="style">

    <rect :class="$style.a" width="48" height="48"/>
    <g transform="translate(4.235 36)">
      <g transform="translate(3.175 1.765)">
        <path :class="$style.b" d="M657.128,492.89l16.8,8.118L690.3,492.89" transform="translate(-657.128 -492.89)"/>
      </g>
      <path :class="$style.c" d="M652.63,490.144l4.55.589-1.765,3.056Z" transform="translate(-652.63 -490.144)"/>
      <path :class="$style.c" d="M706.93,490.145l-2.785,3.646-1.765-3.056Z" transform="translate(-667.401 -490.144)"/>
    </g>
    <g transform="translate(12 7.765)">
      <path :class="$style.d" d="M539,421.176V407.059L527,400l-12,7.059v14.118l12,7.059Z" transform="translate(-515 -400)"/>
      <path :class="$style.d" d="M515,410l12,7.059L539,410" transform="translate(-515 -402.941)"/>
      <line :class="$style.d" y2="14.118" transform="translate(12 14.118)"/>
    </g>
  </svg>
</template>

<style lang="sass" module>
.a, .b, .d
  fill: none


.b, .d
  stroke: #1a1a1a
  stroke-miterlimit: 10


.b
  stroke-dasharray: 4


.c
  fill: #1a1a1a


.d
  stroke-width: 2px


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

