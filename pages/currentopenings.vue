<template>
  <div>
    <!-- Featured Jobs Section -->
    <section class="mt-[70px] flex flex-col items-center gap-1.5">
      <section class="w-full px-4 py-10 text-center">
        <h2 class="mb-2 text-3xl xl:text-[35px] font-bold text-gray-800">
          Featured Jobs
        </h2>
        <div class="w-20 h-[2px] xl:w-32 bg-[#2966f4] mx-auto mb-6"></div>

        <!-- Search -->
        <div
          class="md:flex md:flex-row flex flex-col items-center justify-center gap-4 mb-8 max-w-[1100px] mx-auto"
        >
          <div class="relative md:w-[400px] w-auto">
            <span
              class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            >
              <img src="/public/dash/search.png" alt="search" class="w-5 h-5" />
            </span>
            <input
              type="text"
              v-model="search"
              placeholder="Search..."
              class="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <select
              v-model="category"
              class="px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Select Category" disabled selected class="">
                Select Category
              </option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Graphic Designer</option>
              <option>Full Stack Developers</option>
            </select>
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
              class="w-[288px] lg:w-[768px] md:w-[600px] xl:w-[1009px] 2xl:max-w-[1920px] md:h-auto lg:py-[40px] lg:px-[30px] text-left bg-white border-2 rounded shadow xl:py-[40px] border-l-[#2966f4] py-[30px] px-[15px] md:px-[10px]"
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
                  <NuxtLink to="/jobview">
                    <button
                      class="md:px-[25px] md:py-[12px] px-5 py-3 text-[#2966f4] border border-[#2966f4] rounded hover:bg-[#2966f4] hover:text-white text-[16px] leading-[24px] underline transform transition-all duration-500 ease-in-out"
                    >
                      Apply Now
                    </button>
                  </NuxtLink>
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
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: "Select Category",
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
