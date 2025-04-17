<template>
  <div class="bg-[#f8f9fa]">
    <!-- Hero Section -->
    <div
      class="bg-[url('/images/hero.jpg')] bg-black/60 mt-24 bg-blend-overlay h-screen md:bg-center bg-no-repeat bg-cover w-full flex flex-col justify-center items-center text-white gap-[45px]"
    >
      <div class="lg:max-w-[1047px] md:max-w-[576px] max-w-[288px]">
        <h2
          class="lg:text-[55px] md:text-[45px] md:leading-[55px] text-[33px] font-light lg:leading-[60px] leading-[42px] text-center"
        >
          Unlocking your career potential <br />
          with ZoopCheck
        </h2>
      </div>
      <div class="lg:max-w-[1047px] md:max-w-[576px] max-w-[288px]">
        <p
          class="md:text-[20px] text-[17px] leading-[25px] text-[#dddddd] text-center"
        >
          ZoopCheck Placement is a company that helps individuals realize their
          full potential <br />
          by providing them with career placement services.
        </p>
      </div>
      <div>
        <NuxtLink to="/auth">
          <button
            class="md:px-[25px] md:py-[12px] px-5 py-3 text-white rounded text-[16px] leading-[24px] bg-[#2966f4]"
          >
            Get Started
          </button>
        </NuxtLink>
      </div>
    </div>

    <!-- Top Companies -->
    <section>
      <div
        class="flex flex-col items-center gap-[50px] md:py-[70px] py-[50px] bg-white"
      >
        <div class="flex flex-col items-center justify-center gap-1.5">
          <h1
            class="text-[#2c3038] md:text-[35px] text-[30px] leading-[45px] md:leading-[40px] font-medium text-center"
          >
            Top Companies Currently Hiring
          </h1>
          <div class="w-[30%] h-[2px] bg-[#2966f4]"></div>
        </div>
        <div
          class="md:max-w-[1080px] 2xl:max-w-[1920px] w-full flex flex-wrap justify-center gap-[20px] p-2 md:p-0"
        >
          <div
            v-for="job in currentOpenings"
            :key="job.title"
            class="md:w-[208px] xl:w-[200px] 2xl:w-[368px] md:h-[144px] w-full h-[165px] rounded-[4px] md:px-[15px] py-[20px] bg-[#eeeeee] border-2 border-transparent hover:bg-white hover:border-2 hover:border-[#eeeeee] relative overflow-hidden hover:shadow px-[20px] 2xl:p-[20px] 2xl:h-[160px]"
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
              class="border rounded-md text-[#0c3561] border-[#2966f4] hover:bg-[#2966f4] w-[88px] h-[34px] hover:text-white"
            >
              View Jobs
            </button>
            <i
              class="absolute right-[-10px] bottom-[-10px] rotate-[-30deg] text-[#999999] text-[60px] font-black opacity-10"
              :class="job.icon ? job.icon : 'fa fa-car'"
            ></i>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="mt-[20px]">
      <div
        class="bg-[url('/images/banner1.jpg')] bg-fixed bg-no-repeat bg-cover h-[298px] md:h-[363px] bg-blend-overlay bg-black/60 z-7"
      >
        <div
          class="md:max-w-[75%] max-w-full h-full flex items-center md:mx-[190px] px-2"
        >
          <div class="md:max-w-[555px] max-w-full">
            <h1
              class="md:text-[40px] text-[27px] leading-[35px] md:leading-[45px] font-light text-white"
            >
              Get your Dream Job Now!
            </h1>
            <p
              class="mt-[10px] text-[16px] leading-[24px] text-[#dddddd] mb-[35px]"
            >
              Over lakhs of openings are available in different industries.
            </p>
            <div class="flex items-center gap-2">
              <button
                class="text-white px-[30px] py-[12px] rounded-[4px] bg-[#2966f4] underline"
              >
                Apply Job
              </button>
              <button
                class="text-white px-[30px] py-[10px] rounded-[4px] bg-transparent border-2 border-white underline"
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why choose us -->
    <section>
      <div
        class="bg-[#ffffff] w-full border flex justify-center items-center p-4 md:p-0"
      >
        <div
          class="lg:flex lg:flex-row lg:items-start lg:justify-center gap-[50px] py-[70px] flex flex-col-reverse md:flex md:flex-col md:justify-center md:items-center"
        >
          <div
            class="md:max-w-[535px] lg:max-w-[364px] xl:max-w-[515px] 2xl:max-w-[760px] lg:max-h-full md:max-h-[444px] max-w-full max-h-full flex flex-col justify-between gap-[30px] lg:gap-[40px] 2xl:gap-[50px]"
          >
            <h3
              class="md:text-[40px] lg:text-[35px] lg:leading-[40px] text-[30px] leading-[35px] md:leading-[45px] text-[#2c3038] font-light"
            >
              Why Choose our ZoopCheck Placement Service?
            </h3>
            <p class="text-[#555a64] text-[16px] leading-[25px] font-normal">
              ZoopCheck Placement offers expertise, personalized approach, an
              extensive network, a supportive environment, and efficiency in its
              career placement services. With years of experience in the
              industry, ZoopCheck Placement provides personalized services
              tailored to individual needs, connecting candidates with
              opportunities that align with their career goals. The company
              offers ongoing support and guidance throughout the job search
              process, from resume preparation to salary negotiations. ZoopCheck
              Placement's goal is to help candidates achieve their career
              aspirations and unlock their full potential
            </p>

            <div>
              <a
                class="bg-[#2966f4] py-[12px] px-[30px] text-white rounded text-center underline"
                href="#"
                ><button>Submit Resume</button></a
              >
            </div>
          </div>
          <div>
            <img
              src="/public/images/blog5.jpg"
              class="md:w-[515px] 2xl:w-[760px] lg:w-[364px] xl:w-[515px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Tech stories -->
    <section class="py-[70px]">
      <div class="flex flex-col items-center gap-1.5 pb-[50px]">
        <h3 class="text-[#2c3038] text-[35px] leading-[40px] font-medium">
          Tech Stories
        </h3>
        <div class="w-[120px] h-[2px] bg-[#2966f4]"></div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="lg:max-w-[1121px] 2xl:max-w-[1920px] max-w-full lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-[30px] md:grid md:grid-cols-2 md:gap-5 grid grid-cols-1 gap-5 2xl:gap-[20px]"
        >
          <div
            v-for="item in cards"
            :key="item"
            class="flex flex-col items-center justify-around p-3 md:p-0"
          >
            <div>
              <img
                :src="item.image"
                alt="image"
                class="md:max-w-[300px] 2xl:max-w-[364px] max-w-full rounded-t-md"
              />
            </div>
            <div
              class="flex gap-3 xl:p-[30px] flex-col rounded-b-md bg-white md:w-[300px] 2xl:w-[364px] w-full p-[30px] shadow"
            >
              <h5 class="text-[#555a64] text-[16px] leading-[25px]">
                {{ item.date }}
              </h5>
              <a
                href="#"
                class="text-[#212529] text-[20px] underline leading-[30px] font-medium"
                >{{ item.link }}</a
              >
              <p class="text-[#555a64] text-[16px] font-medium leading-[25px]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      cards: [
        {
          image: "/tech/blog1.png",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog2.png",
          date: "April 1, 2023.",
          link: "Resume Writing Do's and Don'ts",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog3.png",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
      ],

      currentOpenings: [
        {
          title: "Graphics Designer",
          openings: "3 Openings",
          icon: "fa fa-laptop",
        },
        {
          title: "Video Editor",
          openings: "1 Opening",
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
