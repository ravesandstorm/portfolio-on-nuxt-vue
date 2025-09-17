<template>
  <div class="page-content">
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
    </nav>
    
    <main class="main-content">
      <section class="about-hero">
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">Get to know the person behind the code</p>
      </section>
      
      <section class="about-content">
        <div class="about-text">
          <h2>Hello, I'm a Creative Developer</h2>
          <p>
            With a passion for creating beautiful and functional digital experiences, I specialize in 
            frontend development, UI/UX design, and 3D graphics. My journey in web development started 
            several years ago, and I've been constantly learning and evolving ever since.
          </p>
          <p>
            I believe in the power of clean code, intuitive design, and innovative solutions. 
            Whether it's building responsive web applications, creating stunning visual effects, 
            or solving complex problems, I approach each project with creativity and attention to detail.
          </p>
        </div>
        
        <div class="skills-section">
          <h2>Skills & Technologies</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>Vue.js / React</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 / CSS3</li>
                <li>WebGL / Three.js</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Animation</li>
                <li>3D Modeling</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>Vite / Webpack</li>
                <li>Figma / Adobe CC</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="experience-section">
          <h2>Experience</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2023 - Present</div>
              <div class="timeline-content">
                <h3>Senior Frontend Developer</h3>
                <p>Leading frontend development projects with focus on modern web technologies and user experience.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2021 - 2023</div>
              <div class="timeline-content">
                <h3>Full Stack Developer</h3>
                <p>Developed end-to-end web applications using various technologies and frameworks.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2019 - 2021</div>
              <div class="timeline-content">
                <h3>Junior Developer</h3>
                <p>Started my professional journey, learning and contributing to various web development projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// About page component
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
  max-width: 1000px;
  margin: 0 auto;
}

.about-hero {
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

.about-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.about-text {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 40px;
}

.about-text h2 {
  color: #a0a0ff;
  margin-bottom: 20px;
  font-size: 2rem;
}

.about-text p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.skills-section h2,
.experience-section h2 {
  color: #a0a0ff;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 30px;
}

.skill-category h3 {
  color: #a0a0ff;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  padding-left: 15px;
  position: relative;
}

.skill-category li::before {
  content: "▸";
  color: #a0a0ff;
  position: absolute;
  left: 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.timeline-item {
  display: flex;
  gap: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 30px;
}

.timeline-date {
  color: #a0a0ff;
  font-weight: 600;
  min-width: 150px;
  font-size: 1.1rem;
}

.timeline-content h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.timeline-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
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
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    gap: 15px;
  }
  
  .timeline-date {
    min-width: auto;
  }
}
</style>
