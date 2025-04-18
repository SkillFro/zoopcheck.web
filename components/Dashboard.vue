<template>
  <div>
    <div class="hidden lg:block">
      <div
        class="h-screen bg-white border border-white border-r-slate-100 w-[230px] p-5 flex flex-col gap-4 px-4"
      >
        <img
          src="/public/images/logo.svg"
          alt="logo"
          class="w-[183px] h-[36px]"
        />
        <div class="flex flex-col justify-between h-full gap-3 my-5">
          <div>
            <div
              v-for="nav in navs"
              class="mt-3"
              :key="nav"
              :class="{
                'border bg-[#2966f4] rounded-xl ': $route.path === nav.path,
              }"
            >
              <nuxt-link
                :to="nav.path"
                class="flex items-center justify-start gap-4 p-2 px-5"
              >
                <img
                  :src="$route.path === nav.path ? nav.activeIcon : nav.icon"
                  alt="icon"
                  class="w-[20px] h-[20px]"
                />
                <h1
                  class="text-[16px] font-[500]"
                  :class="{
                    'text-white': $route.path === nav.path,
                    'text-slate-800': $route.path !== nav.path,
                  }"
                >
                  {{ nav.name }}
                </h1>
              </nuxt-link>
            </div>
          </div>
          <div
            @click="openLogout()"
            class="flex items-center gap-4 px-4 py-2 cursor-pointer"
          >
            <img
              src="/public/dash/logout.svg"
              class="w-[20px] h-[20px]"
              alt="icon"
            />
            <h1 class="text-red-500 text-[14px]">Logout</h1>
          </div>
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
    <div class="fixed top-0 z-10 block w-full h- lg:hidden">
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
      <div v-if="nav" class="w-3/4 h-screen bg-white px-7">
        <div class="flex flex-col justify-between h-full gap-3">
          <div class="flex-1">
            <div
              v-for="nav in navs"
              :key="nav"
              class="text-[16px] mb-4 px-4 py-2"
              :class="{
                'bg-[#2966f4] rounded-xl ': $route.path === nav.path,
              }"
            >
              <NuxtLink :to="nav.path" class="flex items-center gap-2">
                <img
                  :src="$route.path === nav.path ? nav.activeIcon : nav.icon"
                  alt="icon"
                  class="w-[20px] h-[20px] inline-block mr-2"
                />

                <h1
                  class="text-[16px] font-medium hover:text-[#2966f4]"
                  :class="{
                    'text-white': $route.path === nav.path,
                    'text-slate-900': $route.path !== nav.path,
                  }"
                >
                  {{ nav.name }}
                </h1>
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col justify-center flex-1">
            <div
              @click="openLogout()"
              class="flex items-center gap-4 px-4 py-2 cursor-pointer"
            >
              <img
                src="/public/dash/logout.svg"
                class="w-[20px] h-[20px]"
                alt="icon"
              />
              <h1 class="text-red-500 text-[14px] font-">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="logout"
      class="fixed top-0 z-50 flex items-center justify-center w-full h-screen bg-black/70 bg-blend-overlay"
    >
      <div
        class="bg-white w-[300px] h-[190px] rounded-xl flex flex-col items-center p-5 gap-5"
      >
        <h1 class="text-[20px] font-bold">Logout Confirmation</h1>
        <h5 class="">Are You Sure Want to do logout</h5>
        <div class="flex items-center gap-4">
          <button
            @click="confirmLogout()"
            class="text-[14px] border-red-500 border px-4 py-2 bg-red-500 text-white hover:border-transparent rounded-lg"
          >
            Confirm
          </button>
          <button
            @click="closeLogout()"
            class="text-gray-900 text-[14px] border-gray-500 border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
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
      logout: false,
      navs: [
        {
          name: "Dashboard",
          path: "/dashboard/recruiter",
          icon: "/dash/home.svg",
          activeIcon: "/dash/homeactive.svg",
        },
        {
          name: "Job Posts",
          path: "/dashboard/recruiter/job",
          icon: "/dash/job.svg",
          activeIcon: "/dash/jobactive.svg",
        },
        {
          name: "Profile",
          path: "/dashboard/recruiter/profile",
          icon: "/dash/profile.svg",
          activeIcon: "/dash/profileactive.svg",
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
    openLogout() {
      this.logout = true;
      this.nav = false;
      document.body.style.overflow = "hidden";
    },
    closeLogout() {
      this.logout = false;
      document.body.style.overflow = "";
    },
    confirmLogout() {
      localStorage.clear();
      this.logout = false;
      document.body.style.overflow = "";
      this.$router.push("/");
    },
  },
  watch: {
    $route() {
      this.closeNav();
    },
  },
};
</script>
