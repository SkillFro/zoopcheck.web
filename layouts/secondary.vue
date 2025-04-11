<template>
  <div class="flex">
    <Dashboard />
    <div class="w-full h-screen bg-[#F5F7FA]">
      <div class="w-full py-4 bg-white">
        <h1 class="text-3xl font-semibold">Overview</h1>
      </div>
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
