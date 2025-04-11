<template>
  <div>
    <div class="flex">
      <div
        class="h-screen bg-white shadow-lg max-w-[200px] p-5 flex flex-col gap-12 px-8"
      >
        <img
          src="/public/images/logo.svg"
          alt="logo"
          class="w-[183px] h-[36px]"
        />

        <div class="flex flex-col gap-5">
          <NuxtLink to="/dashboard">
            <div class="flex gap-4">
              <img
                src="/public/dash/home.png"
                alt="home"
                class="w-[20px] h-[20px]"
              />

              <h1 class="text-[16px] text-slate-400 font-medium">Home</h1>
            </div>
          </NuxtLink>
          <nuxt-link to="/dashboard/job">
            <div class="flex gap-4">
              <img
                src="/public/dash/job-offer.png"
                alt="job"
                class="w-[20px] h-[20px]"
              />

              <h1 class="text-[16px] text-slate-400 font-medium">Jobposts</h1>
            </div>
          </nuxt-link>
          <nuxt-link to="/dashboard/profile">
            <div class="flex gap-4">
              <img
                src="/public/dash/profile.png"
                alt="home"
                class="w-[20px] h-[20px]"
              />

              <h1 class="text-[16px] text-slate-400 font-medium">Profile</h1>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
