<template>
  <div v-if="job !== null" class="">
    <div
      class="bg-[url('/images/jobview.jpg')] px-4 mt-18 lg:mt-22 bg-center bg-cover bg-black/75 bg-blend-overlay w-full md:h-[348px] flex justify-center items-end py-10"
    >
      <div class="flex w-[1080px] mx-auto justify-between">
        <div class="flex flex-col w-full gap-3">
          <div class="flex flex-col justify-between rounded-xl gap-4 w-full">
            <div class="flex justify-between w-full">
              <div>
                <div class="flex items-start justify-between">
                  <div class="flex gap-4">
                    <NuxtLink
                      :to="`/recruiter/${job.recruiter.id}`"
                      class="block sm:hidden"
                    >
                      <img
                        :src="job.recruiter.profile"
                        alt="recruiter Logo"
                        class="object-cover w-20 h-20 rounded-lg cursor-pointer"
                      />
                    </NuxtLink>
                    <div>
                      <h2 class="text-lg font-semibold text-white md:text-xl">
                        {{ job.title }}
                      </h2>
                      <NuxtLink :to="`/recruiter/${job.recruiter.id}`">
                        <p class="mt-1 text-sm text-gray-200">
                          {{ job.recruiter.name }}
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-1 mt-2 text-md text-gray-200">
                  <div class="flex gap-2 items-center">
                    <img
                      src="/public/icons/experience-white.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p>minimum {{ job.experience }} experience</p>
                  </div>

                  <div class="flex gap-2 items-center">
                    <img
                      src="/public/icons/work-mode-white.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p>{{ job.work_mode }}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                    <img
                      src="/public/icons/users-white.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p>{{ job.no_of_openings }} Openings</p>
                  </div>
                  <div class="flex gap-2 items-center">
                    <img
                      src="/public/icons/location-white.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p>located in {{ job.location }}</p>
                  </div>
                </div>
              </div>
              <NuxtLink
                :to="`/recruiter/${job.recruiter.id}`"
                class="hidden sm:block"
              >
                <img
                  :src="job.recruiter.profile"
                  alt="recruiter Logo"
                  class="object-cover w-20 h-20 rounded-lg cursor-pointer"
                />
              </NuxtLink>
            </div>
            <div
              class="flex mt-1 flex-col md:flex-row items-center justify-between w-full gap-4 text-sm"
            >
              <div class="flex flex-col sm:flex-row w-full gap-2 text-gray-200">
                <div class="flex gap-2">
                  Posted:
                  <p class="text-sm font-semibold text-nowrap">
                    {{ job.created_at }}
                  </p>
                </div>
                <!-- <div class="flex gap-2">Openings: <p class="text-sm font-semibold">{{ job.no_of_openings }}</p></div> -->
                <div class="flex gap-2">
                  Applicants:
                  <p class="text-sm font-semibold">{{ job.applications }}</p>
                </div>
              </div>
              <div
                v-if="useAuthState().status.value !== `authenticated`"
                class="flex w-full gap-2 md:justify-end"
              >
                <nuxt-link
                  to="/signup?role=candidate"
                  class="px-4 py-1.5 border border-[#ffffff] text-[#ffffff] rounded-md cursor-pointer hover:bg-[#086BD8] hover:border-[#086BD8] transition"
                >
                  Register to apply
                </nuxt-link>
                <nuxt-link
                  to="/signin"
                  class="px-4 py-1.5 bg-[#086BD8] text-white rounded-md cursor-pointer hover:bg-[#086BD8] transition"
                >
                  Login to apply
                </nuxt-link>
              </div>
              <div v-else class="flex w-full gap-2 md:justify-end">
                <div
                  v-if="job.applied ?? false"
                  class="flex w-full gap-2 md:justify-end"
                >
                  <button
                    disabled="true"
                    class="px-4 py-1.5 bg-gray-200/20 text-gray-200 cursor-not-allowed rounded-md"
                  >
                    Applied
                  </button>
                </div>
                <button
                  v-else
                  @click="openApplyModal"
                  class="px-4 py-1.5 bg-[#086BD8] text-white rounded-md cursor-pointer hover:bg-[#086BD8] transition"
                >
                  Apply to Job
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-col gap-4">
          <button class="px-[30px] py-[14px] rounded bg-[#2966f4] text-white">
            Apply Now
          </button>
          <button
            class="px-[20px] py-[14px] rounded bg-[#2966f4] text-white flex items-center gap-3"
          >
            <img
              src="/public/images/linkedin.svg"
              class="w-[20px] h-[20px]"
              alt=""
            />
            <span>Apply With Linkedin</span>
          </button>
        </div> -->
      </div>
    </div>
    <div
      class="xl:max-w-[1080px] w-full px-4 mx-auto mt-8 xl:flex xl:flex-row flex flex-col md:items-start gap-[20px]"
    >
      <div
        v-if="job !== null"
        class="md:max-w-[1080px] w-full border-slate-200 rounded-xl mx-auto"
      >
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Job description
        </h2>
        <div class="mb-6 text-gray-700">
          {{ job.description }}
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-800">
          <!-- <p><strong>Role:</strong> System Administrator / Engineer</p> -->
          <!-- <p><strong>Industry Type:</strong> IT Services & Consulting</p>
          <p><strong>Department:</strong> Engineering - Hardware & Networks</p> -->
          <p class="flex gap-2">
            <strong>Employment Type:</strong>{{ job.work_mode }}
          </p>
          <p class="flex gap-2">
            <strong>Role Category:</strong>{{ job.category }}
          </p>
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
      <div
        v-else
        class="md:max-w-[700px] w-full mx-auto flex h-screen justify-center items-center"
      >
        <div class="flex flex-col h-1/2 items-center">
          <div
            class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
          ></div>
          <p class="text-lg mt-4 text-center">
            We getting the Job Details for You
          </p>
        </div>
      </div>
      <div
        v-if="job !== null"
        class="xl:max-w-[400px] w-full sticky top-32 mx-auto"
      >
        <div
          class="xl:w-[400px] md:w-[] w-full p-4 bg-white border border-gray-200 rounded-xl"
        >
          <h2 class="mb-4 text-lg font-semibold text-gray-800">
            Jobs you might be interested in
          </h2>

          <div
            v-for="(job, index) in suggestedJobs"
            :key="index"
            class="border-b py-4 border-slate-200 last:border-b-0"
          >
            <div class="flex items-start gap-5">
              <img
                :src="job.recruiter.profile"
                class="rounded-lg w-20 h-20 object-cover"
                alt=""
              />

              <div class="">
                <h3 class="text-md font-semibold text-gray-800">
                  {{ job.title }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ job.recruiter.name }}
                </p>
                <div class="flex gap-2 mt-4 w-fit justify-start items-center">
                  <div class="flex gap-2 items-center">
                    <img
                      src="/public/icons/experience.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p class="text-sm text-gray-500">{{ job.experience }}</p>
                  </div>
                  <div class="flex gap-2 items-center text-xs text-gray-500">
                    <img
                      src="/public/icons/location.svg"
                      class="w-4 h-4"
                      alt=""
                    />
                    <p class="text-sm text-gray-500">{{ job.location }}</p>
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
  </div>
  <div
    v-else
    class="flex h-screen justify-center w-full lg:w-[1080px] mx-auto items-center"
  >
    <div class="flex flex-col h-1/2 items-center">
      <div
        class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
      ></div>
      <p class="text-lg mt-4 text-center">We getting the Job Details for You</p>
    </div>
  </div>
  <div
    v-if="openModal"
    class="bg-[#00000095] w-full fixed top-0 z-40 left-0 flex flex-col justify-center items-center h-[100vh] p-2"
  >
    <div
      class="relative p-4 bg-[#ffffff] rounded-lg md:p-8 lg:w-[700px] md:w-[690px] w-full flex flex-col gap-10 overflow-y-auto"
    >
      <div class="flex flex-col gap-3 p-2">
        <div class="flex gap-2">
          <img src="/public/icons/experience.svg" class="w-5 h-5" alt="" />
          <p class="font- text-[#2c3038]" for="#">
            Apply to <span class="font-semibold">{{ job.title }}</span>
          </p>
        </div>
        <div class="flex flex-col mt-5 w-full gap-2 lg:gap-5">
          <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
            <label class="font-semibold text-gray-700" for="#"
              >Are you currently employed? (Yes/No)</label
            >
            <select
              v-model="formData.jobStatus"
              class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
            >
              <option value="">Select your answer</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
            <label class="font-semibold text-gray-700" for="#"
              >How soon can you join if selected?</label
            >
            <select
              v-model="formData.noticePeriod"
              class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
            >
              <option value="">Select One</option>
              <option>Immediate Joining</option>
              <option>15 Days</option>
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
              <option>Negotiable</option>
              <option>Serving Notice Period</option>
            </select>
          </div>
          <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
            <label class="font-semibold text-gray-700" for="#"
              >What is your expected salary range?</label
            >
            <input
              v-model="formData.salary"
              type="number"
              name="experience"
              id="experience"
              placeholder="Enter in LPA"
              class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-8 justify-end w-full">
        <button
          @click="openApplyModal"
          class="py-2 px-4 rounded bg-gray-200 text-gray-900 w-fit"
        >
          <span>Cancel</span>
        </button>
        <button
          @click="apply()"
          class="py-2 px-4 rounded bg-[#086BD8] text-white w-fit"
          :disabled="loading"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>Apply</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: null,
      openModal: false,
      loading: false,
      formData: {
        salary: "",
        noticePeriod: "",
        jobStatus: "",
      },
      suggestedJobs: [
        {
          title: "Firewall Security Engineer",
          work_mode: "remote",
          location: "Pune",
          created_at: "8 days ago",
          experience: "1-3 yrs",

          recruiter: {
            name: "Suresh",
            id: "40dc0f09-6afa-49e8-8b23-408158faad26",
            profile:
              "https://ik.imagekit.io/zoopcheck/profile/myths.jpg2025-04-18T13_56_15_jWGA-ujWI.428Z",
          },
        },
        {
          title: "Network Security Engineer",
          work_mode: "remote",
          location: "Pune",
          created_at: "29 days ago",
          experience: "1-3 yrs",

          recruiter: {
            name: "Suresh",
            id: "40dc0f09-6afa-49e8-8b23-408158faad26",
            profile:
              "https://ik.imagekit.io/zoopcheck/profile/myths.jpg2025-04-18T13_56_15_jWGA-ujWI.428Z",
          },
        },
      ],
    };
  },
  mounted() {
    this.getJobInfo();
  },
  methods: {
    async getJobInfo() {
      const response = await this.$apiFetch(`/post/${useRoute().params.id}`);
      this.job = response.post ?? {};
    },
    openApplyModal() {
      this.openModal = !this.openModal;
    },
    async apply() {
      if (this.formData.jobStatus === "") {
        push.error({ title: "Error", message: "Invalid Job Status" });
        return;
      }
      if (this.formData.noticePeriod === "") {
        push.error({ title: "Error", message: "Invalid Notice Period" });
        return;
      }
      if (this.formData.salary === "") {
        push.error({ title: "Error", message: "Invalid Salary value" });
        return;
      }
      this.loading = true;
      const response = await this.$apiFetch(
        `/candidate/apply/${useRoute().params.id}`,
        {
          method: "POST",
          body: this.formData,
        }
      );
      if (response.success) {
        push.success({
          title: "Success",
          message: "You successfull Applied !",
        });
        this.openApplyModal();
        this.getJobInfo();
      } else {
        push.error({ title: "Error", message: response.message });
      }
      this.loading = false;
    },
  },
};
</script>
