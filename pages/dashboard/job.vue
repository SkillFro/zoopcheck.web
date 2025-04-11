<template>
  <div>
    <div class="w-full px-10 py-4 bg-white">
      <h1 class="text-3xl font-semibold">Jobs</h1>
    </div>
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
          <button
            @click="openform()"
            class="p-2 px-6 text-white bg-black rounded-md"
          >
            +Add Title
          </button>
        </div>
      </div>
      <div
        v-if="recruiter"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="relative">
          <button
            @click="openform()"
            class="absolute flex justify-center w-8 h-8 text-center text-white bg-red-500 rounded-full -top-2 -left-2"
          >
            X
          </button>

          <div
            class="z-10 max-w-6xl max-h-full p-8 mx-auto overflow-auto bg-white rounded-lg shadow-lg"
          >
            <div class="flex flex-col items-center justify-center gap-3">
              <div>
                <img
                  src="/public/images/logo.svg"
                  alt="logo"
                  class="w-[150px]"
                />
              </div>
              <div class="max-w-[500px] mx-auto border shadow-md p-6 mt-4">
                <div v-if="recruiter" class="flex flex-col gap-[10px]">
                  <div class="flex flex-col gap-[10px]">
                    <button
                      @click="openform()"
                      class="absolute flex justify-center w-8 h-8 text-center text-white bg-red-500 rounded-full -top-2 -left-2"
                    >
                      X
                    </button>
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Title
                    </label>
                    <input
                      v-model="formData.title"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Title"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    />
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Description
                    </label>
                    <textarea
                      v-model="formData.description"
                      name="description"
                      id=""
                      cols=""
                      rows=""
                      placeholder="Enter Your Description"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    ></textarea>
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Category
                    </label>

                    <select
                      v-model="category"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    >
                      <option value="Category">Category</option>
                      <option>Select Category</option>
                      <option>Developer</option>
                      <option>Designer</option>
                      <option>Graphic Designer</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Applications
                    </label>
                    <input
                      v-model="formData.applications"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Applications"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    />
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Experience
                    </label>
                    <input
                      v-model="formData.experience"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Experience"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    />
                  </div>
                  <nuxt-link to="/dashboard">
                    <div class="px-32 py-8">
                      <button
                        class="p-3 rounded bg-[#2966f4] text-white w-full"
                      >
                        Submit
                      </button>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 max-w-[1360px] mx-auto">
        <div
          v-for="job in jobs"
          :key="job"
          class="w-[400px] border border-slate-200 bg-white rounded-2xl px-4 py-6 mb-4 relative"
        >
          <div class="flex items-start justify-around gap-5">
            <div class="flex gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4192/4192708.png"
                alt="profile"
                class="w-8 h-8"
              />
              <div class="flex flex-col items-start justify-center gap-4">
                <p class="line-clamp-1 text-[16px] leading-[20px] font-normal">
                  {{ job.title }}
                </p>
                <p
                  class="text-[#666666] text-[16px] leading-[20px] font-normal line-clamp-2"
                >
                  {{ job.description }}
                </p>
                <div class="flex items-center gap-4">
                  <img
                    class="w-5 h-5"
                    src="https://static.vecteezy.com/system/resources/thumbnails/016/079/159/small/2x2-grid-squares-menu-category-icon-in-line-style-design-isolated-on-white-background-editable-stroke-free-vector.jpg"
                  />
                  <div
                    class="text-[13px] leading-[18px] font-medium text-[#171717]"
                  >
                    {{ job.category }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div> -->
            <p
              @click="toggleJob()"
              class="text-[16px] font-bold text-[#666666] text-start cursor-pointer tracking-[2px] rotate-90"
            >
              ...
            </p>
            <!-- </div> -->
          </div>

          <div class="flex items-center justify-between gap-4 px-12 mt-4">
            <p
              class="text-[#666666] mt-2 line-clamp-2 text-[16px] leading-[20px] font-normal"
            >
              Applications :
              <span class="text-black">{{ job.applications }}</span>
            </p>
            <p
              class="text-[#666666] line-clamp-2 mt-2 text-[16px] leading-[20px] font-normal"
            >
              {{ new Date(job.created_at).toLocaleDateString() }}
            </p>
          </div>
          <!-- <div class="flex items-center justify-end mt-4">
          <p
            class="px-3 py-1 text-[14px] rounded-full outline outline-1 w-fit outline-slate-200"
          >
            View Details
          </p>
        </div> -->
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
      view: false,
      category: "Category",
      recruiter: false,
      signform: false,
      formData: {
        title: "",
        description: "",
        category: "",
        applications: "",
        experience: "",
      },
      jobs: [
        {
          id: "7947eb66-9fe8-4f5b-aa1c-7c2243b893e3",
          user_id: "ee255f5d-294c-4673-86cc-a239d3c751d6",
          title: "Developer Developer Developer ",
          description:
            "Use line-clamp-<number>  multi-line text after a specific number of lines:",
          no_of_openings: "4",
          category: "ghfhfdhfsjfdghhhj",
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
    openform() {
      this.recruiter = !this.recruiter;
      if (this.recruiter) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
  },
};
</script>
