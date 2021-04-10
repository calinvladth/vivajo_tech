<template>
  <div :class="$style.box" id="about">
    <a href="#about">
      <Arrow/>
    </a>
  </div>
</template>

<style lang="sass" module>
  @import './index'
</style>

<script>
import Arrow from '../../../../assets/icons/arrow'
export default {
  components: {
    Arrow
  }

}
</script>