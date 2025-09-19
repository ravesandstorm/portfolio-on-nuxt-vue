<template>
  <section class="tech-stack">
    <div class="tech-header">
      <SplitText 
        text="Tech Stack" 
        :delay="120"
        :duration="0.8"
        className="tech-title"
        splitType="chars"
        textAlign="center"
      />
    </div>

    <div class="tech-categories">
      <div class="tech-category" v-for="(category, index) in techCategories" :key="category.name">
        <SplitText 
          :text="category.name" 
          :delay="80"
          :duration="0.6"
          className="category-title"
          splitType="chars"
          textAlign="center"
        />
        <div class="tech-items">
          <div 
            class="tech-item" 
            v-for="(tech, techIndex) in category.technologies" 
            :key="tech.name"
            :style="{ animationDelay: `${(index * 3 + techIndex) * 0.1}s` }"
          >
            <div class="tech-icon">
              <img :src="tech.icon" :alt="tech.name" />
            </div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "Vue.js", icon: "/tech/vue.svg" },
      { name: "React", icon: "/tech/react.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Nuxt", icon: "/tech/nuxt.svg" },
      { name: "Tailwind", icon: "/tech/tailwind.svg" }
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Python", icon: "/tech/python.svg" },
      { name: "Express", icon: "/tech/express.svg" },
      { name: "FastAPI", icon: "/tech/fastapi.svg" },
      { name: "Docker", icon: "/tech/docker.svg" }
    ]
  },
  {
    name: "Database",
    technologies: [
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Redis", icon: "/tech/redis.svg" },
      { name: "Supabase", icon: "/tech/supabase.svg" },
      { name: "Firebase", icon: "/tech/firebase.svg" }
    ]
  }
]
</script>

<style scoped>
.tech-stack {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.tech-header {
  margin-bottom: 3rem;
}

.tech-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.tech-category {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-4px);
}

.category-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: block;
}

.tech-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
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

.tech-item:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(0, 112, 243, 0.1);
}

.tech-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: filter 0.3s ease;
}

.tech-item:hover .tech-icon img {
  filter: drop-shadow(0 4px 8px rgba(0, 112, 243, 0.3));
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
  text-align: center;
  line-height: 1.2;
}

/* Dark mode */
.dark .tech-title {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .tech-category {
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.dark .category-title {
  color: #e2e8f0;
}

.dark .tech-item:hover {
  background: rgba(159, 122, 234, 0.15);
}

.dark .tech-name {
  color: #cbd5e0;
}

.dark .tech-item:hover .tech-icon img {
  filter: drop-shadow(0 4px 8px rgba(159, 122, 234, 0.4));
}

/* Responsive design */
@media (max-width: 768px) {
  .tech-stack {
    padding: 2rem 1rem;
  }
  
  .tech-title {
    font-size: 2.5rem;
  }
  
  .tech-category {
    padding: 2rem 1.5rem;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
  
  .tech-items {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .tech-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .tech-title {
    font-size: 2rem;
  }
  
  .tech-items {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
  
  .tech-icon {
    width: 36px;
    height: 36px;
  }
  
  .tech-name {
    font-size: 0.8rem;
  }
}
</style>
