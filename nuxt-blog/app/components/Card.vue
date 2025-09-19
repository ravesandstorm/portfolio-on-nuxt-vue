<script setup>
defineProps({
  id: Number,
  title: String,
  link: String
})
</script>

<template>
  <NuxtLink :to="link" class="card">
    <div class="image-container">
      <img :src="`/images/${id}.png`" :alt="title" />
    </div>
    <div class="overlay-text">{{ title }}</div>
  </NuxtLink>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  aspect-ratio: 1 / 1; /* square shape */
}

.card:hover {
  transform: scale(1.05);
  background: #fff;
}

/* Image box */
.image-container {
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(0 round 16px); /* rounded image corners */
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.card:hover .image-container img {
  opacity: 0.7;
}

/* Overlay Text */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: rgba(44, 62, 80, 0.85);
  padding: 0.5rem;
  transition: transform 0.3s ease 0.1s;
}

.card:hover .overlay-text {
  transform: translate(-50%, -100%); /* move text to top edge */
}

/* Dark Mode */
.dark .card {
  background: #2c2c2c;
}

.dark .overlay-text {
  color: rgba(240, 240, 240, 0.85);
}

.dark .card:hover {
  background: #3a3a3a;
}
</style>
