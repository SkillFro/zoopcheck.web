<template>
  <div class="bg-[#f8f9fa] h-screen flex justify-center items-center">
    <!-- Login -->
    <div
      v-if="login"
      class="lg:flex lg:flex-row flex flex-col items-center justify-center w-full md:max-w-[1100px] md:mx-auto px-2"
    >
      <div
        class="md:w-[400px] md:h-[500px] w-full h-auto bg-white border px-4 md:px-8 py-5 flex flex-col gap-[15px] shadow-xl"
      >
        <div
          class="flex items-center justify-center lg:items-start lg:justify-start lg:flex"
        >
          <img src="/public/images/logo.svg" class="w-[150px]" alt="" />
        </div>
        <div class="text-center lg:text-start">
          <h3 class="text-[25px] font-semibold text-[#2c3038]">Welcome Back</h3>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex items-center gap-3">
            <input
              @click="togglePasswordVisibility()"
              type="checkbox"
              name="checkbox"
              id="showpassword"
              class="w-[15px] h-[15px]"
            />
            <p class="">Show Me Password</p>
          </div>
          <div>
            <NuxtLink to="/dashboard">
              <button class="p-3 rounded bg-[#2966f4] text-white w-full">
                Login
              </button>
            </NuxtLink>
          </div>
        </div>
        <hr />
        <div class="text-center">
          <p class="text-[16px] leading-[25px] text-[#2c3038]">
            Don't have an account?
            <span @click="toggleLogin()" class="text-[#2966f4] cursor-pointer"
              >Sign up now</span
            >
          </p>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="/public/images/loginimage.png"
          class="md:w-[400px] md:h-[500px] object-contain"
          alt=""
        />
      </div>
    </div>

    <!-- Signup -->
    <div
      v-if="signup"
      class="lg:flex lg:flex-row-reverse flex flex-col-reverse items-center justify-center w-full lg:max-w-[1100px] lg:mx-auto px-2"
    >
      <div
        class="md:w-[400px] md:h-[500px] w-full h-auto bg-white border px-3 md:px-8 md:py-3 py-5 flex flex-col gap-[10px] shadow-xl"
      >
        <div class="text-center">
          <h3 class="text-[25px] font-semibold text-[#2c3038]">Hi Welcome</h3>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-center gap-2">
          <button
            id="recruiter"
            @click="toggleRecruiter()"
            class="px-6 py-2 :font-medium :text-[16px] border rounded transition-all duration-300 font-medium hover:bg-[#333333] hover:text-white"
            :class="
              recruiter ? 'bg-[#333333] text-white' : 'bg-white text-black'
            "
          >
            Recruiter?
          </button>
          <button
            id="canditate"
            @click="toggleCanditate()"
            class="px-6 py-2 :font-medium :text-[16px] border rounded transition-all duration-300 font-medium hover:bg-[#333333] hover:text-white"
            :class="
              canditate ? 'bg-[#333333] text-white' : 'bg-white text-black'
            "
          >
            Canditate?
          </button>
        </div>

        <!-- Recruiter -->
        <div v-if="recruiter" class="flex flex-col gap-[10px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>

          <div>
            <button
              @click="toggleSignup()"
              class="p-3 rounded bg-[#2966f4] text-white w-full"
            >
              Register
            </button>
          </div>
          <hr />
          <div class="text-center">
            <p class="text-[16px] leading-[25px] text-[#2c3038]">
              Already have an account?
              <span
                @click="toggleSignup()"
                class="text-[#2966f4] cursor-pointer"
                >Login now</span
              >
            </p>
          </div>
        </div>

        <!-- Canditate -->
        <div v-if="canditate" class="flex flex-col gap-[10px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>

          <div>
            <button
              @click="toggleSignup()"
              class="p-3 rounded bg-[#2966f4] text-white w-full"
            >
              Register
            </button>
          </div>
          <hr />
          <div class="text-center">
            <p class="text-[16px] leading-[25px] text-[#2c3038]">
              Already have an account?
              <span
                @click="toggleSignup()"
                class="text-[#2966f4] cursor-pointer"
                >Login now</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="/public/images/signupimage.png"
          class="md:w-[400px] md:h-[500px] object-contain"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: true,
      signup: false,
      recruiter: true,
      canditate: false,
    };
  },
  methods: {
    toggleLogin() {
      this.login = false;
      this.signup = true;
    },
    toggleSignup() {
      this.login = true;
      this.signup = false;
    },
    toggleRecruiter() {
      this.recruiter = true;
      this.canditate = false;
    },
    toggleCanditate() {
      this.canditate = true;
      this.recruiter = false;
    },
    togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      const checkbox = document.getElementById("showpassword");
      passwordInput.type = checkbox.checked ? "text" : "password";
    },
  },
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
};
</script>
