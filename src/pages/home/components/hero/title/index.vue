<template>
  <div :class="$style.box">
    <div>
      <span>
        <Icon3D/>
      </span>
      <h1>{{ title[lang] }}</h1>
    </div>
    <div>
      <h2>{{subtitle[lang]}}</h2>
    </div>
  </div>
</template>

<style lang="sass" module>
@import './index'
</style>

<script>
import Icon3D from '../../../../../assets/icons/icon_3d'

export default {
  data() {
    return {
      title: {
        en: '3D Flor Plan',
        de: '3D Grundriss'
      },
      subtitle: {
        en: 'Bird\'s eye in 3d with many option customisation. Ideal for the emotional decision maker.',
        de: 'Vogelperspektive in 3D mit vielen Optionsanpassungen. Ideal für den emotionalen Entscheider.'
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.config.lang
    }
  },
  components: {
    Icon3D
  }
}
</script>