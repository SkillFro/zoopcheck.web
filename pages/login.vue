<template>
  <div
    class="flex flex-col items-center justify-center gap-10 pt-10 bg-[#f8f9fa]"
  >
    <div>
      <img src="/public/images/logo.svg" width="250px" alt="" />
    </div>
    <div
      class="bg-[#2966f4] flex flex-col md:p-[60px] p-5 gap-7 rounded w-full md:w-[464px] h-auto md:h-[460px]"
    >
      <h4
        class="md:text-[30px] text-[25px] leading-[35px] font-normal text-white"
      >
        Login using email
      </h4>
      <form action="#" method="post" class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            class="w-full rounded p-[12px] text-[16px] border border-[#ccc] placeholder:text-[#555a64] outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="w-full rounded p-[12px] text-[16px] border border-[#ccc] placeholder:text-[#555a64] outline-none"
          />
        </div>
        <div class="flex items-center justify-between">
          <a href="#" class="text-white">forgot password? </a>
          <button
            class="py-[10px] px-[35px] bg-[#333] text-white text-[16px] rounded"
          >
            Login
          </button>
        </div>
      </form>
      <div class="mt-5 text-center">
        <p class="text-[16px] leading-[25px] text-white">
          Don't have an account? <NuxtLink to="/signup">Sign up now</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
};
</script>
