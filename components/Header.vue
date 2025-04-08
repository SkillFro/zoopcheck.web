<template>
  <div class="hidden xl:block">
    <div
      class="w-full h-[95px] bg-white fixed top-0 flex justify-center items-center z-10"
    >
      <div class="max-w-[1296px] flex items-center justify-center gap-[290px]">
        <img src="/public/images/logo.jpg" alt="" width="150px" height="53px" />
        <div class="flex items-center gap-[48px]">
          <div class="flex items-center gap-[16px]">
            <NuxtLink to="/">
              <a
                href=""
                class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              >
                Home
              </a>
            </NuxtLink>
            <NuxtLink to="/about">
              <a
                href=""
                class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              >
                About
              </a>
            </NuxtLink>
            <NuxtLink>
              <a
                href=""
                class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              >
                Current Openings
              </a>
            </NuxtLink>
            <NuxtLink to="/techstories">
              <a
                href=""
                class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              >
                Tech Stories
              </a>
            </NuxtLink>
            <NuxtLink>
              <a
                href=""
                class="hover:text-[#2966f4] text-[#212529] text-[16px] hover:underline hover:underline-offset-[12px] hover:decoration-[#2966f4] hover:decoration-2 leading-[24px] px-2"
              >
                Contact
              </a>
            </NuxtLink>
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
    </div>
  </div>
  <div class="block xl:hidden">
    <div
      class="fixed top-0 z-10 flex items-center justify-between w-full p-5 bg-white lg:px-10"
    >
      <img src="/public/images/logo.jpg" width="150px" height="35px" alt="" />
      <button
        class="px-[12px] rounded-md py-[4px] border border-[#00000026] focus:border-black focus:border-2"
      >
        <span
          ><img src="/public/images/bar.svg" width="30px" height="30px" alt=""
        /></span>
      </button>
    </div>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ],
});
</script>
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
          path: "about",
        },
        {
          title: "Current Openings",
          path: "/",
        },
        {
          title: "Tech Stories",
          path: "techstories",
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
