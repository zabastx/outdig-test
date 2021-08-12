<template>
  <main>
    <my-button btn-type="white" @click="showPopup = true">Налоговый вычет</my-button>
    <my-popup v-if="showPopup" @close="showPopup = false" />
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPopup: false
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/fonts/stylesheet.css');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Lab Grotesque';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
}

main {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  display: flex;
  place-items: center;
  height: 100%;
}

button {
  cursor: url('./assets/pointer.svg') 6 0, pointer;
}
</style>
