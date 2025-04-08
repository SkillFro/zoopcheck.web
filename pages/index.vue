<template>
  <div class="bg-[#f8f9fa]">
    <!-- Hero Section -->
    <div
      class="bg-[url('/images/hero.jpg')] bg-black/60 mt-24 bg-blend-overlay bg-cover bg-no-repeat w-full min-h-[750px] flex flex-col justify-center items-center text-white gap-[47px]"
    >
      <div class="max-w-[1047px]">
        <h2 class="text-[55px] font-light leading-[60px] text-center">
          Unlocking your career potential <br />
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

    <!-- Top Companies -->
    <section>
      <div class="flex flex-col items-center gap-[50px] py-[70px]">
        <div class="flex flex-col items-center justify-center gap-1.5">
          <h1 class="text-[#2c3038] text-[35px] leading-[40px] font-medium">
            Top Companies Currently Hiring
          </h1>
          <div class="w-[30%] h-[2px] bg-[#2966f4]"></div>
        </div>
        <div class="max-w-[1080px] flex flex-wrap justify-center gap-[20px]">
          <div
            v-for="job in currentOpenings"
            :key="job.title"
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
        class="bg-[url('/images/banner1.jpg')] bg-fixed bg-no-repeat bg-cover h-[363px] bg-blend-overlay bg-black/60 z-7"
      >
        <div class="max-w-[75%] h-full flex items-center mx-[190px]">
          <div class="max-w-[555px]">
            <h1 class="text-[40px] leading-[45px] font-light text-white">
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
        <h2 class="mb-2 text-3xl font-bold text-gray-800">Featured Jobs</h2>
        <div class="w-20 h-[2px] bg-[#2966f4] mx-auto mb-6"></div>

        <!-- Tab Buttons -->
        <div class="flex justify-center gap-4 mb-8">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            @click="selectedTab = tab.key"
            :class="[
              'px-6 py-2 border rounded transition-all duration-300 font-medium',
              selectedTab === tab.key
                ? 'bg-black text-white'
                : 'bg-white text-[#333333] hover:bg-[#333333] hover:text-white',
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Job Cards -->
        <div class="flex flex-col items-center gap-6">
          <template
            v-if="filteredJobs[selectedTab] && filteredJobs[selectedTab].length"
          >
            <div
              v-for="job in filteredJobs[selectedTab]"
              :key="job.id"
              class="w-full max-w-4xl p-6 text-left bg-white border border-red-200 rounded shadow"
            >
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h3
                    class="text-lg font-semibold text-blue-600 cursor-pointer hover:underline"
                  >
                    {{ job.title }}
                  </h3>
                  <p class="text-sm text-gray-700">
                    No. of Openings: <strong>{{ job.openings }}</strong> &nbsp;
                    Experience: <strong>{{ job.experience }}</strong>
                  </p>
                </div>
                <div class="text-sm text-right text-gray-800">
                  <p>
                    Job ID: <strong>{{ job.id }}</strong>
                  </p>
                  <p>
                    Date: <strong>{{ job.date }}</strong>
                  </p>
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <p class="flex items-center gap-2 text-sm text-gray-600">
                  📍 {{ job.location }} &nbsp; 💼 {{ job.type }}
                </p>
                <button
                  class="px-4 py-1 text-[#2966f4] border border-[#2966f4] rounded hover:bg-[#2966f4] hover:text-white"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </template>

          <!-- Empty State -->
          <div
            v-else
            class="w-full max-w-4xl p-6 text-left text-gray-700 bg-white border border-red-200 rounded"
          >
            There are currently no open positions matching
            {{ tabs.find((t) => t.key === selectedTab).label }}. Keep in touch —
            we will update shortly.
          </div>
        </div>
      </section>
    </section>

    <!-- Why choose us -->
    <section>
      <div
        class="bg-[#ffffff] max-w-[1494px] border flex justify-center items-center"
      >
        <div class="flex items-start justify-center gap-[50px] py-[70px]">
          <div
            class="max-w-[535px] max-h-[444px] flex flex-col justify-between gap-[30px]"
          >
            <h3 class="text-[40px] leading-[45px] text-[#2c3038] font-light">
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

            <a
              class="bg-[#2966f4] py-3 text-white rounded max-w-[170px] max-h-[48px] text-center underline"
              href="#"
              >Submit Resume</a
            >
          </div>
          <div>
            <img src="/public/images/blog5.jpg" class="max-w-[500px]" alt="" />
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
        <div class="max-w-[1121px] flex justify-center items-center gap-[30px]">
          <div
            v-for="item in cards"
            :key="item"
            class="flex flex-col items-center justify-around"
          >
            <div>
              <img
                :src="item.image"
                alt="image"
                class="max-w-[300px] px-4 md:px-0 rounded-t-md"
              />
            </div>
            <div
              class="flex gap-3 xl:p-[30px] flex-col rounded-b-md bg-white max-w-[300px] p-[30px] shadow"
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
        { key: "fullTime", label: "Intern Jobs" },
        { key: "partTime", label: "Partime Jobs" },
      ],

      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          openings: "5 Openings",
          experience: "2-3 Years",
          location: "Remote",
          type: "Full Time",
          date: "2023-10-01",
        },
        {
          id: 2,
          title: "Data Analyst",
          openings: "3 Openings",
          experience: "1-2 Years",
          location: "Onsite",
          type: "Part Time",
          date: "2023-10-02",
        },
        {
          id: 3,
          title: "Web Developer",
          openings: "4 Openings",
          experience: "0-1 Year",
          location: "Remote",
          type: "Internship",
          date: "2023-10-03",
        },
      ],

      filteredJobs: {
        all: [],
        fullTime: [],
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
        { title: "UX UI Designer", openings: "10 Openings", icon: "fa fa-car" },
      ],
    };
  },
  created() {
    this.filteredJobs.all = this.jobs;
    this.filteredJobs.fullTime = this.jobs.filter(
      (job) => job.type === "Full Time"
    );
    this.filteredJobs.partTime = this.jobs.filter(
      (job) => job.type === "Part Time"
    );
    this.filteredJobs.internship = this.jobs.filter(
      (job) => job.type === "Internship"
    );
  },
};
</script>
