<template>
  <div class="page-content">
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
    </nav>
    
    <main class="main-content">
      <section class="projects-hero">
        <h1 class="page-title">My Projects</h1>
        <p class="page-subtitle">A showcase of my recent work and creative endeavors</p>
      </section>
      
      <section class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">🎨</div>
          </div>
          <div class="project-content">
            <h3>3D Portfolio Website</h3>
            <p>An interactive portfolio website featuring stunning 3D graphics and smooth animations built with Vue.js and WebGL.</p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">WebGL</span>
              <span class="tech-tag">OGL</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">🚀</div>
          </div>
          <div class="project-content">
            <h3>E-Commerce Platform</h3>
            <p>A modern e-commerce platform with responsive design, shopping cart functionality, and payment integration.</p>
            <div class="project-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Stripe</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">📱</div>
          </div>
          <div class="project-content">
            <h3>Mobile Task Manager</h3>
            <p>A responsive task management application with drag-and-drop functionality and real-time collaboration features.</p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">PWA</span>
              <span class="tech-tag">Vuetify</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">🎮</div>
          </div>
          <div class="project-content">
            <h3>Interactive Game</h3>
            <p>A browser-based puzzle game with physics simulation, particle effects, and progressive difficulty levels.</p>
            <div class="project-tech">
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">Canvas API</span>
              <span class="tech-tag">Matter.js</span>
              <span class="tech-tag">Web Audio</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">📊</div>
          </div>
          <div class="project-content">
            <h3>Data Visualization Dashboard</h3>
            <p>An interactive dashboard for data analysis with real-time charts, filters, and export functionality.</p>
            <div class="project-tech">
              <span class="tech-tag">D3.js</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">FastAPI</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-image">🌐</div>
          </div>
          <div class="project-content">
            <h3>Social Media Platform</h3>
            <p>A full-stack social media application with user authentication, real-time messaging, and content sharing.</p>
            <div class="project-tech">
              <span class="tech-tag">Next.js</span>
              <span class="tech-tag">Socket.io</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">Redis</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Projects page component
</script>

<style scoped>
.page-content {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  padding: 20px;
  color: white;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
  padding: 20px 0;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-hero {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #a0a0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, rgba(160, 160, 255, 0.3), rgba(255, 255, 255, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.placeholder-image {
  font-size: 4rem;
  opacity: 0.7;
}

.project-content {
  padding: 25px;
}

.project-content h3 {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.project-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: rgba(160, 160, 255, 0.3);
  color: #a0a0ff;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(160, 160, 255, 0.5);
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .navigation {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-links {
    flex-direction: column;
  }
}
</style>
