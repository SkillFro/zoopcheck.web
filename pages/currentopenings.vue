<template>
  <div class="w-full max-w-3xl mx-auto mt-32">
    <div class="flex flex-col items-center gap-3 my-5 md:flex md:flex-row">
      <div class="relative flex items-center w-3/4">
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
          v-model="categorys"
          class="p-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="category">Select Category</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Graphic Designer</option>
        </select>
      </div>
    </div>

    <div class="flex flex-col w-full gap-5 px-4">
      <div
        v-for="job in jobs"
        :key="job.title"
        class="p-4 bg-white shadow-md rounded-xl"
      >
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-semibold text-gray-900 text-md">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorys: "category",
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
};
</script>

<style scoped>
.material-icons {
  font-size: 18px;
}
</style>
