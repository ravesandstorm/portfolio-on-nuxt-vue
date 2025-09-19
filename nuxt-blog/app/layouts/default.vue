<template>
  <div>
    <header>
      <NuxtLink to="/">🏠 Home</NuxtLink>
      <button @click="toggleDarkMode">
        {{ isDark ? '🌞 Light Mode' : '🌙 Dark Mode' }}
      </button>
    </header>
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check if user has a saved preference
  isDark.value = localStorage.getItem('theme') === 'dark'
  updateHtmlClass()
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  updateHtmlClass()
}

function updateHtmlClass() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style scoped>
button {
  border: none;
  background: #0070f3;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}
button:hover {
  background: #0059c9;
}
</style>
