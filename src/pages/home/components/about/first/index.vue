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
        <div>
          <div>
            <span>
              <IconDepth/>
            </span>
            <p>{{ data.icon_1.text[lang] }}</p>
          </div>
          <div>
            <span>
              <IconOverview/>
            </span>
            <p>{{ data.icon_2.text[lang] }}</p>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:visual>
      <div :class="$style.visual">
        <img
            srcset="@/assets/images/Image-Section_1.png 1x, @/assets/images/Image-Section_1@2x.png 2x"
            src="@/assets/images/Image-Section_1@2x.png" alt="">
      </div>
    </template>
  </GridSlot>
</template>

<style lang="sass" module>
@import '../index'
</style>

<script>
import GridSlot from '../grid'
import IconDepth from '../../../../../assets/icons/icon_depth'
import IconOverview from '../../../../../assets/icons/icon_overview'

export default {
  data() {
    return {
      data: {
        title: {
          en: '3D Realistic Representation',
          de: 'Realistische 3D-Darstellung'
        },
        subtitle: {
          en: 'Realitic representation of the floor plan for a better overview of the entire room layout and the spatial proportions.',
          de: 'Realistische Darstellung des Grundrisses für einen besseren Überblick über die gesamte Raumaufteilung und die räumlichen Proportionen.'
        },
        icon_1: {
          text: {
            en: 'Impression of the depth',
            de: 'Eindruck der Tiefe'
          }
        },
        icon_2: {
          text: {
            en: 'Strong overview of the room layout',
            de: 'Starker Überblick über die Raumaufteilung'
          }
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
    GridSlot,
    IconOverview,
    IconDepth,
  }
}
</script>
