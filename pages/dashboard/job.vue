<template>
  <div class="px-8 pt-8">
    <div class="flex justify-center gap-5 p-4">
      <div class="relative w-full max-w-5xl">
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

      <select
        v-model="category"
        class="p-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Category">Category</option>
        <option>Select Category</option>
        <option>Developer</option>
        <option>Designer</option>
        <option>Graphic Designer</option>
      </select>

      <div>
        <button class="p-2 px-6 text-white bg-black rounded-md">
          +Add Title
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1360px] mx-auto">
      <div
        v-for="job in jobs"
        :key="job"
        class="w-[400px] border bg-white rounded-2xl shadow-md px-8 py-4 mb-4 relative"
      >
        <div class="flex justify-around gap-5 p-4">
          <div class="flex gap-2">
            <img src="/public/dash/profile.png" alt="profile" class="w-8 h-8" />
            <div class="flex flex-col items-start justify-center px-4">
              <h1 class="text-clamp-2 text-[16px] leading-[20px] font-normal">
                {{ job.title }}
              </h1>
              <h3
                class="text-[#666666] min-w-min mt-2 text-[16px] leading-[20px] font-normal line-clamp-2"
              >
                {{ job.description }}
              </h3>
            </div>
          </div>
          <div>
            <p
              @click="toggleJob()"
              class="text-[16px] pl-10 text-[#666666] cursor-pointer"
            >
              ...
            </p>
          </div>
        </div>

        <div
          class="p-2.5 bg-[#F2F2F2] w-fit rounded-lg text-[13px] leading-[18px] font-medium text-[#171717]"
        >
          {{ job.category }}
        </div>

        <div class="px-12 mt-4 mb-4">
          <p
            class="text-[#666666] mt-2 line-clamp-2 text-[16px] leading-[20px] font-normal"
          >
            {{ job.applications }}
          </p>
          <p
            class="text-[#666666] line-clamp-2 mt-2 text-[16px] leading-[20px] font-normal"
          >
            {{ new Date(job.created_at).toLocaleDateString() }}
          </p>
        </div>
        <div
          v-if="view"
          class="flex flex-col w-[140px] gap-3 px-12 py-4 text-black bg-white border shadow-md absolute top-16 right-0"
        >
          <button class="text-[12px] font-medium hover:bg-[#F2F2F2]">
            Edit
          </button>
          <button class="text-[12px] font-medium hover:bg-[#F2F2F2]">
            Delete
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
    // const search = ref("");
    // const status = ref("All Statuses");
    // const region = ref("All Regions");
  },
  data() {
    return {
      view: false,
      category: "Category",
      jobs: [
        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer Developer Developer ",
          description:
            "Use line-clamp-<number>  multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "IT",
          created_at: "2025-04-03T07:48:40.047Z",
          work_mode: "remote",
          experience: "2",
          applications: 3,
        },

        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer",
          description:
            "Use line-clamp-<number> utilities like line-clamp-2 and line-clamp-3 to truncate multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "IT",
          created_at: "2025-04-03T07:48:40.047Z",
          work_mode: "remote",
          experience: "2",
          applications: 3,
        },
        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer",
          description:
            "Use line-clamp-<number> utilities like line-clamp-2 and line-clamp-3 to truncate multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "IT",
          created_at: "2025-04-03T07:48:40.047Z",
          work_mode: "remote",
          experience: "2",
          applications: 3,
        },
        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer",
          description:
            "Use line-clamp-<number> utilities like line-clamp-2 and line-clamp-3 to truncate multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "IT",
          created_at: "2025-04-03T07:48:40.047Z",
          work_mode: "remote",
          experience: "2",
          applications: 3,
        },
        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer",
          description:
            "Use line-clamp-<number> utilities like line-clamp-2 and line-clamp-3 to truncate multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "IT",
          created_at: "2025-04-03T07:48:40.047Z",
          work_mode: "remote",
          experience: "2",
          applications: 3,
        },
      ],
    };
  },
  methods: {
    toggleJob() {
      this.view = !this.view;
    },
  },
};
</script>
