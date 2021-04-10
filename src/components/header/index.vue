<template>
  <div :class="$style.box" id="overview">
    <div :class="$style.logo">
      <div>
        <div :class="$style.iconPhone" @click="changeNav()">
          <IconHamburger/>
        </div>
        <Logo/>
      </div>
    </div>
    <div :class="$style.links" v-if="!nav_active">
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
    <div :class="$style.lang" v-if="!nav_active">
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
import IconHamburger from '../../assets/icons/icon_hamburger'

export default {
  data() {
    return {
      nav_active: false,
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
    },
    changeNav() {
      this.nav_active = !this.nav_active
    }
  },
  computed: {
    config() {
      return this.$store.state.config
    }
  },
  components: {
    Logo,
    Arrow,
    IconHamburger
  }
}
</script>

<style lang="sass" module>
@import './index.sass'
</style>