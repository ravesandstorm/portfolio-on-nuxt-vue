<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.params.id}`, () =>
  $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
)
</script>

<template>
  <article class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <NuxtLink to="/">← Back to Home</NuxtLink>
  </article>
</template>

<style scoped>
.post {
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
h1 {
  margin-bottom: 1rem;
  color: #1a1a1a;
}
p {
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
