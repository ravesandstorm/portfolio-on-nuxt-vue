<template>
  <div style="width: 100vw; height: 100vh; position: relative; background: #000; margin: 0; padding: 0;">
    <!-- Prism background component -->
    <div style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 1;">
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

    <!-- Router content overlay -->
    <div style="position: relative; z-index: 10; width: 100%; height: 100%; overflow-y: auto;">
      <router-view />
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