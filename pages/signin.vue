<template>
  <div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <a href="/">
        <img
          class="mx-auto h-20 w-auto"
          src="/public/images/logo.svg"
          alt="Your Company"
        />
      </a>
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <!-- <a href="#" class="font-semibold text-[#086BD8] hover:text-[#086BD8]">Forgot password?</a> -->
            </div>
          </div>
          <div class="mt-2 relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              <svg
                v-if="!showPassword"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <button
            @click="login"
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#086BD8] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#086BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]"
          >
            <span v-if="!loading">Sign in</span>
            <span
              v-else
              class="border-2 border-white border-l-slate-400 w-5 h-5 rounded-full animate-spin"
            ></span>
          </button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <span class="relative inline-block">
          <button
            @click="showDropdown = !showDropdown"
            class="font-semibold text-[#086BD8] hover:text-[#086BD8] focus:outline-none"
            type="button"
          >
            Sign Up
          </button>
          <transition name="fade">
            <div
              v-if="showDropdown"
              class="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-10 z-20 border border-gray-100"
            >
              <div class="py-2">
                <a
                  href="/signUp?role=candidate"
                  class="flex items-center gap-2 px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-[#086BD8] transition-colors duration-150 rounded-t-xl"
                  @click="showDropdown = false"
                >
                  <svg
                    class="w-5 h-5 text-[#086BD8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                  Candidate
                </a>
                <a
                  href="/signUp?role=recruiter"
                  class="flex items-center gap-2 px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-[#086BD8] transition-colors duration-150 rounded-b-xl"
                  @click="showDropdown = false"
                >
                  <svg
                    class="w-5 h-5 text-[#086BD8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.36 17 14.28 17 15.5V19h5v-2.5c0-2.22-4.33-3.5-7-3.5z"
                    />
                  </svg>
                  Recruiter
                </a>
              </div>
            </div>
          </transition>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "primary",
      middleware: "sidebase-auth",
      auth: {
        unauthenticatedOnly: true,
        navigateUnauthenticatedTo: "/profile",
      },
    });
  },
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      showDropdown: false,
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async signUp() {
      this.loading = true;
      const role = this.$route.query.role || "candidate"; // Default to 'candidate' if no role is provided
      await useAuth()
        .signUp(
          { email: this.email, password: this.password, role },
          { callbackUrl: "/" }
        )
        .then((res) => {
          push.success({
            title: "Success",
            message: "You signed up successfully !",
          });
        })
        .catch((err) => {
          push.error({ title: "Error", message: "Invalid Email or Password" });
        });

      this.loading = false;
    },
    async login() {
      this.loading = true;
      await useAuth()
        .signIn(
          { email: this.email, password: this.password },
          { callbackUrl: "/" }
        )
        .then((res) => {
          push.success({
            title: "Success",
            message: "You logged in successfully !",
          });
        })
        .catch((err) => {
          push.error({ title: "Error", message: "Invalid Email or Password" });
        });

      this.loading = false;
    },
  },
};
</script>
