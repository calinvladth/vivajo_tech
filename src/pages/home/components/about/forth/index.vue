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
        <img
            srcset="@/assets/images/Image-Section_4@2x.png 1x, @/assets/images/Image-Section_4@2x.png 2x"
            src="@/assets/images/Image-Section_4@2x.png" alt="">
      </div>
    </template>
  </GridSlot>
</template>

<style lang="sass" module>
@import '../index'
</style>

<script>
import GridSlot from '../grid'

export default {
  data() {
    return {
      data: {
        title: {
          en: 'Image files in web quality',
          de: 'Bilddateien in Webqualität'
        },
        subtitle: {
          en: 'You will receive image files in Full HD resolution (1920x1080 pixels) in the JPG format, which are ideal for internet use. Theese can be easily integrated into all internet portals.',
          de: 'Sie erhalten Bilddateien in Full HD-Auflösung (1920 x 1080 Pixel) im JPG-Format, die sich ideal für die Internetnutzung eignen. Diese können problemlos in alle Internetportale integriert werden.'
        }
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.config.lang
    }
  },
  components: {
    GridSlot
  }
}
</script>
