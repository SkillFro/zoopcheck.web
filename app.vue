<template>
  <div class="font-poppins">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  </div>
</template>
<style>
body {
  background-color: #f8f9fa;
}
</style>
