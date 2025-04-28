<template>
  <section v-if="recruiter !== null" class="px-4 py-8 mx-auto mt-20 max-w-[1080px]">
    <div class="py-6">
      <!-- Header Info -->
      <div class="flex flex- gap-6 md:flex-row items-center justify-">
        <!-- Logo -->
        <img :src="recruiter.profile" alt="Company Logo"
          class="w-20 h-20 border border-slate-300 object- object-center rounded-xl" />
        <div>
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            {{ recruiter.name }}
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
          About {{ recruiter.name }}
        </h2>
        <p class="text-md leading-relaxed text-gray-700">
          {{ recruiter.description }}
        </p>
      </div>
      <div class="bg-white lg:flex-1 border border-slate-200 p-4 rounded-xl w-full">
        <h2 class="mb-2 font-semibold text-gray-900 text-lg">
          Company Hiring for
        </h2>
        <div class="flex flex-col gap-5">
          <div v-for="(job, index) in suggestedJobs" :key="index"
            class="border-b py-4 border-slate-200 last:border-b-0">
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
    <div v-if="jobs !== null">
      <div v-if="jobsection" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center w-full gap-5">
        <div v-for="job in jobs" :key="job.title" class="p-4 bg-white border border-slate-200 rounded-xl  w-full">
          <NuxtLink :to="`/jobs/${job.id}`">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="font-semibold text-gray-900 text-md">
                  {{ job.title }}
                </h2>
                <!-- <div class="mt-2 text-md text-gray-600">{{ job.recruiter.name }}</div> -->
              </div>
              <!-- <img :src="job.recruiter.profile" alt="Logo" class="object-cover rounded-full w-14 h-14" /> -->
            </div>
            <div class="flex flex-wrap gap-4 mt-2 text-md text-gray-600">
              <div class="flex gap-2 items-center">
                <img src="/public/icons/experience.svg" class="w-5 h-5" alt="">
                {{ job.experience }} yrs
              </div>
              <div class="flex gap-2 items-center">
                <img src="/public/icons/work-mode.svg" class="w-5 h-5" alt="">
                {{ job.work_mode }}
              </div>
              <div class="flex gap-2 items-center">
                <img src="/public/icons/location.svg" class="w-5 h-5" alt="">
                {{ job.location }}
              </div>
            </div>
            <p class="mt-2 text-md text-gray-700 line-clamp-1">
              {{ job.description }}
            </p>
            <div class="mt-2 text-sm text-gray-600">
              {{ job.created_at }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div   v-else class="flex h-screen justify-center lg:w-[1080px] items-center">
    <div class="flex flex-col h-1/2 items-center">
      <div class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"></div>
      <!-- <p class="text-sm md:text-lg mt-4 text-center">We're getting the Recruiter details for you</p> -->
    </div>
  </div >
  </section>
  <section v-else class="flex h-screen justify-center items-center">
    <div class="flex flex-col h-1/2 items-center">
      <div class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"></div>
      <p class="text-sm md:text-lg mt-4 text-center">We're getting the Recruiter details for you</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      overviews: true,
      jobsection: false,
      recruiter: null,
      jobs: null,
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
  mounted() {
    this.getRecruiterInfo()
  },
  methods: {
    async getRecruiterInfo() {
      const response = await this.$apiFetch(`/recruiter/profile/${useRoute().params.id}`)
      this.recruiter = response.user ?? {}
    },
    async getJobs() {
      const response = await this.$apiFetch(`/recruiter/${useRoute().params.id}/posts`)
      this.jobs = response.posts ?? {}
    },
    openOverview() {
      this.overviews = true;
      this.jobsection = false;
    },
    openJobs() {
      this.overviews = false;
      this.jobsection = true;
      this.getJobs()
    },
  },
};
</script>
