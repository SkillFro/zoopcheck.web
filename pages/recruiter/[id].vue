<template>
  <section class="px-4 py-8 mx-auto mt-20 max-w-[1080px]">
    <div class="py-6">
      <!-- Header Info -->
      <div class="flex flex- gap-6 md:flex-row items-center justify-">
        <!-- Logo -->
        <img src="/public/images/logo.svg" alt="Company Logo" class="w-20 h-20 border border-slate-300 object- object-center rounded-xl" />
        <div>
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            Skillmine Technology
          </h1>
        </div>
      </div>
      <!-- Tabs -->
      <div class="flex gap-6 mt-6 overflow-x-auto border-b border-slate-200">
        <button class="pb-2 text-lg font-semibold border-b-2 whitespace-nowrap" :class="[
          overviews
            ? 'border-black text-black'
            : 'border-transparent text-gray-500',
          'hover:text-black hover:border-black',
        ]" @click="openOverview()">
          Overview
        </button>
        <button class="pb-2 text-lg font-semibold border-b-2 whitespace-nowrap" :class="[
          jobsection
            ? 'border-black text-black'
            : 'border-transparent text-gray-500',
          'hover:text-black hover:border-black',
        ]" @click="openJobs()">
          Jobs
        </button>
      </div>
    </div>

    <!-- Overview Section -->
    <div v-if="overviews" class="flex flex-col md:flex-row max-w-[1080px]">
      <!-- About Section -->
      <div class="w-full  lg:flex-2 bg  md:max-w-[700px]">
        <h2 class="mb-2 font-semibold text-gray-900 text-lg">
          About Skillmine Technology
        </h2>
        <p class="text-md leading-relaxed text-gray-700">
          We are a new generation IT Consulting & Managed Services provider,
          helping our customers to optimize their IT investments, while
          preparing them for the best-in-class operating model, for delivering
          that “competitive edge” in their marketplace.
        </p>
      </div>
      <div class="bg-white lg:flex-1 border border-slate-200 p-4 rounded-xl w-full">
        <h2 class="mb-2 font-semibold text-gray-900 text-lg">
          Company Hiring for
        </h2>
        <div class="flex flex-col gap-5">
          <div v-for="(job, index) in suggestedJobs" :key="index" class="border-b py-4 border-slate-200 last:border-b-0">
            <div class="flex items-start gap-5">
              <img :src="job.recruiter.profile" class="rounded-lg w-20 h-20 object-cover" alt="">

              <div class="">
                <h3 class="text-md font-semibold text-gray-800">
                  {{ job.title }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ job.recruiter.name }}
                </p>
                <div class="flex gap-2 mt-4 w-fit justify-start items-center">
                  <div class="flex gap-2 items-center ">
                    <img src="/public/icons/experience.svg" class="w-4 h-4" alt="">
                    <p class="text-sm text-gray-500">{{
                      job.experience }}
                    </p>
                  </div>
                  <div class="flex gap-2 items-center text-xs text-gray-500"><img src="/public/icons/location.svg"
                      class="w-4 h-4" alt="">
                    <p class="text-sm text-gray-500">{{
                      job.location }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-end mt-2 md:justify-end">
              <div>
                <p class="text-xs text-gray-400">
                  {{ job.created_at }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Job section -->
    <div v-if="jobsection" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-full gap-5">
      <div v-for="job in jobs" :key="job.title" class="p-4 bg-white shadow-md rounded-xl lg:w-[350px] w-full">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-semibold text-gray-900 text-md w-[220px]">
              {{ job.title }}
            </h2>

            <div class="mt-2 text-sm text-gray-600">{{ job.role }}</div>
          </div>
          <img src="/public/images/logo.svg" alt="TP Logo" class="object-contain rounded-full w-14 h-14" />
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
          <NuxtLink to="/jobview">
            <div class="mt-3 text-xs text-gray-400 cursor-pointer">
              View More
            </div>
          </NuxtLink>
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
      suggestedJobs: [
        {
          title: "Firewall Security Engineer",
          "work_mode": "remote",
          location: "Pune",
          created_at: "8 days ago",
          "experience": "1-3 yrs",

          recruiter: {
            "name": "Suresh",
            "id": "40dc0f09-6afa-49e8-8b23-408158faad26",
            "profile": "https://ik.imagekit.io/zoopcheck/profile/myths.jpg2025-04-18T13_56_15_jWGA-ujWI.428Z"
          }
        },
        {
          title: "Network Security Engineer",
          "work_mode": "remote",
          location: "Pune",
          created_at: "29 days ago",
          "experience": "1-3 yrs",

          recruiter: {
            "name": "Suresh",
            "id": "40dc0f09-6afa-49e8-8b23-408158faad26",
            "profile": "https://ik.imagekit.io/zoopcheck/profile/myths.jpg2025-04-18T13_56_15_jWGA-ujWI.428Z"
          }
        },]
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
