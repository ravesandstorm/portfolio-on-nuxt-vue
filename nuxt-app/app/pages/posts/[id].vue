<script setup>
const route = useRoute()

// Load project data from API, default to placeholder
const { data: projectData, error: projectError } = await useAsyncData(`data-${route.params.id}`, () => 
  $fetch(`/api/data/${route.params.id}`)
)

const { data: defaultData } = await useAsyncData(`project-${route.params.id}`, () =>
  $fetch(`/api/projects/${route.params.id}`)
)

const project = computed(() => {
  if (projectError.value || !projectData.value) {
    console.log('Mongo fetch failed.. switching to default')
    return defaultData.value
  }
  console.log('Fetching from MongoDB')
  return projectData.value
})

// Set page meta
useHead({
  title: project.value?.title || 'Project',
  meta: [
    { name: 'description', content: project.value?.description || 'Project details' }
  ]
})
</script>

<template>
  <div class="post-page">
    <!-- Background image with subtle alpha -->
    <div class="background-image" :style="{ backgroundImage: `url(${project?.image})` }"></div>

    <article class="post">
      <div class="post-header">
        <SplitText
          :text="project?.title || 'Loading...'"
          :delay="120"
          :duration="0.8"
          className="post-title"
          splitType="words"
          textAlign="center"
        />
      </div>

      <div class="post-content">
        <SplitText
          :text="project?.description || 'Loading project description...'"
          :delay="50"
          :duration="0.6"
          className="post-body"
          splitType="words"
          textAlign="left"
          :threshold="0.2"
        />

        <!-- Technologies used -->
        <div v-if="project?.technologies" class="tech-stack">
          <h3 class="tech-title">Technologies Used</h3>
          <div class="tech-tags">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Features -->
        <div v-if="project?.features" class="features-section">
          <h3 class="features-title">Key Features</h3>
          <ul class="features-list">
            <li v-for="feature in project.features" :key="feature" class="feature-item">
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Project Links -->
        <div class="project-links">
          <a v-if="project?.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </a>
          <a v-if="project?.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="project-link demo-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>

      <div class="post-navigation">
        <NuxtLink to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Portfolio
        </NuxtLink>
      </div>
    </article>
  </div>
</template>

<style scoped>
.post-page {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 10;
}

/* Background image with subtle alpha */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.15;
  z-index: -1;
  filter: blur(2px);
}

.post {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 2rem;
  position: relative;
  z-index: 2;
}

.post-header {
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
  z-index: 3;
}

.post-title * {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 4;
}

.post-content {
  margin-bottom: 3rem;
}

.post-body {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0 0 2rem 0;
  text-align: justify;
}

/* Tech Stack Styles */
.tech-stack {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.tech-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

/* Features Styles */
.features-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.features-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  padding: 0.5rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* Project Links */
.project-links {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid;
}

.github-link {
  background: rgba(36, 41, 46, 0.1);
  color: #24292e;
  border-color: rgba(36, 41, 46, 0.2);
}

.github-link:hover {
  background: rgba(36, 41, 46, 0.2);
  transform: translateY(-2px);
}

.demo-link {
  background: rgba(0, 112, 243, 0.1);
  color: #0070f3;
  border-color: rgba(0, 112, 243, 0.2);
}

.demo-link:hover {
  background: rgba(0, 112, 243, 0.2);
  transform: translateY(-2px);
}

.post-navigation {
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 112, 243, 0.1);
  color: #0070f3;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 112, 243, 0.2);
}

.back-link:hover {
  background: rgba(0, 112, 243, 0.2);
  transform: translateX(-4px);
}

/* Dark mode */
.dark .background-image {
  opacity: 0.1;
}

.dark .post {
  background: rgba(42, 42, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.dark .post-title {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .post-body {
  color: #cbd5e0;
}

.dark .tech-stack,
.dark .features-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .tech-title,
.dark .features-title {
  color: #e2e8f0;
}

.dark .feature-item {
  color: #cbd5e0;
}

.dark .feature-item::before {
  color: #9f7aea;
}

.dark .github-link {
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  border-color: rgba(255, 255, 255, 0.2);
}

.dark .github-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.dark .demo-link {
  background: rgba(159, 122, 234, 0.15);
  color: #9f7aea;
  border-color: rgba(159, 122, 234, 0.3);
}

.dark .demo-link:hover {
  background: rgba(159, 122, 234, 0.25);
}

.dark .post-navigation {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .back-link {
  background: rgba(159, 122, 234, 0.15);
  color: #9f7aea;
  border: 1px solid rgba(159, 122, 234, 0.3);
}

.dark .back-link:hover {
  background: rgba(159, 122, 234, 0.25);
}

/* Responsive design */
@media (max-width: 768px) {
  .post-page {
    padding: 1rem;
  }

  .post {
    padding: 2rem 1.5rem;
    margin-top: 1rem;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-body {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .post {
    padding: 1.5rem 1rem;
  }

  .post-title {
    font-size: 1.8rem;
  }

  .post-body {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
