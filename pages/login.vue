<!-- <template>
  <div
    class="flex flex-col items-center justify-center py-5 bg-[#f8f9fa] h-screen"
  >
    <div
      class="bg-white flex flex-col p-[30px] gap-5 rounded-xl w-full md:w-[464px] h-auto border shadow-lg"
    >
      <div class="flex items-center justify-center">
        <img src="/public/images/logo.svg" width="250px" alt="" />
      </div>
      <div class="flex items-center justify-center">
        <h4
          class="py-[10px] px-[35px] bg-white text-[#555a64] leading-[25px] border shadow text-[16px] rounded font-semibold"
        >
          Login
        </h4>
      </div>
      <form action="#" method="post" class="flex flex-col gap-5">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-1.5">
            <label for="#" class="text-[16px] text-[#555a64] font-semibold"
              >Enter Your Email :</label
            >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              class="w-full rounded p-[12px] text-[16px] border border-[#ccc] placeholder:text-[#555a64] outline-none"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-[16px] text-[#555a64] font-semibold" for="#"
              >Enter Your Password</label
            >
            <input
              type="password"
              name="password"
              placeholder="Enter your password :"
              class="w-full rounded p-[12px] text-[16px] border border-[#ccc] placeholder:text-[#555a64] outline-none"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <a href="#" class="text-[#2c3038]">forgot password? </a>
          <button
            class="py-[10px] px-[35px] bg-[#2966f4] text-white text-[16px] rounded"
          >
            Login
          </button>
        </div>
      </form>
      <div class="mt-5 text-center">
        <p class="text-[16px] leading-[25px] text-[#2c3038] underline">
          Don't have an account? <NuxtLink to="/signup">Sign up now</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div
    class="md:pt-20 bg-[#f8f9fa] lg:h-screen flex justify-center items-center py-14"
  >
    <!-- Login -->
    <div
      v-if="login"
      class="lg:flex lg:flex-row flex flex-col items-center justify-center w-full md:max-w-[1100px] md:mx-auto px-2"
    >
      <div
        class="md:w-[400px] md:h-[500px] w-full h-auto bg-white border px-4 md:px-8 py-5 flex flex-col gap-[15px]"
      >
        <div>
          <img src="/public/images/logo.svg" class="w-[150px]" alt="" />
        </div>
        <div>
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
              type="checkbox"
              name="checkbox"
              id=""
              class="w-[15px] h-[15px]"
            />
            <p class="">Show Me Password</p>
          </div>
          <div>
            <button
              class="p-3 rounded bg-[#2966f4] text-white w-full shadow-lg shadow-[#2966f450]"
            >
              Login
            </button>
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
      <div>
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
      class="lg:flex lg:flex-row-reverse flex flex-col-reverse items-center justify-center w-full md:max-w-[1100px] md:mx-auto px-2"
    >
      <div
        class="md:w-[400px] md:h-[500px] w-full h-auto bg-white border px-8 py-5 flex flex-col gap-[15px]"
      >
        <div class="text-center">
          <h3 class="text-[25px] font-semibold text-[#2c3038]">Hi Welcome</h3>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-center gap-2">
          <button
            @click="toggleRecruiter()"
            class="px-6 py-2 :font-medium :text-[16px] border rounded transition-all duration-300 font-medium hover:bg-[#333333] hover:text-white"
            :class="
              recruiter ? 'bg-[#333333] text-white' : 'bg-white text-black'
            "
          >
            Recruiter?
          </button>
          <button
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
        <div v-if="recruiter" class="flex flex-col gap-[16px]">
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
              class="p-3 rounded bg-[#2966f4] text-white w-full shadow-lg shadow-[#2966f450]"
            >
              Register
            </button>
          </div>
        </div>

        <!-- Canditate -->
        <div v-if="canditate" class="flex flex-col gap-[16px]">
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
              class="p-3 rounded bg-[#2966f4] text-white w-full shadow-lg shadow-[#2966f450]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div>
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
  },
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
};
</script>
