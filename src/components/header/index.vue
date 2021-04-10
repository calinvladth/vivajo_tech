<template>
  <div :class="$style.box" id="overview">
    <div :class="$style.logo">
      <div>
        <Logo/>
      </div>
    </div>
    <div :class="$style.links">
      <div>
        <span>{{ link_1[config.lang] }} <span><Arrow/></span></span>
      </div>
      <div>
        <span>{{ link_2[config.lang] }} <span><Arrow/></span></span>
      </div>
      <div>
        <span>{{ link_3[config.lang] }} <span><Arrow/></span></span>
      </div>
    </div>
    <div :class="$style.lang">
      <div>
        <span
            v-for="item in config.lang_options"
            :key="item"
            :class="item === config.lang && $style.langActive"
            @click="changeLang(item)"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../../assets/icons/logo'
import Arrow from '../../assets/icons/arrow'

export default {
  data() {
    return {
      link_1: {
        en: 'FloorPlans',
        de: 'Grundrisse'
      },
      link_2: {
        en: 'Visualisation',
        de: 'Visualisierung'
      },
      link_3: {
        en: 'Virtual tours',
        de: 'Virtuelle Touren'
      }
    }
  },
  methods: {
    changeLang(item) {
      this.$store.dispatch('config/changeLang', item)
    }
  },
  computed: {
    config() {
      return this.$store.state.config
    }
  },
  components: {
    Logo,
    Arrow
  }
}
</script>

<style lang="sass" module>
@import './index.sass'
</style>