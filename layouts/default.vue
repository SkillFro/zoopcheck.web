<template>
  <div>
    <Header />
    <slot class="bg-[#F3F3F7]" ></slot>
    <Footer />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  auth: false
})
</script>