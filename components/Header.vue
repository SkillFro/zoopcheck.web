<template>
  <!-- xl device navbar -->
  <div class="hidden lg:block">
    <div
      class="w-full h-[95px] bg-white fixed top-0 flex justify-center items-center z-10"
    >
      <div
        class="max-w-[1296px] flex items-center justify-center xl:gap-[110px] gap-[40px]"
      >
        <img src="/public/images/logo.svg" alt="" width="150px" />
        <div class="flex items-center xl:gap-[64px] gap-[30px]">
          <div class="flex items-center xl:gap-[16px] gap-[10px]">
            <div
              v-for="nav in navs"
              :key="nav"
              class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              :class="{
                '  text-[#2966f4] underline underline-offset-[12px] decoration-[#2966f4] decoration-2':
                  $route.path === nav.path,
              }"
            >
              <NuxtLink :to="nav.path">
                {{ nav.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center gap-[16px]">
            <NuxtLink to="/resume">
              <button
                class="py-[6px] px-[12px] bg-[#2966f4] text-white text-[16px] rounded-[0.375rem]"
              >
                Start Career
              </button>
            </NuxtLink>
            <button
              class="py-[6px] px-[12px] bg-[#0a2d52] text-white text-[16px] rounded-[0.375rem]"
            >
              Hire Canditates
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- sm device navbar -->
  <div class="fixed top-0 z-10 block w-full lg:hidden">
    <div class="flex items-center justify-between p-4 bg-white lg:px-10">
      <img src="/public/images/logo.svg" alt="logo" class="w-[150px]" />
      <button
        @click="toggleNav()"
        class="px-[12px] rounded-md py-[4px] border border-[#00000026] focus:border-black focus:border-2"
      >
        <span
          ><img src="/public/images/bar.svg" width="30px" height="30px" alt=""
        /></span>
      </button>
    </div>
    <div v-if="nav" class="w-full p-10 bg-white">
      <div class="flex flex-col items-start justify-center gap-[40px]">
        <div
          v-for="nav in navs"
          :key="nav"
          class="flex flex-col items-start justify-center hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
          :class="{
            '  text-[#2966f4]': $route.path === nav.path,
          }"
        >
          <NuxtLink :to="nav.path">
            {{ nav.name }}
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center gap-[16px]">
          <button
            class="py-[6px] px-[12px] bg-[#2966f4] text-white text-[16px] rounded-[0.375rem]"
          >
            Start Career
          </button>
          <button
            class="py-[6px] px-[12px] bg-[#0a2d52] text-white text-[16px] rounded-[0.375rem]"
          >
            Hire Canditates
          </button>
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
<script>
export default {
  data() {
    return {
      nav: false,
      navs: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Current Openings",
          path: "/currentopenings",
        },
        {
          name: "Tech Stories",
          path: "/techstories",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav;
    },
    closeNav() {
      this.nav = false;
    },
  },
  watch: {
    $route() {
      this.closeNav();
    },
  },
};
</script>
