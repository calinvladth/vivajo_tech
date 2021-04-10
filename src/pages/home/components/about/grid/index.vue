<template>
  <div :class="$style.grid">
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="visual"></slot>
    </div>
  </div>
</template>

<style lang="sass" module>
@import '../index'
</style>