<template>
  <!-- xl device navbar -->
  <div class="hidden lg:block">
    <div
      class="w-full px-4 py-6 bg-white/50 shadow-xs backdrop-blur-md fixed top-0 flex justify-center items-center z-10"
    >
      <div
        class="xl:max-w-[1120px] w-full mx-auto flex items-center justify-between"
      >
        <a href="/">
          <img src="/public/images/logo.svg" alt="" width="150px" />
        </a>
        <div class="flex items-center xl:gap-[64px] gap-[30px]">
          <div class="flex items-center xl:gap-[16px] gap-[10px]">
            <div
              v-for="nav in navs"
              :key="nav"
              class="hover:text-[#086BD8] font-semibold text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#086BD8] hover:decoration-2 leading-[24px] px-2"
              :class="
                getRoute(nav.path)
                  ? '  text-[#086BD8] underline underline-offset-[12px] decoration-[#086BD8] decoration-2'
                  : 'text-gray-800'
              "
            >
              <NuxtLink :to="nav.path">
                {{ nav.name }}
              </NuxtLink>
            </div>
          </div>
          <div
            v-if="authState.status !== 'authenticated'"
            class="flex items-center gap-[16px]"
          >
            <NuxtLink to="/signin">
              <button
                class="py-[6px] px-[12px] cursor-pointer border border-[#086BD8] text-[#086BD8] text-[16px] rounded-[0.375rem]"
              >
                Sign In
              </button>
            </NuxtLink>
            <div class="relative">
              <div
                @click="toggleOptions"
                class="py-[6px] px-[12px] cursor-pointer bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
              >
                Get Started
              </div>

              <div
                v-if="showOptions"
                class="absolute z-20 w-[500px] top-14 right-0 bg-white border border-slate-200 rounded-lg"
              >
                <div class="py-1 md:px-1 space-y-0.5">
                  <a
                    class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg"
                    href="/signup?role=candidate"
                  >
                    <img
                      src="/public/icons/experience.svg"
                      class="w-5 h-5"
                      alt=""
                    />
                    <div class="grow">
                      <span class="block font-semibold text-sm text-gray-800"
                        >Candidates</span
                      >
                      <p class="text-sm text-gray-500">
                        How we connect you with your perfect career opportunity
                      </p>
                    </div>
                  </a>
                  <div class="my-2 border-t border-gray-100"></div>
                  <a
                    class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg"
                    href="/signup?role=recruiter"
                  >
                    <img src="/public/icons/users.svg" class="w-5 h-5" alt="" />
                    <div class="grow">
                      <span class="block font-semibold text-sm text-gray-800"
                        >Recruiters</span
                      >
                      <p class="text-sm text-gray-500">
                        How we help you find and hire top talent faster
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="relative cursor-pointer">
            <!-- <button
                class="py-[6px] px-[12px] bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
              >
                Profile
              </button> -->
            <img
              @click="() => (toggle = !toggle)"
              class="w-10 h-10 rounded-full"
              :src="
                authState.data.user.profile !== '' &&
                authState.data.user.profile !== undefined
                  ? authState.data.user.profile
                  : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'
              "
              alt=""
            />
            <div
              v-if="toggle"
              class="bg-white shadow text-[16px] flex flex-col absolute z-10 right-2 p-2 top-10 gap-2 items-end mt-2"
            >
              <NuxtLink
                to="/profile?tab=profile"
                @click="() => (toggle = !toggle)"
                class="cursor-pointer px-4"
                >Account</NuxtLink
              >

              <NuxtLink @click="logout" class="text-red-500 px-4 cursor-pointer"
                >Log Out</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- sm device navbar -->
  <div class="fixed top-0 z-10 block w-full py-4 bg-white lg:hidden">
    <div class="flex items-center justify-between px-4 lg:px-10">
      <a href="/">
        <img src="/public/images/logo.svg" alt="logo" class="w-[150px]" />
      </a>
      <button
        @click="toggleNav()"
        class="px-[12px] rounded-md py-[4px] border border-[#00000026] focus:border-black focus:border-2"
      >
        <span
          ><img src="/public/images/bar.svg" width="30px" height="30px" alt=""
        /></span>
      </button>
    </div>
    <div v-if="nav" class="w-full bg-black/70">
      <div class="bg-white p-10">
        <div class="flex flex-col items-end justify-center gap-[40px]">
          <div
            v-for="nav in navs"
            :key="nav"
            class="hover:text-[#086BD8] font-semibold text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#086BD8] hover:decoration-2 leading-[24px] px-2"
            :class="
              getRoute(nav.path)
                ? '  text-[#086BD8] underline underline-offset-[12px] decoration-[#086BD8] decoration-2'
                : 'text-gray-800'
            "
          >
            <NuxtLink :to="nav.path">
              {{ nav.name }}
            </NuxtLink>
          </div>
          <div
            v-if="authState.status !== 'authenticated'"
            class="flex flex-col items-end gap-[16px]"
          >
            <NuxtLink to="/signin">
              <button
                class="py-[6px] px-[12px] cursor-pointer border border-[#086BD8] text-[#086BD8] text-[16px] rounded-[0.375rem]"
              >
                Sign In
              </button>
            </NuxtLink>
            <div class="relative">
              <div
                @click="toggleOptions"
                class="py-[6px] px-[12px] cursor-pointer bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
              >
                Get Started
              </div>

              <div
                v-if="showOptions"
                class="absolute z-20 w-[310px] top-12 right-0 bg-white border border-slate-200 rounded-lg"
              >
                <div class="py-1 md:px-1 space-y-0.5">
                  <a
                    class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg"
                    href="/signup?role=candidate"
                  >
                    <img
                      src="/public/icons/experience.svg"
                      class="w-5 h-5"
                      alt=""
                    />
                    <div class="grow">
                      <span class="block font-semibold text-sm text-gray-800"
                        >Candidates</span
                      >
                      <p class="text-sm text-gray-500">
                        How we connect you with your perfect career opportunity
                      </p>
                    </div>
                  </a>
                  <div class="my-2 border-t border-gray-100"></div>
                  <a
                    class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg"
                    href="/signup?role=recruiter"
                  >
                    <img src="/public/icons/users.svg" class="w-5 h-5" alt="" />
                    <div class="grow">
                      <span class="block font-semibold text-sm text-gray-800"
                        >Recruiters</span
                      >
                      <p class="text-sm text-gray-500">
                        How we help you find and hire top talent faster
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="relative cursor-pointer">
            <!-- <button
                class="py-[6px] px-[12px] bg-[#086BD8] text-white text-[16px] rounded-[0.375rem]"
              >
                Profile
              </button> -->
            <img
              @click="() => (toggle = !toggle)"
              class="w-10 h-10 rounded-full"
              :src="
                authState.data.user.profile !== '' &&
                authState.data.user.profile !== undefined
                  ? authState.data.user.profile
                  : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'
              "
              alt=""
            />
            <div
              v-if="toggle"
              class="bg-white shadow text-[16px] flex flex-col absolute z-10 right-12 p-2 top-5 gap-2 items-end mt-2"
            >
              <NuxtLink
                to="/profile?tab=profile"
                @click="() => (toggle = !toggle)"
                class="cursor-pointer px-4"
                >Account</NuxtLink
              >

              <NuxtLink @click="logout" class="text-red-500 px-4 cursor-pointer"
                >Log Out</NuxtLink
              >
            </div>
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
      authState: useAuth(),
      toggle: false,
      navs: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Jobs",
          path: "/jobs",
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
      showOptions: false,
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
    logout() {
      this.toggle = !this.toggle;
      useAuth().signOut({ callbackUrl: "/" });
    },
    getRoute(path) {
      return (
        this.$route.path === path ||
        this.$route.fullPath
          .replace("/", "")
          .split("/")
          .includes(path.replace("/", ""))
      );
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
  },
  watch: {
    $route() {
      this.closeNav();
    },
  },
};
</script>
