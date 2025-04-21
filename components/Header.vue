<template>
  <!-- xl device navbar -->
  <div class="hidden lg:block">
    <div
      class="w-full px-4 py-6 bg-white/50 shadow-xs backdrop-blur-md fixed top-0 flex justify-center items-center z-10"
    >
      <div
        class="xl:max-w-[1120px] w-full mx-auto flex items-center justify-between "
      >
        <img src="/public/images/logo.svg" alt="" width="150px" />
        <div class="flex items-center xl:gap-[64px] gap-[30px]">
          <div class="flex items-center xl:gap-[16px] gap-[10px]">
            <div
              v-for="nav in navs"
              :key="nav"
              class="hover:text-[#086BD8] font-semibold  text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#086BD8] hover:decoration-2 leading-[24px] px-2"
              :class="
                $route.path === nav.path?'  text-[#086BD8] underline underline-offset-[12px] decoration-[#086BD8] decoration-2':'text-gray-800'
              "
            >
              <NuxtLink :to="nav.path">
                {{ nav.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center gap-[16px]">
            <NuxtLink>
              <button
                class="py-[6px] px-[12px] bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
              >
                Login
              </button>
            </NuxtLink>
            <button
              class="py-[6px] px-[12px] border border-[#086BD8] text-[#086BD8] text-[16px] rounded-[0.375rem]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- sm device navbar -->
  <div class="fixed top-0 z-10 shadow-xs backdrop-blur-md bg-white/50 block w-full lg:hidden">
    <div class="flex items-center justify-between p-4 bg- lg:px-10">
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
      <div class="flex flex-col items-end justify-center gap-[40px]">
        <div
              v-for="nav in navs"
              :key="nav"
              class="hover:text-[#086BD8] font-semibold  text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#086BD8] hover:decoration-2 leading-[24px] px-2"
              :class="
                $route.path === nav.path?'  text-[#086BD8] underline underline-offset-[12px] decoration-[#086BD8] decoration-2':'text-gray-800'
              "
            >
              <NuxtLink :to="nav.path">
                {{ nav.name }}
              </NuxtLink>
            </div>
        <div class="flex flex-col gap-[16px]">
          <button
            class="py-[6px] px-[12px] bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
          >
            Login
          </button>
          <button
            class="py-[6px] px-[12px] bg-[#0a2d52] text-white text-[16px] rounded-[0.375rem]"
          >
            Sign Up
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
          name: "Jobs",
          path: "/job",
        },

        {
          name: "Case Studies",
          path: "/blogs",
        },
        {
          name: "About",
          path: "/about",
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
      document.body.style.overflow = this.nav ? "hidden" : "";
    },
    closeNav() {
      this.nav = false;
      document.body.style.overflow = "";
    },
  },
  watch: {
    $route() {
      this.closeNav();
    },
  },
};
</script>
