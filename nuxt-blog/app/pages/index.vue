<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts')
)

posts.value = posts.value.slice(0, 10)
</script>

<template>
  <div class="home">
    <h1>My Blog Posts</h1>
    <div class="grid">
      <Card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :link="`/posts/${post.id}`"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2c3e50;
}

/* Responsive grid */
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Dark mode title */
.dark h1 {
  color: #c3c3c3;
}
</style>
