<template>
  <section class="px-2 py-8 mx-auto mt-20 max-w-[1120px]">
    <div class="p-6 rounded-lg">
      <!-- Header Info -->
      <div
        class="flex flex-col gap-6 md:flex-row md:justify-between md:items-center"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
          <!-- Logo -->
          <img
            src="/images/logo.svg"
            alt="Company Logo"
            class="w-20 h-20 md:pb-10 sm:w-24 sm:h-24 rounded-xl"
          />

          <!-- Text Content -->
          <div>
            <!-- Company Name & Rating -->
            <div
              class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
            >
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
                Skillmine Technology
              </h1>
              <div class="flex items-center gap-1 text-sm text-gray-600">
                <span class="text-yellow-500">★</span>
                <span class="font-medium">3.7</span>
                <span class="text-gray-400">(262 reviews)</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-3 lg:w-[500px] w-full">
              <span
                v-for="tag in tags"
                :key="tag"
                class="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right section -->
        <div
          class="flex flex-row items-center justify-center gap-4 mt-4 md:mt-0"
        >
          <span class="text-sm text-gray-500">{{ followers }} followers</span>
          <button
            class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Follow
          </button>
        </div>
      </div>
      <!-- Tabs -->
      <div class="flex gap-6 mt-6 overflow-x-auto border-b border-gray-200">
        <button
          class="pb-2 text-sm font-medium border-b-2 whitespace-nowrap"
          :class="[
            overviews
              ? 'border-black text-black'
              : 'border-transparent text-gray-500',
            'hover:text-black hover:border-black',
          ]"
          @click="openOverview()"
        >
          Overview
        </button>
        <button
          class="pb-2 text-sm font-medium border-b-2 whitespace-nowrap"
          :class="[
            jobsection
              ? 'border-black text-black'
              : 'border-transparent text-gray-500',
            'hover:text-black hover:border-black',
          ]"
          @click="openJobs()"
        >
          Jobs
        </button>
      </div>
    </div>

    <!-- Overview Section -->
    <div v-if="overviews" class="mt-3 space-y-6 max-w-[600px]">
      <!-- About Section -->
      <div class="w-full p-6 bg-white shadow-sm rounded-xl">
        <h2 class="mb-2 font-semibold text-gray-900 text-md">
          About Skillmine Technology
        </h2>
        <p class="text-sm leading-relaxed text-gray-700">
          We are a new generation IT Consulting & Managed Services provider,
          helping our customers to optimize their IT investments, while
          preparing them for the best-in-class operating model, for delivering
          that “competitive edge” in their marketplace.
        </p>
      </div>

      <!-- Departments Section -->
      <div class="w-full p-6 bg-orange-50 rounded-xl">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Departments hiring at Skillmine Technology
        </h2>
        <div class="flex gap-4 pb-2 overflow-x-auto">
          <div
            v-for="dept in department"
            :key="dept.name"
            class="min-w-[180px] bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <h3 class="mb-2 text-sm font-medium text-gray-800">
              {{ dept.name }}
            </h3>
            <NuxtLink
              to="#"
              class="text-sm font-semibold text-blue-600 hover:underline"
            >
              {{ dept.openings }} openings &rsaquo;
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Job section -->
    <div v-if="jobsection" class="flex flex-wrap justify-center w-full gap-5">
      <div
        v-for="job in jobs"
        :key="job.title"
        class="p-4 bg-white shadow-md rounded-xl lg:w-[350px] w-full"
      >
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-semibold text-gray-900 text-md w-[220px]">
              {{ job.title }}
            </h2>

            <div class="mt-2 text-sm text-gray-600">{{ job.role }}</div>
          </div>
          <img
            src="/images/logo.svg"
            alt="TP Logo"
            class="object-contain rounded-full w-14 h-14"
          />
        </div>
        <div class="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span>🧑‍💼 {{ job.experience }}</span>
          <span>📍 {{ job.type }}</span>
          <span>Chennai</span>
        </div>
        <p class="mt-2 text-sm text-gray-700">
          {{ job.dis }}
        </p>
        <div class="flex items-center justify-between">
          <div class="mt-3 text-xs text-gray-400">1 Day Ago</div>
          <NuxtLink to="/jobview"
            ><div class="mt-3 text-xs text-gray-400 cursor-pointer">
              View More
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      overviews: true,
      jobsection: false,
      followers: 242,
      tags: [
        "IT Services & Consulting",
        "Emerging Technologies",
        "Software Product",
        "Mid-size",
      ],
      department: [
        {
          name: "IT & Information Security",
          openings: 23,
        },
        {
          name: "Engineering - Hardware & Networks",
          openings: 14,
        },
        {
          name: "Engineering - Software & QA",
          openings: 8,
        },
        {
          name: "Project & Program Management",
          openings: 4,
        },
      ],
      jobs: [
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
        {
          title: "WFH(Hindi & English) - Customer Support Executive",
          role: "Teleperformance (TP)",
          experience: "0-3 Yrs",
          type: "Remote",
          dis: " Hiring for work from home Work Mode: Work From Home Roles and Respo...",
        },
      ],
    };
  },
  methods: {
    openOverview() {
      this.overviews = true;
      this.jobsection = false;
    },
    openJobs() {
      this.overviews = false;
      this.jobsection = true;
    },
  },
};
</script>
