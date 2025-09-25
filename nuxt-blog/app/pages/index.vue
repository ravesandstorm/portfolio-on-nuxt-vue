<script setup>
import { ref, onMounted } from 'vue'

// Load projects from API
const { data: projects } = await useAsyncData('projects', () =>
  $fetch('/api/projects')
)

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

// Close sidebar when clicking outside on mobile
onMounted(() => {
  const handleClickOutside = (event) => {
    if (window.innerWidth <= 1024 && sidebarOpen.value) {
      const sidebar = document.querySelector('.sidebar')
      if (sidebar && !sidebar.contains(event.target)) {
        sidebarOpen.value = false
      }
    }
  }

  document.addEventListener('click', handleClickOutside)

  return () => {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

<template>
  <div class="portfolio">
    <!-- Main content area -->
    <div class="main-section" :class="{ 'sidebar-open': sidebarOpen }">
      <!-- Hero section with name -->
      <section class="hero">
        <div class="hero-content">
          <SplitText
            text="Hi, I'm Satvik!"
            :delay="100"
            :duration="1"
            className="hero-title"
            splitType="chars"
            textAlign="center"
          />
          <SplitText
            text="AI/ML and Full Stack Developer"
            :delay="80"
            :duration="0.8"
            className="hero-subtitle"
            splitType="words"
            textAlign="center"
          />
          <SplitText
            text="Check out my projects! --->"
            :delay="200"
            :duration="2"
            className="hero-checkprojects"
            splitType="words"
            textAlign="center"
          />
        </div>
      </section>

      <!-- About section -->
      <About />

      <!-- Tech stack -->
      <TechStack />

      <!-- Social links -->
      <SocialLinks />
    </div>

    <!-- Desktop Sidebar -->
    <div class="sidebar-section desktop-sidebar">
      <Sidebar :posts="projects" />
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div class="mobile-sidebar-overlay" :class="{ active: sidebarOpen }" @click="closeSidebar">
      <div class="mobile-sidebar" :class="{ open: sidebarOpen }" @click.stop>
        <Sidebar :posts="projects" />
      </div>
    </div>

    <!-- Mobile sidebar toggle -->
    <button
      class="sidebar-toggle"
      @click="toggleSidebar"
      :class="{ active: sidebarOpen, 'move-left': sidebarOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<style scoped>
.portfolio {
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
}

.main-section {
  flex: 1;
  overflow-y: auto;
  z-index: 10;
  height: 100%;
  position: relative;
  padding: 0 2rem;
  transition: all 0.3s ease;
}

.main-section.sidebar-open {
  filter: blur(2px);
  pointer-events: none;
}

.desktop-sidebar {
  width: 400px;
  height: 100%;
  overflow-y: auto;
  flex-shrink: 0;
}

.mobile-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.mobile-sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-sidebar {
  position: absolute;
  top: 0;
  right: -100%;
  width: 90%;
  max-width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
}

.mobile-sidebar.open {
  right: 0;
}

.dark .mobile-sidebar {
  background: rgba(42, 42, 42, 0.95);
}

/* Hero section */
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
}

.hero-content {
  max-width: 800px;
  width: 100%;
}

.hero-title * {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 4vw, 2.5rem);
  color: #576579;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.hero-checkprojects {
  font-size: clamp(1rem, 3vw, 2rem);
  color: #3e4856;
  font-weight: 500;
  margin: 10px;
}

/* Mobile sidebar toggle */
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 200;
  background: rgba(0, 112, 243, 0.9);
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 4px 20px rgba(0, 112, 243, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-toggle.move-left {
  right: calc(90% - 4rem);
  background: rgba(220, 38, 127, 0.9);
  box-shadow: 0 4px 20px rgba(220, 38, 127, 0.3);
}

.sidebar-toggle span {
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.sidebar-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.sidebar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.sidebar-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Dark mode */
.dark .hero-title * {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .hero-subtitle {
  color: #c8c8c8;
}

.dark .hero-checkprojects {
  color: #c9c9c9;
}

.dark .sidebar-toggle {
  background: rgba(159, 122, 234, 0.9);
  box-shadow: 0 4px 20px rgba(159, 122, 234, 0.3);
}

/* Responsive design */
@media (max-width: 1200px) {
  .desktop-sidebar {
    width: 350px;
  }

  .main-section {
    padding: 0 1.5rem;
  }
}

@media (max-width: 1024px) {
  .portfolio {
    flex-direction: column;
  }

  .main-section {
    padding: 1rem;
    width: 100%;
  }

  .desktop-sidebar {
    display: none;
  }

  .sidebar-toggle {
    display: flex;
  }

  .hero {
    min-height: 50vh;
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .main-section {
    padding: 0.5rem;
  }

  .hero {
    min-height: 40vh;
    padding: 0.5rem;
  }

  .mobile-sidebar {
    width: 95%;
  }

  .sidebar-toggle.move-left {
    right: calc(95% - 4rem);
  }
}

@media (max-width: 480px) {
  .main-section {
    padding: 0.25rem;
  }

  .hero {
    min-height: 35vh;
    padding: 0.25rem;
  }

  .mobile-sidebar {
    width: 100%;
  }

  .sidebar-toggle.move-left {
    right: 1rem;
  }

  .sidebar-toggle {
    width: 48px;
    height: 48px;
    right: 1rem;
  }

  .sidebar-toggle span {
    width: 16px;
  }
}
</style>
