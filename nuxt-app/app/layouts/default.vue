<template>
  <div class="app-layout">
    <!-- Prism background -->
    <div class="prism-background">
      <Prism
        :height="4.5"
        :baseWidth="7.5"
        animationType="rotate"
        :glow="0.75"
        :noise="0"
        :transparent="true"
        :scale="2.5"
        :hueShift="0"
        :colorFrequency="1.2"
        :bloom="1.5"
        :timeScale="0.25"
        :resolution="0.01"
      />
    </div>

    <!-- Header -->
    <header class="app-header">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <span class="logo-text">
            Satvik's Portfolio
          </span>
        </NuxtLink>
        <div class="header-actions">
          <button @click="toggleDarkMode" class="theme-toggle">
            <ThemeSwitch
              :isDark="isDark"
              width="100%"
              height="100%"
              :speed="6"
            />
          </button>
        </div>
      </div>
    </header>

    <!-- Main content area -->
    <div class="main-layout">
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

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
.app-layout {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.prism-background {
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  text-decoration: none;
  color: inherit;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  border: none;
  background: rgba(0, 112, 243, 0.1);
  color: #0070f3;
  padding: 0;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 112, 243, 0.2);
  width: 12vh;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.theme-toggle:hover {
  background: rgba(0, 112, 243, 0.2);
  transform: scale(1.05);
}

.main-layout {
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  z-index: 10;
}

.main-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}

/* Dark mode */
.dark .app-header {
  background: rgba(42, 42, 42, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .logo-text {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .theme-toggle {
  background: rgba(159, 122, 234, 0.15);
  color: #9f7aea;
  border: 1px solid rgba(159, 122, 234, 0.3);
}

.dark .theme-toggle:hover {
  background: rgba(159, 122, 234, 0.25);
}

/* Responsive design */
@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
  }

  .logo-text {
    font-size: 1.3rem;
  }

  .main-layout {
    padding-top: 70px;
  }
}

</style>
