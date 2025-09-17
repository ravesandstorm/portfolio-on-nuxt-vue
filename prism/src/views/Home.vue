<template>
  <div class="page-content">
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
    </nav>
    
    <main class="main-content">
      <section class="hero">
        <h1 class="hero-title">Welcome to My Portfolio</h1>
        <p class="hero-subtitle">Creative Developer & Designer</p>
        <div class="hero-description">
          <p>I create beautiful and functional digital experiences that bring ideas to life.</p>
        </div>
      </section>
      
      <section class="features">
        <div class="feature-card">
          <h3>Frontend Development</h3>
          <p>Building responsive and interactive web applications with modern technologies.</p>
        </div>
        <div class="feature-card">
          <h3>UI/UX Design</h3>
          <p>Creating intuitive and visually appealing user interfaces and experiences.</p>
        </div>
        <div class="feature-card">
          <h3>3D Graphics</h3>
          <p>Developing immersive 3D visualizations and interactive graphics.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Home page component
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
  text-align: center;
}

.hero {
  margin-bottom: 80px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #a0a0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 30px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #a0a0ff;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .navigation {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
