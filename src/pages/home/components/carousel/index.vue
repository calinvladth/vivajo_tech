<template>
  <div :class="$style.box">
    <div :class="$style.bigDevices" v-if="loaded">
      <div v-for="item in data" :key="item.name" @mouseenter="setActive(item)">
        <CardComponent :item="item" :activeItem="activeItem.name === item.name"/>
      </div>
    </div>

    <div :class="$style.phone">
      <Carousel :perPage="4" :navigationEnabled="true">
        <Slide v-for="item in data" :key="item.name">
          <CardComponent :item="item"/>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style lang="sass" module>
@import "./index"
</style>

<script>
import CardComponent from './card'
import {Carousel, Slide} from 'vue-carousel'
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      activeItem: {},
      loaded: false
    }
  },
  methods: {
    setActive(item) {
      this.activeItem = item
    }
  },
  mounted() {
    axios({
      method: 'GET',
      url: 'http://dev.dg-ag.com/get_layouts.php'
    })
        .then(response => {
          this.data = response.data
          this.loaded = true
          if (response.data[0]) this.activeItem = response.data[0]
        })
        .catch(error => console.log('ERROR: ', error))
  },
  components: {
    CardComponent,
    Carousel,
    Slide
  },
}
</script>