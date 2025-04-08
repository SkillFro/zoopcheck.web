<template>
  <div class="bg-[#f8f9fa]">
    <div
      class="bg-[url('/images/hero.jpg')] bg-black/60 mt-24 bg-blend-overlay bg-cover bg-no-repeat w-full min-h-[750px] flex flex-col justify-center items-center text-white gap-[47px]"
    >
      <div class="max-w-[1047px]">
        <h2 class="text-[55px] font-light leading-[60px]">
          Unlocking your career potential
        </h2>
        <h2 class="text-[55px] font-light leading-[60px] text-center">
          with ZoopCheck
        </h2>
      </div>
      <div class="max-w-[1047px]">
        <p class="text-[20px] leading-[25px] text-[#dddddd] text-center">
          ZoopCheck Placement is a company that helps individuals realize their
          full potential <br />
          by providing them with career placement services.
        </p>
      </div>
    </div>

    <section>
      <div class="flex flex-col items-center gap-[50px] py-[70px]">
        <div class="flex flex-col items-center justify-center gap-1.5">
          <h1 class="text-[#2c3038] text-[35px] leading-[40px] font-medium">
            Top Companies Currently Hiring
          </h1>
          <div class="w-[30%] h-[2px] bg-[#2966f4]"></div>
        </div>
        <div class="max-w-[1080px] flex items-center gap-[20px]">
          <div
            v-for="job in jobs"
            key="job.title"
            class="w-[208px] h-[144px] rounded-[4px] px-[15px] py-[20px] bg-[#eeeeee] border border-transparent hover:bg-white hover:border-2 hover:border-[#eeeeee] relative overflow-hidden hover:shadow"
          >
            <p
              class="text-[#111111] text-[18px] leading-[27px] font-semibold underline"
            >
              {{ job.title }}
            </p>
            <p
              class="text-[#555a64] text-[16px] leading-[25px] font-normal mb-[16px]"
            >
              {{ job.openings }}
            </p>
            <button
              class="border rounded-md bg-transperant text-[#0c3561] border-[#2966f4] hover:bg-[#2966f4] w-[88px] h-[34px] hover:text-white"
            >
              View Jobs
            </button>
            <i
              class="absolute right-[-10px] bottom-[-10px] rotate-[-30deg] text-[#999999] text-[60px] leading-[60px] font-black opacity-10"
              :class="job.icon ? job.icon : 'fa fa-car '"
            >
            </i>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-[20px]">
      <div
        class="bg-[url('/images/banner1.jpg')] bg-fixed bg-no-repeat bg-cover h-[363px] bg-blend-overlay bg-black/60 z-7"
      >
        <div class="max-w-[75%] h-full flex items-center mx-[190px]">
          <div class="max-w-[555px]">
            <h1
              class="w-full text-[40px] leading-[45px] font-light text-white mb-1px"
            >
              Get you Dream Job Now!
            </h1>
            <p
              class="mt-[10px] text-[16px] leading-[24px] font-normal text-[#dddddd] mb-[35px]"
            >
              Over lakhs of openings are available in different industries.
            </p>
            <div class="flex items-center gap-2">
              <button
                class="text-[16px] text-white px-[30px] py-[12px] rounded-[4px] bg-[#2966f4] underline"
              >
                Apply Job
              </button>
              <button
                class="text-[16px] text-white px-[30px] py-[10px] rounded-[4px] bg-transparent border-2 border-white underline"
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-[200px]"></section>
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
      jobs: [
        {
          title: "Graphics Designer",
          openings: "3 Openings",
          icon: "fa fa-laptop",
        },
        {
          title: "Vedio Editor",
          openings: "1 Openings",
          icon: "fa fa-headphones",
        },
        {
          title: "Content Writer",
          openings: "2 Openings",
          icon: "fa fa-tablet",
        },
        {
          title: "Digital Marketer",
          openings: "2 Openings",
          icon: "fa fa-cogs",
        },
        {
          title: "UX UI Designer",
          openings: "10 Openings",
          icon: "fa fa-car",
        },
      ],
    };
  },
};
</script>
