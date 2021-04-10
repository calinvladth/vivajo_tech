<template>
  <div :class="$style.box">
    <div>
      <img :srcset="`${imageSmall} 1x, ${imageBig} 2x`" :src="imageBig" alt="">
    </div>
  </div>
</template>

<style lang="sass" module>
@import './index'
</style>

<script>
import ImageBig from '../../../../../assets/images/Hero-Image@2x.png'
import ImageSmall from '../../../../../assets/images/Hero-Image.png'

export default {
  data() {
    return {
      imageBig: ImageBig,
      imageSmall: ImageSmall
    }
  }
}
</script>