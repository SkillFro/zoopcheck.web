<template>
  <div class="max-w-[1080px] mx-auto px-4 lg:px-0 mt-32">
    <p class="text-xl font-semibold pb-10">Recruiter Settings</p>
    <div class=" flex gap-20 justify-between">
      <div class="flex flex-col w-[250px] gap-5 overflow-x-auto border-b border-slate-200">
        <NuxtLink v-for="(tab, index) in tabs" :key="index" :to="`/profile?tab=${tab.value}`"
          class="text-left px-5 py-2 rounded-lg cursor-pointer text-lg font-semibold whitespace-nowrap" :class="[
            (selectedTab === tab.value || (selectedTab === 'applications' && tab.value === 'jobs'))
              ? 'bg-[#086BD8] text-white'
              : ' text-gray-800',
            '',
          ]">
          {{ tab.name }}
        </NuxtLink>
      </div>
      <section v-if="selectedTab === 'profile'" class="flex-1">
        <div v-if="user !== null" class="flex flex-col items-center lg:flex-row gap-6 justify-between">
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

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="photo" class="block text-sm/6 font-medium text-gray-900">Comapany Logo</label>
                  <div class="mt-4 w-12 flex items-center gap-x-3">
                    <img class="object-cover rounded-full w-12 h-12" :src="user.profile === ''
                      ? '/public/dash/user.png'
                      : user.profile
                      " alt="" />
                    <label for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-[#086BD8]">
                      <div
                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                        Change
                      </div>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label for="username" class="block text-sm/6 font-medium text-gray-900">Company Name</label>
                  <div class="mt-4">
                    <div
                      class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#086BD8]">
                      <input disabled v-model="user.name" type="text" name="username" id="username"
                        class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="ZoopCheck Privated Limited" />
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
                  <div class="mt-4">
                    <textarea disabled v-model="user.description" name="about" id="about" rows="6"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"></textarea>
                  </div>
                  <p class="mt-3 text-sm/6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div class="mt-4">
                    <input disabled v-model="user.email" id="email" placeholder="hello@zoopcheck.com" name="email"
                      type="email" autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6" />
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm/6 font-medium text-gray-900">Mobile Number</label>
                  <div class="mt-4">
                    <input disabled v-model="user.number" id="email" placeholder="1234567890" name="email" type="text"
                      autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6" />
                  </div>
                </div>
                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm/6 font-medium text-gray-900">company website</label>
                  <div class="mt-4">
                    <input disabled v-model="user.website" id="email" placeholder="https://zoopcheck" name="email"
                      type="text" autocomplete="email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6" />
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
              <button type="button" class="text-sm/6 font-semibold text-gray-900">
                Cancel
              </button>
              <button type="submit"
                class="rounded-md bg-[#086BD8] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#086BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]">
                Save
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex flex-col h-1/2 items-center">
            <div class="w-8 h-8 animate-spin  border-[#086BD8] border-3 rounded-full border-r-gray-400">
            </div>
            <!-- <p class="text-lg mt-4 text-center">We getting the Job Details for You</p> -->
          </div>
        </div>
      </section>
      <section v-if="selectedTab === 'jobs'" class="flex-1 pb-10">
        <div class="flex items-center justify-end mb-5">
          <button @click="openform()" class="p-1.5 px-3 text-white bg-[#086BD8] rounded-md xl:p-2 xl:px-6">
            Add Job
          </button>
        </div>
        <div v-if="openModal"
          class="bg-[#00000095] w-full fixed top-0 z-40 left-0 flex flex-col justify-center items-center h-[100vh] p-2">
          <div
            class="relative p-4 bg-[#ffffff] md:rounded-lg md:p-8 lg:w-[700px] md:w-[690px] w-full flex flex-col gap-10 overflow-y-auto">
            <div class="flex flex-col gap-3 p-2">
              <div class="flex flex-col w-full gap-2 lg:gap-5">
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Tittle</label>
                  <input v-model="formData.title" type="text" name="name" id="name" placeholder="Enter Title"
                    class="rounded-md border-slate-200 border text-[16px] placeholder:text-[#555a64] outline-none p-3 w-full" />
                </div>
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Description</label>
                  <textarea v-model="formData.description" name="description" id="" cols="" rows=""
                    placeholder="Enter Your Description"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full h-[100px]"></textarea>
                </div>
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Experience</label>
                  <input v-model="formData.experience" type="number" name="experience" id="experience"
                    placeholder="Enter required experience"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full" />
                </div>

                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Category</label>
                  <select v-model="formData.category"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full">
                    <option value="">Select Category</option>
                    <option class="text-black" v-for="category in categories" :value="category">{{ category }}</option>
                  </select>
                </div>
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Location</label>
                  <div class="relative w-full">
                    <input type="text" v-model="formData.location" placeholder="Search locations..."
                      class="w-full p-2 pl-8 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
                      @input="handleLocationSearch">
                    <span class="absolute left-2 top-2.5 text-gray-400">
                      <img src="/public/icons/location.svg" class="w-4 h-4" alt="location">
                    </span>
                  </div>
                  <div v-if="locationSuggestions.length" class="mt-2 max-h-48 w-full overflow-y-auto border rounded-md">
                    <div v-for="location in locationSuggestions" :key="location.city"
                      class="p-2 hover:bg-gray-50 cursor-pointer" @click="selectLocation(location)">
                      {{ location.city + ' , ' + location.state + ', ' + location.country }}
                    </div>
                  </div>
                </div>
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Work Mode</label>
                  <select v-model="formData.workMode"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full">
                    <option value="">Select Work Mode</option>
                    <option>Remote</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div class="flex flex-col items-start gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-[#2c3038]" for="#">Openings</label>
                  <input v-model="formData.openings" type="number" name="openings" id="openings"
                    placeholder="Enter number of openings"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full" />
                </div>

              </div>
            </div>
            <div class="flex items-center gap-8 justify-end w-full">
              <button @click="openform" class="py-2 px-4 rounded bg-gray-200 text-gray-900 w-fit">
                <span>Cancel</span>
              </button>
              <button v-if="!isUpdate" @click="createJob()" class="py-2 px-4 rounded bg-[#086BD8] text-white w-fit"
                :disabled="loading">
                <span v-if="loading">Processing...</span>
                <span v-else>Post a Job</span>
              </button>
              <button v-else @click="updateJob()" class="py-2 px-4 rounded bg-[#086BD8] text-white w-fit"
                :disabled="loading">
                <span v-if="loading">Processing...</span>
                <span v-else>Update Job</span>
              </button>
            </div>
          </div>
        </div>
        <div v-if="jobs !== null" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center w- gap-5">
          <div v-for="(job, index) in jobs" :key="index"
            class="p-4 bg-white border border-slate-200 rounded-xl w-full relative">
            <NuxtLink>
              <div class="flex items-start justify-between">
                <div class="flex justify-between items-center w-full">
                  <h2 class="font-semibold text-gray-900 text-md">
                    {{ job.title }}
                  </h2>
                  <p @click="toggle(index)" class="rotate-90 cursor-pointer">
                    ...
                  </p>
                </div>
              </div>
              <div v-if="toggleIndex === index"
                class="bg-white shadow flex flex-col absolute z-10 right-2 p-2 top-10 gap-2 items-end mt-2">
                <p @click="openform(index)" class="cursor-pointer">Edit</p>
                <button :disabled="job.applications === 0" class="disabled:opacity-50 cusror-pointer"
                  @click="() => { useRouter().push(`/profile?tab=applications&id=${job.id}`) }">
                  Applications
                </button>
                <p @click="openDelete(index)" class="text-red-500 cursor-pointer">Delete</p>
              </div>

              <p class="mt-2 text-md text-gray-700 line-clamp-1">
                {{ job.description }}
              </p>
              <div class="mt-2 text-sm text-gray-600 flex justify-between items-center">
                <p>{{ job.created_at }}</p>
                <p>Applications : {{ job.applications }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div v-else class="flex flex-col h-screen items-center">
          <div class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"></div>
          <p class="text-lg mt-4 text-center">
            We getting the Job Details for You
          </p>
        </div>
      </section>
      <section v-if="selectedTab === 'applications' && useAuth().data.value.user.role === 'recruiter'"
        class="flex-1 h-screen">
        <nav aria-label="Breadcrumb">
          <div class="">
            <ol class="flex items-center gap-1 text-sm text-gray-500">
              <li>
                <p class="cursor-pointer">Jobs</p>
              </li>
              <img src="/public/dash/arrrow.svg" alt="arrow" />
              <li>
                <p>
                  <!-- {{jobs.filter((e) => e.id === selectedTab)[0].title ?? ''}} -->
                </p>
              </li>
            </ol>
          </div>
        </nav>
        <div v-for="(applicationList, date) in applications" :key="date" class="mt-5">
          <p class="text-lg font-semibold">
            {{ new Date(date).toDateString() }}
          </p>

          <div v-for="(application, index) in applicationList" :key="index"
            class="flex items-center justify-between px-10 py-4 mt-4 bg-white rounded-md xl:py-4">
            <div class="flex gap-40">
              <div class="flex gap-10">
                <img :src="application.profile" alt="profile" class="w-10 h-10 rounded-full bg-stone-100" />
                <div class="">
                  <p class="font-medium text-md">{{ application.name }}</p>
                  <p class="mt-2 font-medium text-md text-[#666666]">
                    {{ jobTitle }}
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
            <button @click="openApplicationDetails(true,application)" class="px-6 py-2 text-[#086BD8]">
              View
            </button>
          </div>
        </div>
        <div v-if="openModal"
          class="bg-[#00000095] w-full fixed top-0 z-40 left-0 flex flex-col justify-center items-center h-[100vh] p-2">
          <div
            class="relative p-4 bg-[#ffffff] rounded-lg md:p-8 lg:w-[700px] md:w-[690px] w-full flex flex-col gap-10 overflow-y-auto">
            <div class="flex flex-col gap-3 p-2">
              <div class="flex gap-2">
                <img src="/public/icons/experience.svg" class="w-5 h-5" alt="">
                <p class="font- text-[#2c3038]" for="#">Application for <span class="font-semibold">{{ jobTitle }}</span> </p>
              </div>
              <div class="flex flex-col mt-5 w-full gap-2 lg:gap-5">
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-gray-700" for="#">Are you currently employed? (Yes/No)</label>
                  <select v-model="applicationDetails.jobStatus"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full">
                    <option value="">Select your answer</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div class="flex items-start flex-col gap-[10px] w-full md:w-auto">
                  <label class="font-semibold text-gray-700" for="#">How soon can you join if selected?</label>
                  <select v-model="applicationDetails.noticePeriod"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full">
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
                  <label class="font-semibold text-gray-700" for="#">What is your expected salary range?</label>
                  <input v-model="applicationDetails.salary" type="number" name="experience" id="experience"
                    placeholder="Enter in LPA"
                    class="rounded-md border-slate-200 border p-3 text-[16px] placeholder:text-[#555a64] outline-none w-full" />
                </div>
              </div>
            </div>
            <div class="flex items-center gap-8 justify-end w-full">
              <button @click="openApplicationDetails(false)" class="py-2 px-4 rounded bg-gray-200 text-gray-900 w-fit">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section v-if="selectedTab === 'applications' && useAuth().data.value.user.role === 'candidate'"
        class="flex-1 h-screen">
        <div v-for="(application, index) in applications" :key="index"
          class="flex items-center justify-between px-10 py-4 mt-4 bg-white rounded-lg border border-slate-100 xl:py-4">
          <div class="flex gap-40">
            <div class="flex gap-10">
              <img :src="application.recruiter.profile" alt="profile" class="w-10 h-10 rounded-full bg-stone-100" />
              <div class="">
                <p class="font-medium text-md">{{ application.recruiter.name }}</p>
                <p class="mt-2 font-medium text-md text-[#666666]">
                  {{ application.title }}
                </p>
              </div>
            </div>
            <!-- <div class="">
                <p class="font-medium text-md text-[#666666]">
                  {{ application.joinType }}
                </p>
                <p class="mt-2 font-medium text-md text-[#666666]">
                  {{ application.mode }}
                </p>
              </div> -->
          </div>
          <div class="flex flex-col gap-2 items-end">
            <a target="_blank" :href="`jobs/${application.jobId}`" class="text-[#086BD8] text-sm">
              View Job
            </a>
            <p class="text-xs">Recruiter seen : {{ application.viewed ? application.viewedAt : 'Yet' }} </p>
          </div>
        </div>
      </section>
    </div>
    <div v-if="showDelete" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg shadow-lg p-8 z-10 max-w-lg mx-auto overflow-auto max-h-full">
        <div class="flex items-center pb-5">
          <!-- <img class="w-8 h-12" src="/public/icons/cancel.svg" alt="Warn"> -->
          <p class="text-md font-bold px-4">DELETE</p>
        </div>
        <p class="w-full">Are you sure you want to delete <b>{{ title }}</b>? This action cannot be
          undone.</p>
        <div class="flex items-center justify-end pt-5">
          <div class="px-5">
            <button @click="openDelete()" class="py-2 px-4 bg-gray-200 rounded-lg">Cancel</button>
          </div>
          <button @click="deleteJob()" class="py-2 px-4 bg-red-500 text-white rounded-lg">
            <p v-if="!loading">Delete</p>
            <p v-else="loading">Processing...</p>
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
      middleware: 'sidebase-auth'
    })
  },
  data() {
    return {
      route: useRoute(),
      selectedTab: useRoute().query.tab ?? 'profile',
      user: null,
      toggleIndex: null,
      openModel:false,
      applications: {},
      jobs: [],
      tabs: [
        { name: "Profile", value: 'profile' },
        {
          name: useAuth().data.value.user.role === 'recruiter' ? "Jobs" : 'Applications',
          value: useAuth().data.value.user.role === 'recruiter' ? "jobs" : 'applications'
        }
      ],
      openModal: false,
      locationSuggestions: [],
      categories: [],
      locations: [],
      isUpdate: false,
      showDelete: false,
      loading: false,
      deleteIndex: null,
      jobTitle: '',
      formData: {
        title: "",
        description: "",
        category: "",
        openings: "",
        experience: "",
        workMode: "",
        location: "",
      },
      applicationDetails: {
        salary: '',
        noticePeriod: '',
        jobStatus: ''
      }
    };
  },
  mounted() {
    if (useRoute().query.tab === 'profile') {
      this.getUSerInfo();
    }
    if (useRoute().query.tab === 'jobs') {
      this.getJobs();
    }
    if (useRoute().query.tab === 'applications') {
      this.getApplications();
    }
    else {
      this.getUSerInfo()
    }
  },
  watch: {
    $route() {
      this.selectedTab = useRoute().query.tab
      if (useRoute().query.tab === 'profile') {
        this.getUSerInfo();
      }
      if (useRoute().query.tab === 'jobs') {
        this.getJobs();
      }
      if (useRoute().query.tab === 'applications') {
        this.getApplications();
      }
      else {
        this.getUSerInfo()
      }
    }
  },
  methods: {
    toggle(index) {
      this.toggleIndex = this.toggleIndex === index ? null : index;
    },
    openApplicationDetails(value,data){
      this.openModal=value
      console.log(data.jobStatus)
      if(value){
      this.applicationDetails={
        salary: data.salary,
        noticePeriod: data.noticePeriod,
        jobStatus: data.jobStatus
      }
      if(data.viewedAt===null){
        this.$apiFetch(`/recruiter/application/${data.id}`,{method:'PUT'});
      }
    }
    else{
      this.applicationDetails= {
        salary: '',
        noticePeriod: '',
        jobStatus: ''
      }
      
    }
    },
    async getUSerInfo() {
      const response = await this.$apiFetch(`/${useAuth().data.value.user.role}/me`);
      this.user = response.user ?? {};
      if (!this.user.approved) {
        push.info({ title: 'Info', message: "Sorry your account not verified yet !", props: {} })
      }
    },
    async getJobs() {
      const response = await this.$apiFetch(
        `/recruiter/${useAuth().data.value.user.id}/posts`
      );
      this.jobs = response.posts ?? {};
    },
    async getApplications() {
      const response = await this.$apiFetch(useAuth().data.value.user.role === 'recruiter' ?
        `/recruiter/post/${useRoute().query.id}/applications` : `/candidate/applications`
      );
      this.jobTitle = response.title
      this.applications = response.applications ?? [];
    },
    async getCategories() {
      const response = await this.$apiFetch(
        `/categories`
      );
      this.categories = response.categories ?? [];
    },
    async handleLocationSearch() {
      if (this.formData.location.length > 1) {
        try {
          const response = await this.$apiFetch(`/locations?search=${this.formData.location}`);
          this.locationSuggestions = response.locations || [];
        } catch (error) {
          console.error("Error fetching locations:", error);
        }
      } else {
        this.locationSuggestions = [];
      }
    },
    selectLocation(location) {
      this.formData.location = location.city
      this.locationSuggestions = [];

    },
    openform(index) {
      this.toggleIndex = null
      this.openModal = !this.openModal;
      if (this.openModal) {
        console.log(this.jobs[index])
        if (index !== undefined) {
          this.isUpdate = true
          this.formData = {
            id: this.jobs[index].id,
            title: this.jobs[index].title,
            description: this.jobs[index].description,
            category: this.jobs[index].category,
            openings: this.jobs[index].no_of_openings,
            experience: this.jobs[index].experience,
            workMode: this.jobs[index].work_mode,
            location: this.jobs[index].location,
          }
        }
        this.getCategories()
      }
      else {
        this.isUpdate = false
        this.formData = {
          title: "",
          description: "",
          category: "",
          openings: "",
          experience: "",
          workMode: "",
          location: "",
        }
      }
    },
    async createJob() {
      if (this.formData.title === '') {
        push.error({ title: 'Error', message: 'Invalid Title' })
        return
      }
      if (this.formData.description === '') {
        push.error({ title: 'Error', message: 'Invalid description' })
        return
      }
      if (this.formData.openings === '') {
        push.error({ title: 'Error', message: 'Invalid openings' })
        return
      }
      if (this.formData.experience === '') {
        push.error({ title: 'Error', message: 'Invalid experience' })
        return
      }
      if (this.formData.location === '') {
        push.error({ title: 'Error', message: 'Invalid location' })
        return
      }
      if (this.formData.category === '') {
        push.error({ title: 'Error', message: 'Invalid category' })
        return
      }
      if (this.formData.workMode === '') {
        push.error({ title: 'Error', message: 'Invalid workMode' })
        return
      }
      this.loading = true
      const response = await this.$apiFetch(
        `/recruiter/post`,
        {
          method: 'POST',
          body: this.formData
        }
      );
      console.log(response)
      if (response.success) {
        push.success({ title: 'Success', message: response.message })
        this.openform()
        this.getJobs()
        this.formData = {
          title: "",
          description: "",
          category: "",
          openings: "",
          experience: "",
          workMode: "",
          location: "",
        }
      }
      else {
        push.error({ title: 'Error', message: response.message })
      }
      this.loading = false
    },
    async updateJob() {
      if (this.formData.title === '') {
        push.error({ title: 'Error', message: 'Invalid Title' })
        return
      }
      if (this.formData.description === '') {
        push.error({ title: 'Error', message: 'Invalid description' })
        return
      }
      if (this.formData.openings === '') {
        push.error({ title: 'Error', message: 'Invalid openings' })
        return
      }
      if (this.formData.experience === '') {
        push.error({ title: 'Error', message: 'Invalid experience' })
        return
      }
      if (this.formData.location === '') {
        push.error({ title: 'Error', message: 'Invalid location' })
        return
      }
      if (this.formData.category === '') {
        push.error({ title: 'Error', message: 'Invalid category' })
        return
      }
      if (this.formData.workMode === '') {
        push.error({ title: 'Error', message: 'Invalid workMode' })
        return
      }
      this.loading = true
      const response = await this.$apiFetch(
        `/recruiter/post/${this.formData.id}`,
        {
          method: 'PUT',
          body: this.formData
        }
      );
      if (response.success) {
        push.success({ title: 'Success', message: response.message })
        this.openform()
        this.getJobs()
        this.formData = {
          title: "",
          description: "",
          category: "",
          openings: "",
          experience: "",
          workMode: "",
          location: "",
        }
      }
      else {
        push.error({ title: 'Error', message: response.message })
      }
      this.loading = false
    },
    openDelete(index) {
      this.toggleIndex = null
      this.showDelete = !this.showDelete
      if (this.showDelete) {
        this.deleteIndex = index
      }
      else {
        this.deleteIndex = null
      }
    },
    async deleteJob() {
      this.loading = true
      const response = await this.$apiFetch(
        `/recruiter/post/${this.jobs[this.deleteIndex].id}`,
        {
          method: 'DELETE',
        }
      );
      if (response.success) {
        push.success({ title: 'Success', message: response.message })
        this.openDelete()
        this.getJobs()
        this.formData = {
          title: "",
          description: "",
          category: "",
          openings: "",
          experience: "",
          workMode: "",
          location: "",
        }
      }
      else {
        push.error({ title: 'Error', message: response.message })
      }
      this.loading = false
    },
  },

};
</script>

<style></style>
