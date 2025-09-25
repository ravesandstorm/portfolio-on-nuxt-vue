<script setup>
import { ref } from 'vue'

defineProps({
  id: Number,
  title: String,
  link: String
})

const isHovered = ref(false)
const hasError = ref(false)
function onImgError() {
  hasError.value = true
}

</script>

<template>
  <NuxtLink
    :to="link"
    class="card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="image-container">
      <!-- real image (fills the container) -->
      <img
        v-if="!hasError"
        :src="`images/${id}.png`"
        :alt="title || `project-${id}`"
        class="card-image"
        loading="lazy"
        @error="onImgError"
      />
      <div v-else class="placeholder-image">
        <div class="project-number">{{ id }}</div>
      </div>

      <div class="card-overlay"></div>
    </div>
    <div class="text-container">
      <SplitText
        :text="title"
        :delay="50"
        :duration="0.6"
        className="card-title"
        splitType="words"
        textAlign="center"
        :threshold="0.8"
      />
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 1 / 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card:hover {
  transform: translateY(-8px) scale(1.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.95);
}

/* Image container */
.image-container {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;         /* cover center-crop behavior */
  display: block;
  z-index: 0;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  opacity: 0.6;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;
}

.project-number {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card:hover .card-image {
  opacity: 1;          /* full visible on hover */
}

.card:hover .placeholder-image {
  opacity: 1;
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 112, 243, 0.1) 0%,
    rgba(0, 112, 243, 0.05) 50%,
    transparent 100%
  );
  transition: opacity 0.4s ease;
  opacity: 0;
}

.card:hover .card-overlay {
  opacity: 1;
}

/* Text container */
.text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1rem;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 70%,
    transparent 100%
  );
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.card:hover .text-container {
  transform: translateY(10px); /* text moves down */
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(255, 255, 255, 0.9) 70%,
    transparent 100%
  );
}

.card-title {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Dark Mode */
.dark .card {
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dark .card:hover {
  background: rgba(50, 50, 50, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.dark .text-container {
  background: linear-gradient(
    to top,
    rgba(42, 42, 42, 0.95) 0%,
    rgba(42, 42, 42, 0.8) 70%,
    transparent 100%
  );
}

.dark .card:hover .text-container {
  background: linear-gradient(
    to top,
    rgba(50, 50, 50, 0.98) 0%,
    rgba(50, 50, 50, 0.9) 70%,
    transparent 100%
  );
}

.dark .card-title {
  color: #e2e8f0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark .card-overlay {
  background: linear-gradient(
    135deg,
    rgba(102, 170, 255, 0.15) 0%,
    rgba(102, 170, 255, 0.08) 50%,
    transparent 100%
  );
}

.dark .placeholder-image {
  background: linear-gradient(135deg, #9f7aea 0%, #ed64a6 100%);
}
</style>
