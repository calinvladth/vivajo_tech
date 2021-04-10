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
            srcset="@/assets/images/Image-Section_2.png 1x, @/assets/images/Image-Section_2@2x.png 2x"
            src="@/assets/images/Image-Section_2@2x.png" alt="">
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
          en: 'Imagine the living space',
          de: 'Stellen Sie sich den Wohnraum vor'
        },
        subtitle: {
          en: '3D graphics make it easy for customers to actually imagine the living space of their house and the furniture.',
          de: 'Mithilfe von 3D-Grafiken können sich Kunden den Wohnraum ihres Hauses und die Möbel leicht vorstellen.'
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
    GridSlot
  }
}
</script>