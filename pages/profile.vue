<template>
  <div class="max-w-[1080px] mx-auto px-4 lg:px-0 mt-32">
    <p class="text-xl font-semibold pb-10">Recruiter Settings</p>
    <div class="flex gap-20 justify-between">
      <div
        class="flex flex-col w-[250px] gap-5 overflow-x-auto border-b border-slate-200"
      >
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-left px-5 py-2 rounded-lg cursor-pointer text-lg font-semibold whitespace-nowrap"
          :class="[
            (selectedTab === 0 ? index === 0 : index === 1)
              ? 'bg-[#086BD8] text-white'
              : ' text-gray-800',
            '',
          ]"
          @click="toggleTabs(index)"
        >
          {{ tab }}
        </button>
      </div>
      <section v-if="selectedTab == 0" class="flex-1">
        <div
          class="flex flex-col items-center lg:flex-row gap-6 justify-between"
        >
          <!-- <div>
          <p class="flex-1 text-lg font-semibold">Personal Information</p>
          <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
        </div> -->
          <div class="flex-1 space-y-12">
            <div class="pb-12">
              <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
              <p class="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="col-span-full">
                  <label
                    for="photo"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Comapany Logo</label
                  >
                  <div class="mt-4 w-12 flex items-center gap-x-3">
                    <img
                      class="object-cover rounded-full w-12 h-12"
                      :src="
                        user.profile === ''
                          ? '/public/dash/user.png'
                          : user.profile
                      "
                      alt=""
                    />
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-[#086BD8]"
                    >
                      <div
                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                      >
                        Change
                      </div>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label
                    for="username"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Company Name</label
                  >
                  <div class="mt-4">
                    <div
                      class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#086BD8]"
                    >
                      <input
                        disabled
                        v-model="user.name"
                        type="text"
                        name="username"
                        id="username"
                        class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="ZoopCheck Privated Limited"
                      />
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="about"
                    class="block text-sm/6 font-medium text-gray-900"
                    >About</label
                  >
                  <div class="mt-4">
                    <textarea
                      disabled
                      v-model="user.description"
                      name="about"
                      id="about"
                      rows="6"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
                    ></textarea>
                  </div>
                  <p class="mt-3 text-sm/6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Email address</label
                  >
                  <div class="mt-4">
                    <input
                      disabled
                      v-model="user.email"
                      id="email"
                      placeholder="hello@zoopcheck.com"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Mobile Number</label
                  >
                  <div class="mt-4">
                    <input
                      disabled
                      v-model="user.number"
                      id="email"
                      placeholder="1234567890"
                      name="email"
                      type="text"
                      autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-900"
                    >company website</label
                  >
                  <div class="mt-4">
                    <input
                      disabled
                      v-model="user.website"
                      id="email"
                      placeholder="https://zoopcheck"
                      name="email"
                      type="text"
                      autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"
                    />
                  </div>
                </div>
                <!-- <div class="col-span-full">
                <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Cover photo</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div class="text-center">
                    <svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                      aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clip-rule="evenodd" />
                    </svg>
                    <div class="mt-4 flex text-sm/6 text-gray-600">
                      <label for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-[#086BD8] focus-within:ring-2 focus-within:ring-[#086BD8] focus-within:ring-offset-2 focus-within:outline-hidden hover:text-[#086BD8]">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div> -->
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                class="text-sm/6 font-semibold text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-md bg-[#086BD8] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#086BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
      <section v-if="selectedTab === 1" class="flex-1 pb-10">
        <div class="flex items-center justify-end mb-5">
          <button
            @click="openform()"
            class="p-1.5 px-3 text-white bg-[#086BD8] rounded-md xl:p-2 xl:px-6"
          >
            Add Job
          </button>
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
        <div
          v-if="jobs !== null"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center w- gap-5"
        >
          <div
            v-for="(job, index) in jobs"
            :key="job.title"
            class="p-4 bg-white border border-slate-200 rounded-xl w-full relative"
          >
            <NuxtLink>
              <div class="flex items-start justify-between">
                <div class="flex justify-between items-center w-full">
                  <h2 class="font-semibold text-gray-900 text-md">
                    {{ job.title }}
                  </h2>
                  <p @click="toggle(index)" class="rotate-90 cursor-pointer">
                    ...
                  </p>
                  <!-- <div class="mt-2 text-md text-gray-600">{{ job.recruiter.name }}</div> -->
                </div>
                <!-- <img :src="job.recruiter.profile" alt="Logo" class="object-cover rounded-full w-14 h-14" /> -->
              </div>
              <div
                v-if="toggleIndex === index"
                class="bg-white shadow flex flex-col absolute z-10 right-2 p-2 top-10 gap-2 items-end mt-2"
              >
                <p class="cursor-pointer">Edit</p>
                <button
                  :disabled="job.applications === 0"
                  class="disabled:opacity-50 cusror-pointer"
                  @click="toggleTabs(job.id)"
                >
                  Applications
                </button>
                <p class="text-red-500 cursor-pointer">Delete</p>
              </div>
              <!-- <div class="flex flex-wrap gap-4 mt-2 text-md text-gray-600">
                <div class="flex gap-2 items-center">
                  <img
                    src="/public/icons/experience.svg"
                    class="w-5 h-5"
                    alt=""
                  />
                  {{ job.experience }} yrs
                </div>
                <div class="flex gap-2 items-center">
                  <img
                    src="/public/icons/work-mode.svg"
                    class="w-5 h-5"
                    alt=""
                  />
                  {{ job.work_mode }}
                </div>
                <div class="flex gap-2 items-center">
                  <img
                    src="/public/icons/location.svg"
                    class="w-5 h-5"
                    alt=""
                  />
                  {{ job.location }}
                </div>
              </div> -->
              <p class="mt-2 text-md text-gray-700 line-clamp-1">
                {{ job.description }}
              </p>
              <div
                class="mt-2 text-sm text-gray-600 flex justify-between items-center"
              >
                <p>{{ job.created_at }}</p>
                <p>Applications : {{ job.applications }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div v-else class="flex flex-col h-screen items-center">
          <div
            class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
          ></div>
          <p class="text-lg mt-4 text-center">
            We getting the Job Details for You
          </p>
        </div>
      </section>
      <section v-else class="flex-1 h-screen">
        <nav aria-label="Breadcrumb">
          <div class="">
            <ol class="flex items-center gap-1 text-sm text-gray-500">
              <li>
                <p @click="toggleTabs(1)" class="cursor-pointer">Jobs</p>
              </li>
              <li class="rtl:rotate-180">
                <ChevronIcon />
              </li>
              <img src="/public/dash/arrrow.svg" alt="arrow" />
              <li>
                <p>
                  {{ jobs.filter((e) => e.id === selectedTab)[0].title }}
                </p>
              </li>
            </ol>
          </div>
        </nav>
        <div
          v-for="(applicationList, date) in applications"
          :key="date"
          class="mt-5"
        >
          <p class="text-lg font-semibold">
            {{ new Date(date).toDateString() }}
          </p>

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
                    {{ jobs.filter((e) => e.id === selectedTab)[0].title }}
                  </p>
                </div>
              </div>
              <div class="">
                <p class="font-medium text-md text-[#666666]">
                  {{ application.joinType }}
                </p>
                <p class="mt-2 font-medium text-md text-[#666666]">
                  {{ application.mode }}
                </p>
              </div>
            </div>
            <button class="px-6 py-2 text-white bg-[#086BD8] rounded-lg">
              View profile
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 1,
      user: {},
      toggleIndex: null,
      applications: {},
      jobs: null,
      tabs: ["Profile", "Jobs"],
      recruiter: false,
      formData: {
        title: "",
        description: "",
        category: "",
        openings: "",
        experience: "",
        mode: "",
      },
    };
  },
  mounted() {
    // this.getUSerInfo();
    this.getJobs();
  },
  methods: {
    toggle(index) {
      this.toggleIndex = this.toggleIndex === index ? null : index;
    },
    toggleTabs(index) {
      this.selectedTab = index;
      this.selectedTab === 1
        ? this.getJobs()
        : this.selectedTab !== 0 || this.selectedTab !== 1
        ? this.getApplications()
        : null;
    },
    async getUSerInfo() {
      const response = await this.$apiFetch(`/recruiter/me`);
      this.user = response.user ?? {};
    },
    async getJobs() {
      const response = await this.$apiFetch(
        `/recruiter/${useAuth().data.value.user.id}/posts`
      );
      this.jobs = response.posts ?? {};
    },
    async getApplications() {
      const response = await this.$apiFetch(
        `/recruiter/post/${this.selectedTab}/applications`
      );
      this.applications = response.applications ?? [];
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
  },
};
</script>

<style></style>
