<template>
  <section class="social-links">
    <div class="social-header">
      <SplitText 
        text="Connect With Me" 
        :delay="100"
        :duration="0.8"
        className="social-title"
        splitType="chars"
        textAlign="center"
      />
    </div>

    <div class="social-grid">
      <a 
        v-for="(link, index) in socialLinks" 
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="social-icon">
          <img :src="link.icon" :alt="link.name" />
        </div>
        <div class="social-content">
          <h3 class="social-name">{{ link.name }}</h3>
          <p class="social-description">{{ link.description }}</p>
        </div>
        <div class="social-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const socialLinks = [
  {
    name: "GitHub",
    description: "Check out my repositories and open source contributions",
    url: "https://github.com",
    icon: "/social/github.svg"
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally and see my experience",
    url: "https://linkedin.com",
    icon: "/social/linkedin.svg"
  },
  {
    name: "LeetCode",
    description: "View my coding challenges and problem-solving skills",
    url: "https://leetcode.com",
    icon: "/social/leetcode.svg"
  },
  {
    name: "Kaggle",
    description: "Explore my data science projects and competitions",
    url: "https://kaggle.com",
    icon: "/social/kaggle.svg"
  }
]
</script>

<style scoped>
.social-links {
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
}

.social-header {
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.social-title {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(280px, 40vw, 300px), 1fr));
  gap: clamp(1rem, 2.5vw, 1.5rem);
}

.social-item {
  display: flex;
  align-items: center;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: clamp(12px, 2.5vw, 16px);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  position: relative;
  overflow: hidden;
  width: 100%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 112, 243, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.social-item:hover::before {
  left: 100%;
}

.social-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 112, 243, 0.15);
  background: rgba(255, 255, 255, 0.95);
}

.social-icon {
  width: clamp(40px, 8vw, 48px);
  height: clamp(40px, 8vw, 48px);
  margin-right: clamp(0.75rem, 2vw, 1rem);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 112, 243, 0.1);
  border-radius: clamp(8px, 2vw, 12px);
  transition: all 0.3s ease;
}

.social-item:hover .social-icon {
  background: rgba(0, 112, 243, 0.2);
  transform: scale(1.1);
}

.social-icon img {
  width: clamp(24px, 6vw, 28px);
  height: clamp(24px, 6vw, 28px);
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.social-content {
  flex: 1;
  margin-right: clamp(0.75rem, 2vw, 1rem);
}

.social-name {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
}

.social-description {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #64748b;
  margin: 0;
  line-height: 1.4;
}

.social-arrow {
  color: #0070f3;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.social-item:hover .social-arrow {
  transform: translate(4px, -4px);
  opacity: 1;
}

/* Dark mode */
.dark .social-title {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .social-item {
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dark .social-item::before {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(159, 122, 234, 0.15),
    transparent
  );
}

.dark .social-item:hover {
  background: rgba(50, 50, 50, 0.95);
  box-shadow: 0 12px 30px rgba(159, 122, 234, 0.2);
}

.dark .social-icon {
  background: rgba(159, 122, 234, 0.15);
}

.dark .social-item:hover .social-icon {
  background: rgba(159, 122, 234, 0.25);
}

.dark .social-name {
  color: #e2e8f0;
}

.dark .social-description {
  color: #a0aec0;
}

.dark .social-arrow {
  color: #9f7aea;
}

/* Responsive design */
@media (max-width: 768px) {
  .social-links {
    padding: 2rem 1rem;
  }
  
  .social-title {
    font-size: 2.5rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .social-item {
    padding: 1.25rem;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
  }
  
  .social-icon img {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .social-title {
    font-size: 2rem;
  }
  
  .social-item {
    padding: 1rem;
  }
  
  .social-name {
    font-size: 1.1rem;
  }
  
  .social-description {
    font-size: 0.85rem;
  }
}
</style>
