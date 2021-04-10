<template>
  <div :class="$style.box" :style="image">
    <div :class="$style.boxContent">
      <div>
        <TitleComponent/>
      </div>
      <div>
        <ImageComponent/>
      </div>
    </div>
  </div>
</template>

<style lang="sass" module>
@import './index'
</style>

<script>
import TitleComponent from './title'
import ImageComponent from './image'
import Image from '../../../../assets/images/Hero-Background@2x.png'
import {setBackgroundImage} from "@/services/image";

export default {
  data() {
    return {
      image: setBackgroundImage(Image),
    }
  },
  components: {
    TitleComponent,
    ImageComponent
  }
}
</script>
