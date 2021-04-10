<template>
  <div>
    <section :class="$style.fixed">
      &nbsp;
    </section>
    <section :class="$style.header">
      <SecondHeader/>
    </section>
    <section>
      <HeroComponent/>
    </section>
    <div :class="$style.content">
      <section>
        <ScrollDownComponent/>
      </section>
      <section>
        <AboutComponent/>
      </section>
      <section id="layout">
        <CarouselComponent/>
      </section>
    </div>
  </div>
</template>

<style lang="sass" module>
@import './layout'
</style>

<script>
import HeroComponent from './components/hero'
import ScrollDownComponent from './components/scroll_down'
import AboutComponent from './components/about'
import CarouselComponent from './components/carousel'
import SecondHeader from '../../components/second_header'

export default {
  components: {
    SecondHeader,
    HeroComponent,
    ScrollDownComponent,
    AboutComponent,
    CarouselComponent
  }
}
</script>