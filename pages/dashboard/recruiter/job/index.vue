<template>
  <div>
    <div class="fixed top-0 z-10 hidden w-full px-10 py-4 bg-white md:block">
      <h1 class="text-3xl font-semibold">Jobs</h1>
    </div>
    <div class="px-8 pt-8 mt-14">
      <!-- Success Message -->
      <div
        v-if="successMessage"
        class="p-4 mb-4 text-green-700 bg-green-100 rounded-lg"
      >
        {{ successMessage }}
      </div>

      <!-- Error Message -->
      <div v-if="error" class="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
        {{ error }}
      </div>

      <div class="flex-wrap justify-center xl:p-4 xl:gap-5 xl:flex">
        <div class="relative w-full max-w-5xl">
          <span class="absolute px-2 text-gray-400 top-2.5">
            <img src="/public/dash/search.png" alt="search" class="w-5 h-5" />
          </span>
          <input
            type="text"
            v-model="search"
            placeholder="Search..."
            class="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-4 mt-5 xl:gap-4 xl:mt-0"
        >
          <select
            v-model="category"
            class="p-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Category">Select Category</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Graphic Designer</option>
          </select>

          <div>
            <button
              @click="openform()"
              class="p-1.5 px-3 text-white bg-black rounded-md xl:p-2 xl:px-6"
            >
              +Add Title
            </button>
          </div>
        </div>
      </div>

      <!-- Job Form Modal -->
      <div
        v-if="recruiter"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="relative">
          <div>
            <button
              @click="openform()"
              class="absolute right-0 w-10 h-10 text-xl md:w-20 md:h-20 md:text-3xl md:-top-6 md:-right-5"
            >
              x
            </button>
          </div>

          <div
            class="z-10 max-h-full p-4 mx-auto overflow-auto bg-white rounded-lg md:max-w-6xl md:p-8 maxw-4xl"
          >
            <div class="flex flex-col items-center justify-center gap-3">
              <div>
                <img
                  src="/public/images/logo.svg"
                  alt="logo"
                  class="w-[150px]"
                />
              </div>
              <div class="md:max-w-[500px] mx-auto p-4 mt-4 max-w-[280px]">
                <div v-if="recruiter" class="flex flex-col gap-[10px]">
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Title</label
                    >
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
                      >Description</label
                    >
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
                      >Category</label
                    >
                    <select
                      v-model="formData.category"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    >
                      <option value="">Select Category</option>
                      <option>Developer</option>
                      <option>Designer</option>
                      <option>Graphic Designer</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Work Mode</label
                    >
                    <select
                      v-model="formData.mode"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    >
                      <option value="">Select Work Mode</option>
                      <option value="remote">Remote</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Openings</label
                    >
                    <input
                      v-model="formData.openings"
                      type="number"
                      name="openings"
                      id="openings"
                      placeholder="Enter number of openings"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    />
                  </div>
                  <div class="flex flex-col gap-[10px]">
                    <label class="font-semibold text-[#2c3038]" for="#"
                      >Experience</label
                    >
                    <input
                      v-model="formData.experience"
                      type="text"
                      name="experience"
                      id="experience"
                      placeholder="Enter required experience"
                      class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
                    />
                  </div>

                  <div class="mt-3 xl:px-32 xl:py-8">
                    <button
                      @click="submitJob()"
                      class="p-3 px-6 rounded bg-[#2966f4] text-white w-full"
                      :disabled="loading"
                    >
                      <span v-if="loading">Processing...</span>
                      <span v-else>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Jobs List -->
      <div
        class="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 2xl:max-w-[1360px] max-w-[1000px] mx-auto mt-6 md:mt-6 md:gap-4 lg:gap-6 2xl:grid-cols-3"
      >
        <div
          v-for="(job, index) in filteredJobs"
          :key="job.id"
          class="xl:w-[400px] border border-slate-200 bg-white rounded-2xl xl:px-4 xl:py-6 px-2 py-3 mb-4 relative"
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
                <div class="flex items-center gap-2 md:gap-4">
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

            <p
              @click="toggleJob(index)"
              class="text-[16px] font-bold text-[#666666] text-start cursor-pointer tracking-[2px] rotate-90"
            >
              ...
            </p>
          </div>

          <div
            class="flex flex-wrap items-center justify-between px-12 mt-4 md:gap-4"
          >
            <p
              class="text-[#666666] mt-2 line-clamp-2 text-[16px] leading-[20px] font-normal"
            >
              Applications :
              <span class="text-black">{{ job.applications }}</span>
            </p>
            <p
              class="text-[#666666] line-clamp-2 mt-2 text-[16px] leading-[20px] font-normal"
            >
              {{ new Date(job.created_at).toDateString() }}
            </p>
          </div>

          <div
            v-if="activeIndex === index"
            class="flex flex-col w-[140px] gap-3 px-12 py-4 text-black bg-white border shadow-md absolute top-16 right-0"
          >
            <button
              @click="openform(true, index)"
              class="text-[12px] font-medium hover:bg-[#F2F2F2]"
            >
              Edit
            </button>
            <button
              @click="deleteJob(job.id)"
              class="text-[12px] font-medium hover:bg-[#F2F2F2]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      search: "",
      formData: {
        title: "",
        description: "",
        category: "",
        openings: "",
        experience: "",
        mode: "",
      },
      isEditMode: false,
      isEdit: false,
      isDelete: false,
      activeIndex: null,
      currentJobId: null,
      loading: false,
      jobs: [],
      error: null,
      successMessage: "",
    };
  },
  computed: {
    filteredJobs() {
      let filtered = this.jobs;

      // Filter by search term
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        filtered = filtered.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm) ||
            job.category.toLowerCase().includes(searchTerm)
        );
      }

      // Filter by category
      if (this.category && this.category !== "Category") {
        filtered = filtered.filter((job) => job.category === this.category);
      }

      return filtered;
    },
  },
  async mounted() {
    await this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("accessToken");

        if (!user || !token) {
          throw new Error("Authentication required");
        }

        const response = await axios.get(
          `https://zoopcheck-api.vercel.app/api/recruiter/${user.id}/posts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.posts)) {
          this.jobs = response.data.posts.map((post) => ({
            ...post,
            applications: post.applications ? post.applications.length : 0,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        this.error = "Failed to load jobs. Please try again later.";
      }
    },

    openform(isEdit = false, index = null) {
      this.recruiter = !this.recruiter;
      this.isEditMode = isEdit;
      this.activeIndex = null;
      this.error = null;

      if (!isEdit) {
        // Clear form for Add Mode
        this.formData = {
          title: "",
          description: "",
          category: "",
          openings: "",
          experience: "",
          mode: "", // Add this line
        };
        this.currentJobId = null;
      }

      if (this.recruiter) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      if (isEdit && index !== null) {
        this.prepareEdit(index);
      }
    },

    prepareEdit(index) {
      const job = this.jobs[index];
      this.formData = {
        title: job.title,
        description: job.description,
        category: job.category,
        openings: job.no_of_openings,
        experience: job.experience,
        mode: job.mode, // Add this line
      };
      this.currentJobId = job.id;
    },

    async submitJob() {
      // Basic validation
      if (
        !this.formData.title ||
        !this.formData.description ||
        !this.formData.category
      ) {
        this.error = "Please fill in all required fields";
        return;
      }

      this.loading = true;
      this.error = null;
      this.successMessage = "";

      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("accessToken");

        if (!user || !token) {
          throw new Error("Authentication required");
        }

        const payload = {
          title: this.formData.title,
          description: this.formData.description,
          category: this.formData.category,
          openings: this.formData.openings,
          experience: this.formData.experience,
          mode: this.formData.mode,
        };

        let response;

        if (this.isEditMode && this.currentJobId) {
          // Update existing job
          response = await axios.put(
            `https://zoopcheck-api.vercel.app/api/recruiter/post/${this.currentJobId}`,
            payload,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          // Create new job
          response = await axios.post(
            "https://zoopcheck-api.vercel.app/api/recruiter/post",
            payload,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        }

        if (response.data && response.data.success) {
          this.successMessage = this.isEditMode
            ? "Job updated successfully!"
            : "Job created successfully!";

          await this.fetchJobs();
          this.openform(); // Close the form

          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        } else {
          throw new Error(response.data.message || "Operation failed");
        }
      } catch (error) {
        console.error("Job operation error:", error);
        this.error =
          error.response?.data?.message ||
          error.message ||
          "Operation failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    async deleteJob(jobId) {
      if (!confirm("Are you sure you want to delete this job?")) return;

      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.delete(
          `https://zoopcheck-api.vercel.app/api/recruiter/post/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.success) {
          this.successMessage = "Job deleted successfully!";
          await this.fetchJobs();

          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        } else {
          throw new Error(response.data.message || "Deletion failed");
        }
      } catch (error) {
        console.error("Delete job error:", error);
        this.error =
          error.response?.data?.message ||
          error.message ||
          "Failed to delete job. Please try again.";
      }
    },

    toggleJob(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

    viewJobDetails(jobId) {
      this.$router.push(`/dashboard/recruiter/job/${jobId}`);
    },
  },
};
</script>

<style scoped>
.no-scroll {
  overflow: hidden;
}
</style>
