<template>
  <div class="theme-switch-container">
    <Lottie
      v-if="!isDark"
      name="darktolight"
      :autoplay="true"
      :loop="false"
      :width="props.width"
      :height="props.height"
      :speed="props.speed"
      :key="'light'"
    />
    <Lottie
      v-else
      name="lighttodark"
      :autoplay="true"
      :loop="false"
      :width="props.width"
      :height="props.height"
      :speed="props.speed"
      :key="'dark'"
    />
  </div>
</template>

<script setup lang="ts">

type ThemeProps = {
  width?: string,
  height?: string,
  isDark?: boolean,
  speed?: number
};

const props = withDefaults(defineProps<ThemeProps>(), {
  width: "100px",
  height: "100px",
  isDark: false,
  speed: 5
});

</script>

<style scoped>
.theme-switch-container {
  width: 100%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
}

</style>
