<template>
  <div class="bg-stone-100">
    <div class="fixed top-0 z-10 hidden w-full px-10 py-4 bg-white md:block">
      <h1 class="text-3xl font-semibold">Application</h1>
    </div>
    <!-- <nuxt-link to="/dashboard/recruiter/job">
      <div class="pl-4 mt-24">
        <p
          class="p-2 px-6 font-medium text-white underline bg-blue-600 border rounded-lg cursor-pointer w-28 text-md"
        >
          Go Back
        </p>
      </div>
    </nuxt-link> -->
    <nav aria-label="Breadcrumb">
      <div class="pl-4 mt-24">
        <ol class="flex items-center gap-1 text-lg">
          <li>
            <NuxtLink
              to="/dashboard/recruiter/"
              :class="[
                'block transition-colors',
                $route.path === '/dashboard/recruiter/'
                  ? 'text-[#2966f4] font-semibold'
                  : 'text-stone-500 hover:text-gray-900 dark:hover:text-white',
              ]"
            >
              Home
            </NuxtLink>
          </li>

          <li class="rtl:rotate-180">
            <ChevronIcon />
          </li>
          <img src="/public/dash/arrrow.svg" alt="arrow" />
          <li>
            <NuxtLink
              to="/dashboard/recruiter/job"
              :class="[
                'block transition-colors',
                $route.path === '/dashboard/recruiter/job'
                  ? 'text-[#2966f4] font-semibold'
                  : 'text-stone-500 hover:text-gray-900 dark:hover:text-white',
              ]"
            >
              Job
            </NuxtLink>
          </li>

          <li class="rtl:rotate-180">
            <ChevronIcon />
          </li>
          <img src="/public/dash/arrrow.svg" alt="arrow" />
          <li>
            <NuxtLink
              to="/dashboard/recruiter/profile"
              :class="[
                'block transition-colors',
                $route.path === '/dashboard/recruiter/profile'
                  ? 'text-[#2966f4] font-semibold'
                  : 'text-stone-500 hover:text-gray-900 dark:hover:text-white',
              ]"
            >
              Profile
            </NuxtLink>
          </li>
        </ol>
      </div>
    </nav>
    <div class="">
      <div
        v-for="(applicationList, date) in applications"
        :key="date"
        class="px-10"
      >
        <p class="mt-10 text-lg font-bold">{{ date }}</p>

        <div
          v-for="(application, index) in applicationList"
          :key="index"
          class="flex items-center justify-between px-10 py-4 mt-4 bg-white rounded-md xl:py-4"
        >
          <div class="flex gap-40">
            <div class="flex gap-10">
              <img
                src="/public/dash/user.png"
                alt="profile"
                class="w-10 h-10 rounded-full bg-stone-100"
              />
              <div class="">
                <p class="font-medium text-md">{{ application.name }}</p>
                <p class="mt-2 font-medium text-md text-[#666666]">
                  {{ application.title }}
                </p>
              </div>
            </div>
            <div class="">
              <p class="font-medium text-md text-[#666666]">
                {{ application.remote }}
              </p>
              <p class="mt-2 font-medium text-md text-[#666666]">
                {{ application.online }}
              </p>
            </div>
          </div>
          <button class="px-6 py-2 text-white bg-blue-600 rounded-lg">
            View profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    definePageMeta({
      layout: "secondary",
    });
  },
  data() {
    return {
      applications: {
        "2025-04-03T07:48:40.047Z": [
          {
            date: "2023-10-01",
            name: "John Doe",
            title: "Software Engineer",
            remote: "Remote",
            online: "Online",
          },
          {
            date: "2024-10-02",
            name: "Jane Smith",
            title: "Product Manager",
            remote: "Remote",
            online: "Online",
          },
        ],
        "2025-04-02T07:48:40.047Z": [
          {
            date: "2023-10-01",
            name: "Alice Johnson",
            title: "UX Designer",
            remote: "Remote",
            online: "Online",
          },
          {
            date: "2024-10-02",
            name: "Bob Brown",
            title: "Data Scientist",
            remote: "Remote",
            online: "Online",
          },
        ],
      },
    };
  },
};
</script>
