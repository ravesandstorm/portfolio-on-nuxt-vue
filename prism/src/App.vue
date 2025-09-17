<template>
  <div style="width: 100vw; height: 100vh; position: relative; background: #000; margin: 0; padding: 0;">

    <h1 style="color: whitesmoke; text-align: center; padding: 40px; margin: 10;">Hello!</h1>

    <div style="width: 100%; height: 100%; position: relative; background: rgba(0,0,255,0.1);">
      <Prism
        animation-type="rotate"
        :time-scale=".75"
        :height="3.6"
        :base-width="6.5"
        :scale="2.6"
        :hue-shift="0"
        :color-frequency="1"
        :noise="0"
        :glow="1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from "./components/Prism.vue";

console.log("App.vue loaded");
console.log("Prism component:", Prism);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  margin: 0;
  padding: 0;
}
</style>