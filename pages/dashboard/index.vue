<template>
  <div>
    <div class="flex">
      <div class="h-screen bg-white shadow-lg max-w-[200px] p-2 px-14">
        <img
          src="/public/images/logo.svg"
          alt="logo"
          class="w-[140px] h-[120px]"
        />

        <div class="flex flex-col gap-5">
          <h1 class="text-[16px] text-slate-400 font-medium">Dashboard</h1>
          <h1 class="text-[16px] text-slate-400 font-medium">Jobposts</h1>
          <h1 class="text-[16px] text-slate-400 font-medium">Profile</h1>
        </div>
      </div>
      <div>
        <div>
          <h1 class="text-[32px] font-semibold">Overview</h1>
          <div class="">
            <div class="flex pl-6">
              <i class="text-2xl fa-sharp fa-regular fa-magnifying-glass"></i>
              <h3 class="text-[12px] font-normal">Search for something</h3>
            </div>
            <i class="fa-solid fa-gear text-[130px]"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ],
});
</script>
