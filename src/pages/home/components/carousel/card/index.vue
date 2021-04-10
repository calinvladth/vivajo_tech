<template>
  <div :class="[$style.box, activeItem && $style.activeItem]">
    <div :class="$style.boxImages">
      <div>
        <img :src="active_color.preview_image" alt="">
        <img :src="active_wall_color.preview_image" alt="">
      </div>
    </div>
    <div :class="$style.boxContent">
      <div :class="$style.boxInfo">
        <div>
          <p>{{ item.name }}</p>
        </div>
        <div>
          <p>
            {{ pre_price[lang] }} {{ item.price }} €
          </p>
        </div>
      </div>
      <div :class="$style.boxActive" v-if="activeItem">
        <div :class="$style.boxOptions">
          <div>
            <p>{{ color_title[lang] }}</p>
          </div>
          <div>
            <div v-for="color in item.color_styles" :key="color.color_code"
                 :class="active_color.color_code === color.color_code && $style.optionActive"
                 :style="{backgroundColor: color.color_code}"
                 @click="changeColor(color)"
            >&nbsp;
            </div>
          </div>
        </div>
        <div :class="$style.boxOptions">
          <div>
            <p>{{ wall_title[lang] }}</p>
          </div>
          <div>
            <div v-for="color in item.wall_colors" :key="color.color_code"
                 :class="active_wall_color.color_code === color.color_code && $style.optionActive"
                 :style="{backgroundColor: color.color_code}"
                 @click="changeWallColor(color)"
            >&nbsp;
            </div>
          </div>
        </div>
        <div :class="$style.boxAction">
          <button @click="$modal.show('card')">{{ button[lang] }}
          </button>
        </div>
        <modal name="card">
          <div style="padding: 3rem">
            <h1>Name: {{ item.name }}</h1>
            <br>
            <p>Color Style Name: <strong>{{ active_color.name }}</strong></p>
            <p>Color Style Code: <strong>{{ active_color.color_code }}</strong>></p>
            <br>
            <p>Wall Color Name: <strong>{{ active_wall_color.name }}</strong></p>
            <p>Wall Color Code: <strong>{{ active_wall_color.color_code }}</strong>></p>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<style lang="sass" module>
@import "./index"
</style>

<script>
export default {
  props: ['item', 'activeItem'],
  data() {
    return {
      color_title: {
        en: 'Color Style',
        de: 'Farbstil'
      },
      wall_title: {
        en: 'Wall Color',
        de: 'Wandfarbe'
      },
      button: {
        en: 'Continue',
        de: 'Fortfahren'
      },
      pre_price: {
        en: 'From',
        de: 'Von'
      },
      active_color: {},
      active_wall_color: {}
    }
  },
  computed: {
    lang() {
      return this.$store.state.config.lang
    }
  },
  methods: {
    changeColor(color) {
      this.active_color = color
    },
    changeWallColor(color) {
      this.active_wall_color = color
    },
  },
  mounted() {
    if (this.item.color_styles[0]) this.active_color = this.item.color_styles[0]
    if (this.item.wall_colors[0]) this.active_wall_color = this.item.wall_colors[0]
  },
}
</script>