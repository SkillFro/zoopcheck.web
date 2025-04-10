<template>
  <div class="flex flex-col justify-center gap-5 py-5 bg-[#f8f9fa]">
    <div class="flex items-center justify-center">
      <img src="/public/images/logo.svg" width="250px" alt="" />
    </div>
    <div class="flex items-center justify-center gap-2">
      <button
        @click="toggleRecruiter()"
        class="px-6 py-2 xl:px-[30px] xl:py-[14px] xl:font-medium xl:text-[16px] border rounded transition-all duration-300 font-medium"
        :class="recruiter ? 'bg-[#333333] text-white' : 'bg-white text-black'"
      >
        Recruiter?
      </button>
      <button
        @click="toggleCanditate()"
        class="px-6 py-2 xl:px-[30px] xl:py-[14px] xl:font-medium xl:text-[16px] border rounded transition-all duration-300 font-medium"
        :class="canditate ? 'bg-[#333333] text-white' : 'bg-white text-black'"
      >
        Canditate?
      </button>
    </div>

    <!-- Recruiter -->
    <div
      v-if="recruiter"
      class="max-w-[700px] flex flex-col items-center gap-7 mx-auto p-10 rounded-lg shadow-xl border bg-[#ffffff90]"
    >
      <h3 class="text-[35px] text-[#2c3038] text-center font-light">
        If you are a Recruiter, Apply here
      </h3>
      <form action="#" class="flex flex-col w-full gap-5">
        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Your Full Name :</label
          >
          <input
            type="text"
            placeholder="Enter your full name"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>
        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Email Address :</label
          >
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>

        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Create Password :</label
          >
          <input
            type="password"
            placeholder="Enter your password"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>
      </form>
      <NuxtLink to="/">
        <button
          class="px-[30px] py-[10px] border-white bg-[#2966f4] text-white leading-[25px] rounded"
        >
          Register Now
        </button>
      </NuxtLink>
    </div>

    <!-- Canditate -->
    <div
      v-if="canditate"
      class="max-w-[700px] flex flex-col items-center gap-7 mx-auto p-10 rounded-lg shadow-xl border bg-[#ffffff90]"
    >
      <h3 class="text-[35px] text-[#2c3038] text-center font-light">
        If you are a Canditate, Apply here
      </h3>
      <form action="#" class="flex flex-col w-full gap-5">
        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Your Full Name :</label
          >
          <input
            type="text"
            placeholder="Enter your full name"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>
        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Email Address :</label
          >
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>

        <div class="grid grid-row-[135px_1fr] gap-[10px] items-center">
          <label for="#" class="text-[16px] font-semibold text-[#2c3038]"
            >Create Password :</label
          >
          <input
            type="password"
            placeholder="Enter your password"
            class="bg-[#fff] text-[#333] border border-[#ccc] py-[15px] px-[20px] rounded outline-none"
          />
        </div>
      </form>
      <NuxtLink to="/">
        <button
          class="px-[30px] py-[10px] border-white bg-[#2966f4] text-white leading-[25px] rounded"
        >
          Register Now
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recruiter: true,
      canditate: false,
    };
  },
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
  methods: {
    toggleRecruiter() {
      this.recruiter = true;
      this.canditate = false;
    },
    toggleCanditate() {
      this.canditate = true;
      this.recruiter = false;
    },
  },
};
</script>
