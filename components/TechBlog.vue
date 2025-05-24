<template>
  <NuxtLink
    :to="href"
    class="group flex flex-col border border-gray-200 hover:shadow-lg rounded-xl p-5 transition"
  >
    <img :src="blog.image" class="rounded-xl object-cover mb-4" />
    <h3 class="text-xl font-semibold text-gray-800 line-clamp-2">
      {{ blog.title }}
    </h3>
    <p class="mt-2 text-gray-600 line-clamp-2">
      {{ blog.description }}
    </p>
    <div class="mt-auto flex items-center gap-x-3 pt-4">
      <img :src="blog.authorImage" class="size-8 rounded-full" />
      <h5 class="text-sm text-gray-800">By {{ blog.author }}</h5>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps(["blog", "href"]);
</script>
