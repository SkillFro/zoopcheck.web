<template>
  <div>
    <div class="fixed top-0 hidden w-full px-10 py-4 bg-white z- md:block">
      <h1 class="text-3xl font-semibold">Jobs</h1>
    </div>
    <div class="px-8 pt-8 mt-14">
      
      <div
        v-if="successMessage"
        class="p-4 mb-4 text-green-700 bg-green-100 rounded-lg"
      >
        {{ successMessage }}
      </div>

      
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
            class="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
          />
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-4 mt-5 xl:gap-4 xl:mt-0"
        >
          <select
            v-model="category"
            class="p-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
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

      

      <div
        v-if="recruiter"
        class="bg-[#00000095] w-full fixed top-0 z-40 left-0 flex flex-col justify-center items-center h-[100vh] p-2"
      >
        <div
          class="relative p-4 bg-[#ffffff] md:rounded-lg md:p-8 lg:w-[700px] md:w-[690px] w-full flex flex-col gap-10 overflow-y-auto"
        >
          <div class="absolute top-2 right-3">
            <img
              @click="openform()"
              src="/public/images/close.png"
              class="w-[40px] h-[40px] cursor-pointer"
              alt="closeicon"
            />
          </div>
          <div class="flex items-center justify-center">
            <img src="/public/images/logo.svg" alt="logo" class="w-[200px]" />
          </div>
          <div class="flex flex-col gap-3 p-2">
            <div class="flex flex-col w-full gap-2 lg:gap-5">
              <div
                class="flex items-start flex-col gap-[10px] w-full md:w-auto"
              >
                <label class="font-semibold text-[#2c3038]" for="#"
                  >Tittle</label
                >
                <input
                  v-model="formData.title"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Title"
                  class="rounded-md border-[#c0c0c0] border text-[16px] placeholder:text-[#555a64] outline-none p-3 w-full"
                />
              </div>
              <div
                class="flex items-start flex-col gap-[10px] w-full md:w-auto"
              >
                <label class="font-semibold text-[#2c3038]" for="#"
                  >Experience</label
                >
                <input
                  v-model="formData.experience"
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Enter required experience"
                  class="rounded-md border-[#c0c0c0] border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
                />
              </div>

              <div
                class="flex items-start flex-col gap-[10px] w-full md:w-auto"
              >
                <label class="font-semibold text-[#2c3038]" for="#"
                  >Category</label
                >
                <select
                  v-model="formData.category"
                  class="rounded-md border-[#c0c0c0] border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
                >
                  <option value="">Select Category</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Graphic Designer</option>
                </select>
              </div>
              <div
                class="flex items-start flex-col gap-[10px] w-full md:w-auto"
              >
                <label class="font-semibold text-[#2c3038]" for="#"
                  >Work Mode</label
                >
                <select
                  v-model="formData.mode"
                  class="rounded-md border-[#c0c0c0] border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
                >
                  <option value="">Select Work Mode</option>
                  <option>Remote</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div
                class="flex flex-col items-start gap-[10px] w-full md:w-auto"
              >
                <label class="font-semibold text-[#2c3038]" for="#"
                  >Openings</label
                >
                <input
                  v-model="formData.openings"
                  type="number"
                  name="openings"
                  id="openings"
                  placeholder="Enter number of openings"
                  class="rounded-md border-[#c0c0c0] border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
                />
              </div>
              <div
                class="flex items-start flex-col gap-[10px] w-full md:w-auto"
              >
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
                  class="rounded-md border-[#c0c0c0] border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full h-[100px]"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <button
              @click="submitJob()"
              class="py-3 px-6 rounded bg-[#2966f4] text-white w-fit"
              :disabled="loading"
            >
              <span v-if="loading">Processing...</span>
              <span v-else>Submit</span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="loading" class="flex items-center justify-center w-full py-10">
        <div
          class="w-10 h-10 border-t-4 border-[#086BD8] border-solid rounded-full animate-spin"
        ></div>
        <span class="ml-3 font-medium text-[#086BD8]">Loading jobs...</span>
      </div>

      
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
                <nuxt-link :to="`/dashboard/recruiter/job/${job.id}`">
                  <p
                    class="line-clamp-1 text-[16px] leading-[20px] font-normal underline"
                  >
                    {{ job.title }}
                  </p>
                </nuxt-link>
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
      loading: false,
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
      istitle: false,
      isDescription: false,
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
        this.loading = true;

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
      this.loading = false;
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
        this.openform(); // Close the form

        if (response.data && response.data.success) {
          this.successMessage = this.isEditMode
            ? "Job updated successfully!"
            : "Job created successfully!";

          await this.fetchJobs();

          setTimeout(() => {
            this.successMessage = "";
          }, 5000);
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
