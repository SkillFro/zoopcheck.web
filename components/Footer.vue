<template>
  <div class="bg-[#000000] opacity 0%">
    <div
      class="flex flex-wrap items-center justify-around gap-2 px-4 mt-3 md:gap-4 md:px-20 md:mt-0"
    >
      <div class="flex md:gap-[70px]">
        <div class="flex flex-col gap-3 md:gap-6">
          <h6 class="text-white md:text-[22px] text-[18px] font-semibold">
            Get In touch
          </h6>
          <p class="text-[#888888] text-[18px]">
            Are you interested in jobs, need to get latest updates and
            information?
          </p>
          <div class="flex gap-0.5">
            <input
              type="text"
              placeholder="Enter Email"
              class="text-[#888888] text-[16px] bg-[#1d1d1d] px-20 p-3"
            />
            <div class="bg-[#2966f4] w-[60px] h-[50px] rounded-sm relative">
              <i
                class="text-white fa fa-paper-plane text-[20px] absolute p-4"
              ></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h6 class="text-white text-[22px] font-semibold">Company</h6>
          <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
            About
          </p>
          <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
            Careers
          </p>
          <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
            Tech Stories
          </p>
          <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
            Contact
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-8">
        <h6 class="text-white text-[22px] font-semibold">Hot Links</h6>
        <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
          Hot Links
        </p>
        <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
          Terms and Conditions
        </p>
        <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
          Privacy Policy
        </p>
        <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
          Recruitment Policy
        </p>
        <p class="text-[#888888] text-[18px] cursor-pointer hover:text-white">
          Legal Notice
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-16">
      <div class="w-[1600px] h-0.5 bg-[#131313]"></div>
      <div class="mt-10 mb-10">
        <p class="text-[#888888] text-[18px]">
          All Rights Reserved © 2023 by ZoopCheck.
        </p>
        <p class="text-[#888888] text-[18px]">
          Designed by
          <span
            class="cursor-pointer underline hover:text-[#2966f4] text-white"
          >
            Spaper Works & Magnil Designs</span
          >
        </p>
      </div>
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
