<script setup>
import { ref, onMounted } from 'vue'

const { data: posts } = await useAsyncData('posts', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts')
)

posts.value = posts.value.slice(0, 10)

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
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
    <!-- Main content area (70%) -->
    <div class="main-section">
      <!-- Hero section with name -->
      <section class="hero">
        <div class="hero-content">
          <SplitText
            text="Hi, I'm Satvik!"
            :delay="150"
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

    <!-- Sidebar (30%) -->
    <div class="sidebar-section">
      <Sidebar :posts="posts" :class="{ open: sidebarOpen }" />
    </div>

    <!-- Mobile sidebar toggle -->
    <button
      class="sidebar-toggle"
      @click="toggleSidebar"
      :class="{ active: sidebarOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 0;
  /* makes children able to be 100% tall and scroll independently */
  height: 100vh;
  width: 100%;
}

.main-section {
  overflow-y: auto;
  z-index: 10;
  height: 100%;
  position: relative;
}

.sidebar-section {
  top: 80px;
  height: 100%;
  overflow-y: auto;
}

/* Hero section */
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
}

.hero-content {
  max-width: 600px;
}

.hero-title *{
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 2.5rem;
  color: #576579;
  font-weight: 600;
  margin: 0;
}

.hero-checkprojects {
  font-size: 2rem;
  color: #3e4856;
  font-weight: 500;
  margin: 10px;
}

/* Mobile sidebar toggle */
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 50%;
  right: 1rem;
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
  transition: all 0.3s ease;
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
  color: #3d4247;
  -webkit-text-stroke: 0.35px white;
}

.dark .hero-checkprojects {
  color: #3f454d;
  -webkit-text-stroke: 0.25px white;
}

.dark .sidebar-toggle {
  background: rgba(159, 122, 234, 0.9);
  box-shadow: 0 4px 20px rgba(159, 122, 234, 0.3);
}

/* Responsive design */
@media (max-width: 1024px) {
  .portfolio {
    flex-direction: column;
  }

  .main-section {
    flex: 1;
    padding: 1.5rem;
  }

  .sidebar-section {
    display: none;
  }

  .sidebar-toggle {
    display: flex;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .main-section {
    padding: 1rem;
  }

  .hero {
    min-height: 50vh;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
