<template>
  <div class="flex">
    <Dashboard />

    <div class="w-full h-screen bg-stone-100">
      <div class="h-screen overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
