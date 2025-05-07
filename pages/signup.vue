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
        Sign Up your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900"
            ><span v-if="role === 'recruiter'">Company</span> Name</label
          >
          <div class="mt-2">
            <input
              v-model="name"
              type="name"
              name="name"
              id="name"
              autocomplete="name"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
            />
          </div>
        </div>
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
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            @click="signUp"
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#086BD8] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#086BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]"
          >
            <span v-if="!loading">Sign up</span>
            <span
              v-else
              class="border-2 border-white border-l-slate-400 w-5 h-5 rounded-full animate-spin"
            ></span>
          </button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already a member?
        <a
          href="/signin"
          class="font-semibold text-[#086BD8] hover:text-[#086BD8]"
          >Sign In</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({ layout: "primary" });
  },
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      password: "",
      role: useRoute().query.role,
    };
  },
  methods: {
    async signUp() {
      this.loading = true;
      await useAuth()
        .signUp(
          {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
          },
          { callbackUrl: "/signin", redirect: true }
        )
        .then((res) => {
          push.success({ title: "Success", message: "You Signed up !" });
        })
        .catch((err) => {
          push.error({ title: "Error", message: "Something went wrong" });
        });

      this.loading = false;
    },
  },
  mounted() {},
};
</script>
