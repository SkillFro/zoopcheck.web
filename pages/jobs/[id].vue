<template>
  <div class="xl:max-w-[1120px] w-full mx-auto mt-32 xl:flex xl:flex-row flex flex-col md:items-start gap-[20px]">
    <div v-if="job !== null"
      class="md:max-w-[700px] w-full mx-auto flex flex-col items-center justify-center gap-[16px] px-2">
      <div
        class="bg-white flex flex-col justify-between rounded-xl p-4 md:p-6 border border-slate-200  gap-4 w-full md:max-w-[700px]">
        <!-- Title and Logo -->
        <div class="flex justify-between w-full">
          <div>
            <div class="flex items-start justify-between">
              <div class="flex gap-4">
                <NuxtLink :to="`/recruiter/${job.recruiter.id}`" class="block sm:hidden">
                  <img :src="job.recruiter.profile" alt="recruiter Logo"
                    class="object-cover w-20 h-20 rounded-lg cursor-pointer" />
                </NuxtLink>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900 md:text-xl">
                    {{ job.title }}
                  </h2>
                  <NuxtLink :to="`/recruiter/${job.recruiter.id}`">
                    <p class="mt-1 text-sm text-gray-500">{{ job.recruiter.name }}</p>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Job Info -->
            <div class="flex flex-col gap-1 mt-2 text-md text-gray-600">
              <div class="flex gap-2 items-center"><img src="/public/icons/experience.svg" class="w-4 h-4" alt="">
                <p>minimum {{
                  job.experience }} experience</p>
              </div>

              <div class="flex gap-2 items-center"><img src="/public/icons/work-mode.svg" class="w-4 h-4" alt="">
                <p> {{
                  job.work_mode }}</p>
              </div>
              <div class="flex gap-2 items-center"><img src="/public/icons/users.svg" class="w-4 h-4" alt="">
                <p> {{
                  job.no_of_openings }} Openings</p>
              </div>
              <div class="flex gap-2 items-center"><img src="/public/icons/location.svg" class="w-4 h-4" alt="">
                <p>located
                  in {{
                    job.location }}</p>
              </div>

            </div>
          </div>
          <NuxtLink :to="`/recruiter/${job.recruiter.id}`" class="hidden sm:block">
            <img :src="job.recruiter.profile" alt="recruiter Logo"
              class="object-cover w-20 h-20 rounded-lg cursor-pointer" />
          </NuxtLink>
        </div>
        <div class="flex mt-1 flex-col md:flex-row items-center justify-between w-full gap-4 text-sm">
          <div class="flex flex-col sm:flex-row w-full gap-2 text-gray-500">
            <div class="flex gap-2">Posted: <p class="text-sm font-semibold text-nowrap">{{ job.created_at }}</p></div>
            <!-- <div class="flex gap-2">Openings: <p class="text-sm font-semibold">{{ job.no_of_openings }}</p></div> -->
            <div class="flex gap-2">Applicants: <p class="text-sm font-semibold">{{ job.applications }}</p></div>
          </div>

          <div class="flex w-full gap-2  md:justify-end">
            <button class="px-4 py-1.5 border border-[#086BD8] text-[#086BD8] rounded-md hover:bg-blue-50 transition">
              Register to apply
            </button>
            <button class="px-4 py-1.5 bg-[#086BD8] text-white rounded-md hover:bg-[#086BD8] transition">
              Login to apply
            </button>
          </div>
        </div>
      </div>
      <div class="w-full max-w-3xl p-6  border-slate-200 rounded-xl">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Job description
        </h2>

        <div class=" mb-6  text-gray-700">
          {{ job.description }}
        </div>

        <div class="mb-6 space-y-2 text-sm text-gray-800">
          <!-- <p><strong>Role:</strong> System Administrator / Engineer</p> -->
          <!-- <p><strong>Industry Type:</strong> IT Services & Consulting</p>
          <p><strong>Department:</strong> Engineering - Hardware & Networks</p> -->
          <p class="flex gap-2"><strong>Employment Type:</strong>{{ job.work_mode }}</p>
          <p class="flex gap-2"><strong>Role Category:</strong>{{ job.category }}</p>
        </div>

        <!-- <div class="mb-6 space-y-1 text-sm text-gray-800">
          <p><strong>Education</strong></p>
          <p><strong>UG:</strong> Any Graduate</p>
          <p><strong>PG:</strong> Any Postgraduate</p>
        </div> -->

        <!-- <div class="mb-4">
          <h3 class="mb-2 text-sm font-semibold text-gray-800">Key Skills</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in skills"
              :key="index"
              class="px-3 py-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div> -->
      </div>
    </div>
    <div v-else class="md:max-w-[700px] w-full mx-auto  flex h-screen justify-center items-center">
      <div class="flex flex-col h-1/2 items-center">
        <div class="w-8 h-8 animate-spin  border-[#086BD8] border-3 rounded-full border-r-gray-400">
        </div>
        <p class="text-lg mt-4 text-center">We getting the Job Details for You</p>
      </div>
    </div>
    <div v-if="job !== null" class="xl:max-w-[400px] md:max-w-[684px] w-full px-2 sticky top-32 mx-auto">
      <div class="xl:w-[400px] md:w-[700px] w-full p-4 bg-white border border-gray-200 rounded-xl">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Jobs you might be interested in
        </h2>

        <div v-for="(job, index) in suggestedJobs" :key="index"
          class="flex flex-col gap-3 py-4 border-b border-slate-200 last:border-b-0">
          <div class="flex flex-row items-start gap-5 last:border-b-0">
            <img :src="job.recruiter.profile" class="rounded-lg w-10 h-10 object-cover" alt="">

            <div class="flex-1">
              <h3 class="text-sm font-semibold leading-tight text-gray-800">
                {{ job.title }}
              </h3>
              <p class="w-56 text-xs text-gray-600 truncate">
                {{ job.recruiter.name }}
              </p>
            </div>
          </div>
          <div class="flex items-end justify-between">
           <div class="flex gap-2 justify-center items-center">
            <div class="flex gap-2 items-center ">
                <img src="/public/icons/experience.svg" class="w-4 h-4" alt="">
                <p class="text-xs text-gray-500">{{
                  job.experience }}
                </p>
              </div>
              <div class="flex gap-2 items-center text-xs text-gray-500"><img src="/public/icons/location.svg"
                  class="w-4 h-4" alt="">
                <p class="text-xs text-gray-500">{{
                  job.location }}
                </p>
              </div>
           </div>
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
</template>

<script>

export default {
  data() {
    return {
      job: {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute \n In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute \nIn general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute \nIn general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute \n",
        "no_of_openings": "4",
        "category": "Developer",
        "created_at": "3 days ago",
        "work_mode": "remote",
        "experience": "1",
        "location": "chennai",
        "status": "TRUE",
        "applications": 0,
        "recruiter": {
          "name": "Suresh",
          "id": "40dc0f09-6afa-49e8-8b23-408158faad26",
          "profile": "https://ik.imagekit.io/zoopcheck/profile/myths.jpg2025-04-18T13_56_15_jWGA-ujWI.428Z"
        }
      },
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
    // this.getJobInfo()
  },
  methods: {
    async getJobInfo() {
      const response = await this.$apiFetch(`/recruiter/post/${useRoute().params.id}`)
      this.job = response.post ?? {}
    }
  },
};
</script>
