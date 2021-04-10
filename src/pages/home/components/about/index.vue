<template>
  <div :class="$style.box">
    <div :class="$style.boxContent">
      <section>
        <FirstComponent/>
      </section>
      <section>
        <SecondComponent/>
      </section>
      <section>
        <ThirdComponent/>
      </section>
      <section>
        <ForthComponent/>
      </section>
    </div>
  </div>
</template>

<style lang="sass" module>
@import './index'
</style>

<script>
import FirstComponent from './first'
import SecondComponent from './second'
import ThirdComponent from './third'
import ForthComponent from './forth'

export default {
  components: {
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent
  },
  data() {
    return {
      content_1:
          {
            title: '3D Realistic Representation',
            subtitle: 'Realitic representation of the floor plan for a better overview of the entire room layout and the spatial proportions.',
            icon_1: {
              text: 'Impression of the depth'
            },
            icon_2: {
              text: 'Strong overview of the layout'
            }
          }
    }
  }
}

</script>