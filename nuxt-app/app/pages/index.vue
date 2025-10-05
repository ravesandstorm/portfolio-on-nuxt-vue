<script setup>
import { ref, onMounted } from 'vue'

// Load projects from API, then default
const { data: projectData, pending: projectsLoading, error: projectsError } = await useAsyncData('data', () => 
  $fetch('/api/data')
)

const { data: defaultData, pending: defaultLoading } = await useAsyncData('projects', () => 
  $fetch('/api/projects')
)

const projects = computed(() => {
  if (projectsError.value || !projectData.value) {
    console.log('Mongo fetch failed.. switching to default')
    return defaultData.value
  }
  console.log('Fetching from MongoDB')
  return projectData.value
})

const config = useRuntimeConfig()
console.log(config.public.customVar)

const sidebarOpen = ref(false)
const mainContentLoading = ref(true)

onMounted(() => {
  mainContentLoading.value = false
})

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
      const mobileOverlay = document.querySelector('.mobile-sidebar-overlay')
      const mobileSidebar = document.querySelector('.mobile-sidebar')
      const toggleButton = document.querySelector('.sidebar-toggle')

      // Close if clicking on overlay but not on sidebar or toggle button
      if (mobileOverlay && mobileOverlay.contains(event.target) &&
          !mobileSidebar?.contains(event.target) &&
          !toggleButton?.contains(event.target)) {
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
      <div v-if="mainContentLoading" class="skeleton-container">
        <!-- Hero section skeleton -->
        <section class="hero">
          <div class="hero-content">
            <div class="skeleton-line skeleton-title"></div>
            <div class="skeleton-line skeleton-subtitle"></div>
            <div class="skeleton-line skeleton-text"></div>
          </div>
        </section>

        <!-- About section skeleton -->
        <div class="skeleton-section">
          <div class="skeleton-line skeleton-heading"></div>
          <div class="skeleton-line skeleton-paragraph"></div>
          <div class="skeleton-line skeleton-paragraph-short"></div>
          <div class="skeleton-line skeleton-paragraph"></div>
        </div>

        <!-- Tech stack skeleton -->
        <div class="skeleton-section">
          <div class="skeleton-line skeleton-heading"></div>
          <div class="skeleton-chips">
            <div class="skeleton-chip" v-for="n in 4" :key="n"></div>
          </div>
        </div>

        <!-- Social links skeleton -->
        <div class="skeleton-section">
          <div class="skeleton-buttons">
            <div class="skeleton-button" v-for="n in 4" :key="n"></div>
          </div>
        </div>
      </div>

      <template v-else>
        <!-- Hero section with name -->
        <section class="hero">
          <div class="hero-content">
            <SplitText
              text="Hi, I'm Satvik!"
              :delay="75"
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
      </template>
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
      :title="sidebarOpen ? 'Close Projects' : 'Open Projects'"
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
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(8px);
}

.mobile-sidebar-overlay.active {
  transform: translateX(0);
}

.mobile-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.dark .mobile-sidebar {
  background: rgba(42, 42, 42, 0.98);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Hero section */
.hero {
  margin-top: 4rem;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  top: 30%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 1001;
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-toggle.move-left {
  right: 5%;
  background: rgba(220, 38, 127, 0.9);
  box-shadow: 0 4px 20px rgba(220, 38, 127, 0.3);
}

.sidebar-toggle span {
  width: 30px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.sidebar-toggle.active span:nth-child(1) {
  transform: translate(0px, 6px) rotate(45deg) ;
}

.sidebar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.sidebar-toggle.active span:nth-child(3) {
  transform: translate(0px, -6px) rotate(-45deg);
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

@media (max-width: 820px) {
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
    z-index: 1001;
  }

  .hero {
    min-height: 50vh;
    padding: 1rem;
  }
}

@media (max-width: 720px) {
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
    right: 3%;
  }
}

@media (max-width: 480px) {
  .main-section {
    padding: 0.25rem;
  }

  .hero {
    min-height: 20vh;
    padding: 0.25rem;
  }

  .mobile-sidebar {
    width: 90%;
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

/* Skeleton Loader Styles */
@keyframes skeleton-loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton-container {
  height: 100%;
  overflow-y: auto;
}

.skeleton-container .hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
}

.skeleton-section {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.dark .skeleton-section {
  background: rgba(42, 42, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.skeleton-line {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

.dark .skeleton-line {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200px 100%;
}

/* Hero skeleton styles - match original hero layout */
.skeleton-container .hero-content {
  max-width: 800px;
  width: 100%;
}

.skeleton-title {
  height: 75px;
  width: 80%;
  max-width: 450px;
  margin: 0 auto 20px auto;
}

.skeleton-subtitle {
  height: 32px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto 16px auto;
}

.skeleton-text {
  height: 24px;
  width: 40%;
  max-width: 300px;
  margin: 0 auto;
}

/* About skeleton styles */
.skeleton-heading {
  height: 36px;
  width: 200px;
  margin-bottom: 16px;
  justify-self: center;
}

.skeleton-paragraph {
  height: 20px;
  width: 100%;
  margin-bottom: 12px;
}

.skeleton-paragraph-short {
  height: 20px;
  width: 75%;
}

/* Tech stack skeleton styles */
.skeleton-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  justify-self: center;
}

.skeleton-chip {
  height: 32px;
  width: 80px;
  border-radius: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: skeleton-loading 1.5s infinite;
}

.dark .skeleton-chip {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200px 100%;
}

/* Social skeleton styles */
.skeleton-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  flex-wrap: wrap;
  justify-items: center;
}

.skeleton-button {
  height: 60px;
  width: 120px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: skeleton-loading 1.5s infinite;
}

.dark .skeleton-button {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200px 100%;
}

/* Sidebar skeleton styles */
.skeleton-sidebar {
  padding: 1rem;
}

.skeleton-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .skeleton-card {
  background: rgba(42, 42, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skeleton-card-title {
  height: 24px;
  width: 70%;
  margin-bottom: 12px;
}

.skeleton-card-text {
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
}

.skeleton-card-text-short {
  height: 16px;
  width: 60%;
  margin-bottom: 0;
}

/* Responsive adjustments for skeleton */
@media (max-width: 820px) {
  .skeleton-container .hero {
    min-height: 50vh;
    padding: 1rem;
  }
}

@media (max-width: 720px) {
  .skeleton-container .hero {
    min-height: 40vh;
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .skeleton-container .hero {
    min-height: 35vh;
    padding: 0.25rem;
  }
}
</style>