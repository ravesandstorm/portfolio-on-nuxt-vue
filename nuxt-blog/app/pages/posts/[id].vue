<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.params.id}`, () =>
  $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
)
</script>

<template>
  <div class="post-page">
    <article class="post">
      <div class="post-header">
        <SplitText
          :text="post.title"
          :delay="120"
          :duration="0.8"
          className="post-title"
          splitType="words"
          textAlign="center"
        />
      </div>

      <div class="post-content">
        <SplitText
          :text="post.body"
          :delay="50"
          :duration="0.6"
          className="post-body"
          splitType="words"
          textAlign="left"
          :threshold="0.2"
        />
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

.post {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.post-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.post-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.3;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-content {
  margin-bottom: 3rem;
}

.post-body {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  text-align: justify;
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
.dark .post {
  background: rgba(42, 42, 42, 0.9);
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
