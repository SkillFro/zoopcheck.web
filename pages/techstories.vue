<template>
  <div class="bg-[#f9f9f9] mt-14 mb-5">
    <div class="relative flex flex-col items-center justify-center">
      <h1
        class="font-semibold md:text-[35px] text-[30px] leading-[24px] text-[#212529] text-center mb-[50px] mt-20"
      >
        Latest blog
      </h1>
      <div
        class="md:w-[180px] w-[120px] bg-[#2966f4] h-0.5 md:-mt-6 -mt-8"
      ></div>
    </div>
    <div class="flex flex-col items-center justify-center gap-2">
      <TechBlog />
    </div>
  </div>
</template>
<script>
import TechBlog from "~/components/TechBlog.vue";

export default {
  data() {
    return {};
  },
};
</script>
