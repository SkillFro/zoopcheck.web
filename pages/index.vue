<template>
  <div class="bg-[#f8f9fa]">
    <div @click="arrow()" class="fixed bottom-0 right-0 z-50 m-5">
      <img
        class="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
        src="/public/images/arrow.svg"
        alt=""
      />
    </div>
    <!-- Hero Section -->
    <div
      id="hero"
      class="bg-[url('/images/hero.jpg')] bg-black/60 mt-24 bg-blend-overlay h-screen md:bg-center bg-no-repeat bg-cover w-full xl:h-[750px] flex flex-col justify-center items-center text-white gap-[47px]"
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
            class="md:w-[208px] xl:w-[200px] 2xl:w-[368px] md:h-[144px] w-full h-[165px] rounded-[4px] md:px-[15px] py-[20px] bg-[#eeeeee] border-2 border-transparent hover:bg-white hover:border-2 hover:border-[#eeeeee] relative overflow-hidden hover:shadow px-[20px] 2xl:p-[20px]"
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

    <!-- Featured Jobs Section -->
    <section class="mt-[70px] flex flex-col items-center gap-1.5">
      <section class="w-full px-4 py-10 text-center">
        <h2 class="mb-2 text-3xl xl:text-[35px] font-bold text-gray-800">
          Featured Jobs
        </h2>
        <div class="w-20 h-[2px] xl:w-32 bg-[#2966f4] mx-auto mb-6"></div>

        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <div v-for="tab in tabs" :key="tab.key">
            <button
              @click="
                () => {
                  selectedTab = tab.key;
                }
              "
              class="px-6 py-2 xl:px-[30px] xl:py-[14px] xl:font-medium xl:text-[16px] border rounded transition-all duration-300 font-medium"
              :class="
                selectedTab === tab.key
                  ? 'bg-black text-white'
                  : 'bg-white text-[#333333] hover:bg-[#333333] hover:text-white'
              "
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center gap-6">
          <template
            v-if="filteredJobs[selectedTab] && filteredJobs[selectedTab].length"
            :key="job.id"
          >
            <div
              v-for="job in filteredJobs[selectedTab]"
              :key="job.id"
              class="w-[288px] lg:w-[768px] md:w-[600px] xl:w-[1009px] 2xl:w-[1920px] md:h-auto lg:py-[40px] lg:px-[30px] text-left bg-white border-2 rounded shadow xl:py-[40px] border-l-[#2966f4] py-[30px] px-[15px] md:px-[10px]"
            >
              <div
                class="flex flex-col gap-5 md:flex md:flex-row md:items-start md:justify-between md:px-5"
              >
                <div class="flex gap-4">
                  <div>
                    <img
                      class="w-[45px] h-[45px] bg-contain"
                      src="/public/images/job1.png"
                      alt=""
                    />
                  </div>
                  <div
                    class="flex flex-col items-start justify-between gap-3 md:gap-4"
                  >
                    <div>
                      <h3
                        class="text-[20px] leading-[25px] text-[#2c3038] font-semibold cursor-pointer hover:underline xl:text-[20px] xl:font-semibold xl:leading-[25px] underline"
                      >
                        {{ job.title }}
                      </h3>
                    </div>
                    <div
                      class="xl:gap-4 xl:flex xl:flex-row xl:items-center xl:pt-0 :flex :flex-col :items-start"
                    >
                      <p class="text-[16px] leading-[25px] text-[#555a64]">
                        No. of Openings:
                        <span
                          class="text-[16px] leading-[25px] font-bold text-gray-700"
                          >{{ job.openings }}</span
                        >
                      </p>

                      <p class="text-[16px] leading-[25px] text-[#555a64]">
                        Experience:
                        <span
                          class="text-[16px] leading-[25px] font-bold text-gray-700"
                          >{{ job.experience }}</span
                        >
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="flex items-center gap-1">
                        <img
                          class="w-[16px] h-[16px]"
                          src="/public/images/location.svg"
                          alt=""
                        />
                        <p class="text-[#555a64] text-[16px] leading-[16px]">
                          {{ job.location }}
                        </p>
                      </div>
                      <div class="flex items-center gap-1">
                        <img
                          class="w-[16px] h-[16px]"
                          src="/public/images/work.svg"
                          alt=""
                        />
                        <p class="text-[#555a64] text-[16px] leading-[16px]">
                          {{ job.type }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex justify-center md:items-start gap-8 text-sm text-gray-800 lg:items-center xl:items-start lg:flex lg:flex-row xl:gap-[100px] lg:justify-between"
                >
                  <div class="flex flex-col gap-3">
                    <p class="text-[16px] leading-[24px] text-[#212529]">
                      Job ID:
                      <span
                        class="text-[16px] leading-[24px] text-[#555a64] font-bold"
                        >{{ job.id }}</span
                      >
                    </p>
                    <p class="text-[16px] leading-[24px] text-[#212529]">
                      Date:
                      <span
                        class="text-[16px] leading-[24px] text-[#555a64] font-bold"
                        >{{ job.date }}</span
                      >
                    </p>
                  </div>
                </div>
                <div class="flex justify-center md:p-0">
                  <button
                    class="md:px-[25px] md:py-[12px] px-5 py-3 text-[#2966f4] border border-[#2966f4] rounded hover:bg-[#2966f4] hover:text-white text-[16px] leading-[24px] underline transform transition-all duration-500 ease-in-out"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </template>

          <div
            v-else
            class="w-full p-6 text-left text-gray-700 bg-white border border-red-200 rounded md:max-w-4xl"
          >
            There are currently no open positions matching
            {{ tabs.find((t) => t.key === selectedTab).label }}. Keep in touch —
            we will update shortly.
          </div>
        </div>

        <!-- <div class="flex items-center justify-center">
          <div
            class="bg-white xl:w-[1009px] lg:w-[768px] md:w-[576px] flex items-start justify-between gap-10 px-[30px] py-[40px] md:grid md:grid-cols-2 md:content-between md:gap-[25px]"
          >
            <div class="flex items-start gap-5">
              <div>
                <img
                  src="/public/images/job1.png"
                  class="w-[45px] h-[45px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col items-start">
                <div>
                  <a
                    class="text-[#2c3038] text-[20px] leading-[25px] font-semibold"
                    href="#"
                    >Video Editer</a
                  >
                </div>
                <div class="flex flex-row items-center gap-4">
                  <p>No of openings: <span>2</span></p>
                  <p>Experience: <span>Fresher</span></p>
                </div>
                <div class="flex flex-col gap-5">
                  <div class="flex items-center gap-3">
                    <img
                      src="/public/images/location.svg"
                      class="w-[16px] h-[16px]"
                      alt=""
                    />
                    <p>Chennai</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <img
                      src="/public/images/work.svg"
                      class="w-[16px] h-[16px]"
                      alt=""
                    />
                    <p>Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-3">
                <p>Job id :</p>
                <p>1</p>
              </div>
              <div class="flex items-center gap-3">
                <p>Date</p>
                <p>24-5-2023</p>
              </div>
            </div>
            <div class="flex justify-end w-full">
              <button
                class="px-5 py-3 text-[#2966f4] border border-[#2966f4] rounded hover:bg-[#2966f4] hover:text-white text-[16px] leading-[24px] underline"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div> -->
      </section>
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
            class="md:max-w-[535px] lg:max-w-[364px] xl:max-w-[515px] 2xl:max-w-[935px] lg:max-h-full md:max-h-[444px] max-w-full max-h-full flex flex-col justify-between gap-[30px] lg:gap-[40px] 2xl:gap-[50px]"
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
              class="md:w-[515px] 2xl:w-[760px] lg:w-[364px]"
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
          class="lg:max-w-[1121px] 2xl:max-w-[1920px] max-w-full lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-[30px] md:grid md:grid-cols-2 md:gap-5 grid grid-cols-1 gap-5 2xl:gap-[40px]"
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
                class="md:max-w-[300px] 2xl:max-w-[620px] max-w-full rounded-t-md"
              />
            </div>
            <div
              class="flex gap-3 xl:p-[30px] flex-col rounded-b-md bg-white md:w-[300px] 2xl:w-[620px] w-full p-[30px] shadow"
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
      selectedTab: "all",

      cards: [
        {
          image: "/tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog2.jfif",
          date: "April 1, 2023.",
          link: "Resume Writing Do's and Don'ts",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog3.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
      ],
      tabs: [
        { key: "all", label: "Recent Jobs" },
        { key: "intern", label: "Intern Jobs" },
        { key: "partTime", label: "Partime Jobs" },
      ],

      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          openings: "5 ",
          experience: "2-3 Years",
          location: "Remote",
          type: "intern",
          date: "2023-10-01",
        },
        {
          id: 2,
          title: "Data Analyst",
          openings: "3 ",
          experience: "1-2 Years",
          location: "Onsite",
          type: "intern",
          date: "2023-10-02",
        },
        {
          id: 3,
          title: "Web Developer",
          openings: "4 ",
          experience: "0-1 Year",
          location: "Remote",
          type: "intern",
          date: "2023-10-03",
        },
        {
          id: 4,
          title: "Web Designerr",
          openings: "4",
          experience: "1-2 Year",
          location: "Remote",
          type: "intern",
          date: "2023-10-03",
        },
      ],

      filteredJobs: {
        all: [],
        partTime: [],
        internship: [],
      },

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
  methods: {
    arrow() {
      document.getElementById("hero").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    this.filteredJobs.all = this.jobs;
    this.filteredJobs.partTime = this.jobs.filter(
      (job) => job.type === "partTime"
    );
    this.filteredJobs.intern = this.jobs.filter((job) => job.type === "intern");
  },
};
</script>
