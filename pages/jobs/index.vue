<template>
  <div class="w-full max-w-3xl mx-auto mt-32">
    <div class="flex flex-col items-center gap-3 my-5 md:flex md:flex-row">
      <div class="relative flex items-center w-3/4">
        <span class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">
          <img src="/public/dash/search.png" alt="search" class="w-5 h-5" />
        </span>
        <input type="text" v-model="search" placeholder="Search..."
          class="w-full py-2 pl-10 pr-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]" />
      </div>
      <div>
        <select v-model="categorys"
          class="p-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]">
          <option value="category">Select Category</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Graphic Designer</option>
        </select>
      </div>
    </div>

    <div v-if="jobs!==null" class="flex flex-col w-full gap-5 px-4">
      <div v-for="job in jobs" :key="job.title" class="p-4 bg-white border border-slate-200 rounded-xl">
       <NuxtLink :to="`/jobs/${job.id}`">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-semibold text-gray-900 text-md">
              {{ job.title }}
            </h2>

            <div class="mt-2 text-md text-gray-600">{{ job.recruiter.name }}</div>
          </div>
          <img :src="job.recruiter.profile" alt="Logo" class="object-contain rounded-full w-14 h-14" />
        </div>
        <div class="flex flex-wrap gap-4 mt-2 text-md text-gray-600">
          <div class="flex gap-2 items-center"><img src="/public/icons/experience.svg" class="w-5 h-5" alt=""> {{
            job.experience }}</div>
          
            <div class="flex gap-2 items-center"><img src="/public/icons/work-mode.svg" class="w-5 h-5" alt=""> {{
              job.work_mode }}</div>
               <div class="flex gap-2 items-center"><img src="/public/icons/location.svg" class="w-5 h-5" alt=""> {{
              job.location }}</div>
          
        </div>
        <p class="mt-2 text-md text-gray-700 line-clamp-1">
          {{ job.description }}
        </p>
        <div class="mt-2 text-sm text-gray-600">{{
              job.created_at }}</div>
       </NuxtLink> 
      </div>
    </div>
    <div v-else class="flex h-screen justify-center items-center">
      <div class="flex flex-col h-1/2 items-center">
        <div class="w-8 h-8 animate-spin  border-[#086BD8] border-3 rounded-full border-r-gray-400">
        </div>
        <p class="text-lg mt-4 text-center">We getting the Jobs Details for You</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorys: "category",
      search: "",
      jobs: [
      {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute",
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
      {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute",
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
      {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute",
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
      {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute",
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
      {
        "id": "fda740fa-7169-4570-9853-50332e31c8a1",
        "user_id": "40dc0f09-6afa-49e8-8b23-408158faad26",
        "title": "Developer",
        "description": "In general, \"data\" refers to a collection of facts and figures, or information, often used for reasoning, discussion, or calculations. It can be anything from numerical data to descriptive information, and it's often organized into tables, graphs, or other structured formats for analysis. In computing, data is information that can be stored and processed by a compute",
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
      }
      ],
    };
  },
  mounted(){
    // this.getJobs()
  },
  methods:{
    async getJobs(){
      const response=await this.$apiFetch('/posts')
      this.jobs=response.posts??[]
    }
  }
};
</script>

<style scoped>
.material-icons {
  font-size: 18px;
}
</style>
