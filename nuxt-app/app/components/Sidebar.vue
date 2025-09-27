<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <SplitText 
        text="Projects" 
        :delay="80"
        :duration="0.8"
        className="sidebar-title"
        splitType="chars"
        textAlign="center"
      />
    </div>
    <div class="sidebar-content">
      <div class="projects-grid">
        <Card
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :link="`/posts/${post.id}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.sidebar {
  height: 100vh;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
}

.sidebar-header {
  padding: 2rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);
  position: sticky;
  top: 0;
  z-index: 20;
}

.sidebar-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.sidebar-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  max-width: 100%;
}

/* Dark mode */
.dark .sidebar {
  background: rgba(42, 42, 42, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .sidebar-header {
  background: rgba(42, 42, 42, 0.35);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .sidebar-title {
  color: #e2e8f0;
}

.dark .sidebar-content {
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.dark .sidebar-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
}

.dark .sidebar-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Responsive design */
@media (max-width: 1024px) {
  .sidebar {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }

  .sidebar-content {
    padding: 1rem;
  }

  .projects-grid {
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .sidebar-content {
    padding: 0.75rem;
  }

  .projects-grid {
    gap: 0.75rem;
  }
}
</style>
