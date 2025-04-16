<template>
  <div>
    <div class="hidden lg:block">
      <div
        class="h-screen bg-white border border-white border-r-slate-100 max-w-[400px] p-5 flex flex-col gap-4 px-8"
      >
        <img
          src="/public/images/logo.svg"
          alt="logo"
          class="w-[183px] h-[36px]"
        />
        <div
          v-for="nav in navs"
          :key="nav"
          :class="{
            '  text-[#2966f4]': $route.path === nav.path,
          }"
        >
          <nuxt-link :to="nav.path" class="flex gap-4 mt-5">
            <img :src="nav.icon" alt="home" class="w-[20px] h-[20px]" />
            <h1 class="text-[16px] font-medium hover:text-black">
              {{ nav.name }}
            </h1>
          </nuxt-link>
        </div>

        <!-- <div class="flex flex-col gap-5">
          <NuxtLink to="/dashboard">
            <div class="flex gap-4">
              <img
                src="/public/dash/home.png"
                alt="home"
                class="w-[20px] h-[20px]"
              />

              <h1
                class="text-[16px] text-slate-400 font-medium hover:text-black"
              >
                Dashboard
              </h1>
            </div>
          </NuxtLink>
          <nuxt-link to="/dashboard/job">
            <div class="flex gap-4">
              <img
                src="/public/dash/job-offer.png"
                alt="job"
                class="w-[20px] h-[20px]"
              />

              <h1
                class="text-[16px] text-slate-400 font-medium hover:text-black"
              >
                Jobposts
              </h1>
            </div>
          </nuxt-link>
          <nuxt-link to="/dashboard/profile">
            <div class="flex gap-4">
              <img
                src="/public/dash/profile.png"
                alt="home"
                class="w-[20px] h-[20px]"
              />

              <h1
                class="text-[16px] text-slate-400 font-medium hover:text-black"
              >
                Profile
              </h1>
            </div>
          </nuxt-link>
        </div> -->
      </div>
    </div>
    <div class="fixed top-0 z-10 block w-full lg:hidden">
      <div class="flex items-center justify-between p-4 bg-white lg:px-10">
        <img src="/public/images/logo.svg" alt="logo" class="w-[150px]" />
        <button
          @click="toggleNav()"
          class="px-[12px] rounded-md py-[4px] border border-[#00000026] focus:border-black focus:border-2"
        >
          <span
            ><img
              src="/public/images/bar.svg"
              width="30px"
              height="30px"
              alt=""
          /></span>
        </button>
      </div>
      <div v-if="nav" class="fixed left-0 h-screen bg-white p-7 top-15">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: false,
      navs: [
        {
          name: "Dashboard",
          path: "/dashboard/recruiter",
          icon: "/dash/home.png",
        },
        {
          name: "Jobposts",
          path: "/dashboard/recruiter/job",
          icon: "/dash/job-offer.png",
        },
        {
          name: "Profile",
          path: "/dashboard/recruiter/profile",
          icon: "/dash/profile.png",
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
