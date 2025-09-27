<template>
  <section class="about">
    <div class="about-content">
      <div class="about-header">
        <SplitText 
          text="About Me" 
          :delay="100"
          :duration="0.8"
          className="about-title"
          splitType="chars"
          textAlign="center"
        />
      </div>
      
      <div class="about-description">
        <SplitText 
          text="I'm a passionate developer who loves creating beautiful and functional web experiences. With expertise in modern technologies and a keen eye for design, I bring ideas to life through code." 
          :delay="30"
          :duration="0.6"
          className="about-text"
          splitType="words"
          textAlign="center"
          :threshold="0.3"
        />
      </div>

      <div class="about-highlights">
        <div class="highlight-item" v-for="(item, index) in highlights" :key="index">
          <SplitText 
            :text="item.title" 
            :delay="60"
            :duration="0.7"
            className="highlight-title"
            splitType="chars"
            textAlign="center"
          />
          <SplitText 
            :text="item.description" 
            :delay="40"
            :duration="0.5"
            className="highlight-description"
            splitType="words"
            textAlign="center"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import techCategories from '../public/techStack.json'

const highlights = techCategories.map(category => ({
    title: category.name,
    description: category.technologies.map(tech => tech.name).join(', ')
  })
);

</script>

<style scoped>
.about {
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
}

.about-content {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: clamp(16px, 3vw, 24px);
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
}

.about-header {
  margin-bottom: 1rem;
}

.about-title * {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-description {
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.about-text {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  font-weight: 400;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(180px, 25vw, 200px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  margin-top: clamp(1.5rem, 3vw, 2rem);
}

.highlight-item {
  text-align: center;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  background: rgba(255, 255, 255, 0.6);
  border-radius: clamp(12px, 2vw, 16px);
  border: 1px solid rgba(0, 112, 243, 0.1);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 112, 243, 0.15);
  background: rgba(255, 255, 255, 0.8);
}

.highlight-title {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: block;
}

.highlight-description {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

/* Dark mode */
.dark .about-content {
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.dark .about-title {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .about-text {
  color: #cbd5e0;
}

.dark .highlight-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .highlight-item:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 25px rgba(159, 122, 234, 0.2);
}

.dark .highlight-title {
  color: #e2e8f0;
}

.dark .highlight-description {
  color: #a0aec0;
}

/* Responsive design */
@media (max-width: 768px) {
  .about {
    padding: 2rem 1rem;
  }
  
  .about-content {
    padding: 2rem 1.5rem;
  }
  
  .about-title {
    font-size: 2.5rem;
  }
  
  .about-text {
    font-size: 1.1rem;
  }
  
  .about-highlights {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 2rem;
  }
  
  .about-text {
    font-size: 1rem;
  }
}
</style>
