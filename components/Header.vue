<template>
  <div
    class="w-full h-[95px] bg-white py-[8px] px-[12px] flex justify-center items-center gap-[282px] fixed top-0"
  >
    <img src="/public/images/logo.jpg" alt="" width="150px" height="53px" />
    <div class="flex items-center gap-[48px]">
      <div class="flex items-center" v-for="nav in navs" :key="nav">
        <p
          class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-8 hover:decoration-[#2966f4] hover:decoration-2 leading-[24px]"
        >
          <NuxtLink :to="nav.path">{{ nav.title }} </NuxtLink>
        </p>
      </div>
      <div class="flex items-center gap-[16px]">
        <button
          class="py-[6px] px-[12px] bg-[#2966f4] text-white text-[16px] rounded-[0.375rem]"
        >
          Submit Resume
        </button>
        <button
          class="py-[6px] px-[12px] bg-[#0a2d52] text-white text-[16px] rounded-[0.375rem]"
        >
          Hire Canditates
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/",
        },
        {
          title: "Current Openings",
          path: "/",
        },
        {
          title: "Tech Stories",
          path: "/",
        },
        {
          title: "Contact",
          path: "/",
        },
      ],
    };
  },
};
</script>
