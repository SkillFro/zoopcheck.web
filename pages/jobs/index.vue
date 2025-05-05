<template>
  <div
    class="w-full max-w-5xl mx-auto mt-20 lg:mt-32 px-4 overflow-y-auto scroll-hide"
    style="max-height: calc(100vh - 150px)"
    ref="scrollContainer"
  >
    <div class="w-full flex items-center gap-2 my-5 relative">
      <div class="relative flex items-center w-full">
        <span
          class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
        >
          <img src="/public/dash/search.png" alt="search" class="w-5 h-5" />
        </span>
        <input
          type="text"
          v-model="search"
          placeholder="Search jobs, locations..."
          class="w-full py-2 pl-10 pr-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
          @input="handleSearch"
        />
      </div>
      <img
        @click="openFilter()"
        src="/public/icons/filter.svg"
        alt="filter"
        class="w-8 h-8 block md:hidden"
      />
    </div>

    <div class="flex flex-col lg:items-start lg:flex-row gap-6">
      <!-- Job List with Infinite Scroll -->
      <div class="w-full lg:w-2/3">
        <div v-if="jobs !== null" class="flex flex-col w-full gap-5">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="p-4 bg-white border border-slate-200 rounded-xl"
          >
            <NuxtLink :to="`/jobs/${job.id}`">
              <div class="flex items-start justify-between">
                <div>
                  <h2 class="font-semibold text-gray-900 text-md">
                    {{ job.title }}
                  </h2>
                  <div class="mt-2 text-md text-gray-600">
                    {{ job.recruiter.name }}
                  </div>
                </div>
                <img
                  :src="job.recruiter.profile"
                  alt="Logo"
                  class="object-cover rounded-full w-14 h-14"
                />
              </div>
              <div class="flex flex-wrap gap-4 mt-2 text-md text-gray-600">
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
              </div>
              <p class="mt-2 text-md text-gray-700 line-clamp-1">
                {{ job.description }}
              </p>
              <div class="mt-2 text-sm text-gray-600">
                {{ job.created_at }}
              </div>
            </NuxtLink>
          </div>

          <!-- Loading Indicator -->
          <div v-if="loadingMore" class="flex justify-center py-4">
            <div
              class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
            ></div>
          </div>

          <!-- End of Results Message -->
          <div v-if="noMoreJobs" class="text-center py-4 text-gray-500">
            No more jobs to load
          </div>
        </div>

        <div
          v-else
          class="flex h-screen justify-center lg:w-[1080px] items-center"
        >
          <div class="flex flex-col h-1/2 items-center">
            <div
              class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
            ></div>
            <p class="text-sm md:text-lg mt-4 text-center">
              We're getting the job details for you
            </p>
          </div>
        </div>
      </div>

      <!-- Filter Sidebar -->
      <div v-if="jobs !== null" class="hidden sticky top-0 lg:block w-full md:w-1/3">
        <div
          class="p-4 bg-white border border-slate-200 rounded-xl sticky top-28"
        >
          <h3 class="font-semibold text-lg mb-4">Filter Jobs</h3>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Work Mode</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="Remote"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">Remote</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="Hybrid"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">Hybrid</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="On-site"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">On-site</span>
              </label>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Experience Level</h4>
            <select
              v-model="filters.experience"
              class="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
              @change="handleFilterChange"
            >
              <option value="">Any Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
              <option value="7+">7+ years</option>
            </select>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Location</h4>
            <div class="relative">
              <input
                type="text"
                v-model="locationSearch"
                placeholder="Search locations..."
                class="w-full p-2 pl-8 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
                @input="handleLocationSearch"
              />
              <span class="absolute left-2 top-2.5 text-gray-400">
                <img
                  src="/public/icons/location.svg"
                  class="w-4 h-4"
                  alt="location"
                />
              </span>
            </div>
            <div
              v-if="locationSuggestions.length"
              class="mt-2 max-h-48 overflow-y-auto border rounded-md"
            >
              <div
                v-for="location in locationSuggestions"
                :key="location.city"
                class="p-2 hover:bg-gray-50 cursor-pointer"
                @click="selectLocation(location)"
              >
                {{
                  location.city +
                  " , " +
                  location.state +
                  ", " +
                  location.country
                }}
              </div>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Date Posted</h4>
            <select
              v-model="filters.datePosted"
              class="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
              @change="handleFilterChange"
            >
              <option value="">Any Time</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="60d">Last 60 days</option>
            </select>
          </div>

          <button
            @click="resetFilters"
            class="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <!-- sm filter section -->
      <div v-if="jobfilters" class="w-full md:w-1/3 absolute top-36 right-0">
        <div class="p-4 bg-white border border-slate-200 rounded-xl">
          <h3 class="font-semibold text-lg mb-4">Filter Jobs</h3>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Work Mode</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="Remote"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">Remote</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="Hybrid"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">Hybrid</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.workMode"
                  value="On-site"
                  class="rounded text-[#086BD8] focus:ring-[#086BD8]"
                  @change="handleFilterChange"
                />
                <span class="ml-2">On-site</span>
              </label>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Experience Level</h4>
            <select
              v-model="filters.experience"
              class="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
              @change="handleFilterChange"
            >
              <option value="">Any Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
              <option value="7+">7+ years</option>
            </select>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Location</h4>
            <div class="relative">
              <input
                type="text"
                v-model="locationSearch"
                placeholder="Search locations..."
                class="w-full p-2 pl-8 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
                @input="handleLocationSearch"
              />
              <span class="absolute left-2 top-2.5 text-gray-400">
                <img
                  src="/public/icons/location.svg"
                  class="w-4 h-4"
                  alt="location"
                />
              </span>
            </div>
            <div
              v-if="locationSuggestions.length"
              class="mt-2 max-h-48 overflow-y-auto border rounded-md"
            >
              <div
                v-for="location in locationSuggestions"
                :key="location.city"
                class="p-2 hover:bg-gray-50 cursor-pointer"
                @click="selectLocation(location)"
              >
                {{
                  location.city +
                  " , " +
                  location.state +
                  ", " +
                  location.country
                }}
              </div>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-sm font-medium mb-2">Date Posted</h4>
            <select
              v-model="filters.datePosted"
              class="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086BD8]"
              @change="handleFilterChange"
            >
              <option value="">Any Time</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="60d">Last 60 days</option>
            </select>
          </div>

          <button
            @click="resetFilters"
            class="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({ layout: "secondary" });
  },
  data() {
    return {
      jobfilters: false,

      categorys: "",
      search: "",
      locationSearch: "",
      filters: {
        workMode: [],
        experience: "",
        location: "",
        datePosted: "",
      },
      locationSuggestions: [],
      jobs: null,
      allLocations: [],
      page: 1,
      limit: 10,
      loadingMore: false,
      noMoreJobs: false,
      totalJobs: 0,
      searchTimer: null,
    };
  },
  methods: {
    async handleSearch() {
      if (this.searchTimer) clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.fetchJobs(true);
      }, 300);
    },
    openFilter() {
      this.jobfilters = !this.jobfilters;
    },

    async handleLocationSearch() {
      if (this.locationSearch.length > 1) {
        try {
          const response = await this.$apiFetch(
            `/locations?search=${this.locationSearch}`
          );
          this.locationSuggestions = response.locations || [];
        } catch (error) {
          console.error("Error fetching locations:", error);
        }
      } else {
        this.locationSuggestions = [];
      }
    },

    selectLocation(location) {
      this.filters.location = location.city;
      this.locationSearch = location.city;
      this.locationSuggestions = [];
      this.fetchJobs(true);
    },

    handleFilterChange() {
      this.fetchJobs(true);
    },

    resetFilters() {
      this.categorys = "";
      this.search = "";
      this.locationSearch = "";
      this.filters = {
        workMode: [],
        experience: "",
        location: "",
        datePosted: "",
      };
      this.fetchJobs(true);
    },

    async fetchJobs(initialLoad = false) {
      if (this.loadingMore) return;

      try {
        this.loadingMore = true;
        if (initialLoad) {
          this.page = 1;
          this.noMoreJobs = false;
        }

        const params = new URLSearchParams();

        if (this.search) params.append("search", this.search);
        if (this.categorys) params.append("category", this.categorys);
        if (this.filters.workMode.length)
          params.append("workMode", this.filters.workMode.join(","));
        if (this.filters.experience)
          params.append("experience", this.filters.experience);
        if (this.filters.location)
          params.append("location", this.filters.location);
        if (this.filters.datePosted)
          params.append("datePosted", this.filters.datePosted);

        params.append("page", this.page);
        params.append("limit", this.limit);

        const response = await this.$apiFetch(`/posts?${params.toString()}`);

        if (initialLoad) {
          this.jobs = response.posts || [];
          this.totalJobs = response.pagination?.totalItems || 0;
        } else {
          this.jobs = [...this.jobs, ...(response.posts || [])];
        }

        this.noMoreJobs =
          response.posts?.length < this.limit ||
          this.jobs.length >= this.totalJobs;

        if (!this.noMoreJobs) {
          this.page++;
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        this.loadingMore = false;
      }
    },

    async fetchAllLocations() {
      try {
        const response = await this.$apiFetch("/locations");
        this.allLocations = response.locations || [];
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    },

    handleScroll() {
      if (this.loadingMore || this.noMoreJobs) return;

      const container = this.$refs.scrollContainer;
      if (!container) return;

      const scrollPosition = container.scrollTop + container.clientHeight;
      const scrollHeight = container.scrollHeight;
      const threshold = 100; // pixels from bottom to trigger load

      if (scrollHeight - scrollPosition <= threshold) {
        this.fetchJobs();
      }
    },

    initScrollListener() {
      const container = this.$refs.scrollContainer;
      if (container) {
        container.addEventListener("scroll", this.handleScroll);
      }
    },

    destroyScrollListener() {
      const container = this.$refs.scrollContainer;
      if (container) {
        container.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  async mounted() {
    await Promise.all([this.fetchJobs(true), this.fetchAllLocations()]);
    this.$nextTick(() => {
      this.initScrollListener();
    });
  },
  beforeDestroy() {
    this.destroyScrollListener();
  },
};
</script>

<style scoped>
/* Hide scrollbar */
.scroll-hide {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.scroll-hide::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
</style>
