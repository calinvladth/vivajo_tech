<template>
  <GridSlot>
    <template v-slot:content>
      <div :class="$style.content">
        <div>
          <h1>{{ data.title[lang] }}</h1>
        </div>
        <div>
          <p>{{ data.subtitle[lang] }}</p>
        </div>
      </div>
    </template>
    <template v-slot:visual>
      <div :class="$style.visual">
        <div>
          <Carousel :perPage="1">
            <Slide>
              <img
                  srcset="@/assets/images/2.wohnenessen.png 1x, @/assets/images/2.wohnenessen@2x.png 2x"
                  src="@/assets/images/2.wohnenessen@2x.png" alt="">
            </Slide>
            <Slide>
              <img
                  srcset="@/assets/images/3.kuche.png 1x, @/assets/images/3.kuche@2x.png 2x"
                  src="@/assets/images/3.kuche@2x.png" alt="">
            </Slide>
            <Slide>
              <img
                  srcset="@/assets/images/5.schlafen.png 1x, @/assets/images/5.schlafen@2x.png 2x"
                  src="@/assets/images/5.schlafen@2x.png" alt="">
            </Slide>
            <Slide>
              <img
                  srcset="@/assets/images/6.bad@2x.png 1x, @/assets/images/6.bad@2x.png 2x"
                  src="@/assets/images/6.bad@2x.png" alt="">
            </Slide>
          </Carousel>
        </div>

      </div>
    </template>
  </GridSlot>
</template>

<style lang="sass" module>
@import '../index'
</style>

<script>
import GridSlot from '../grid'
import {Carousel, Slide} from 'vue-carousel'

export default {
  data() {
    return {
      data: {
        title: {
          en: 'Combine it with interior renderings',
          de: 'Kombinieren Sie es mit Innenrenderings'
        },
        subtitle: {
          en: 'This perspective view is a good addition to the 2D top view and can be very advantageosly combined with interior renderings.',
          de: 'Diese perspektivische Ansicht ist eine gute Ergänzung zur 2D-Draufsicht und kann sehr vorteilhaft mit Innenrenderings kombiniert werden.'
        },
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.config.lang
    }
  },
  components: {
    GridSlot,
    Carousel,
    Slide
  }
}
</script>