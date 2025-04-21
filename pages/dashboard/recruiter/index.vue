<template>
  <div>
    <div class="w-full px-4 py-4 bg-white md:px-10">
      <h1 class="text-xl font-semibold md:text-3xl">Overview</h1>
    </div>

    <div class="grid grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-3">
      
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Total Jobs Posted</p>
            <p class="mt-1 text-2xl font-semibold text-gray-900">
              {{ recentJobs.length }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-blue-50">
            <svg
              class="w-6 h-6 text-[#086BD8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Total Applicants</p>
            <p class="mt-1 text-2xl font-semibold text-gray-900">
              {{ totalApplicants }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-green-50">
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Active Jobs</p>
            <p class="mt-1 text-2xl font-semibold text-gray-900">
              {{ activeJobs }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-purple-50">
            <svg
              class="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    
    <div class="grid grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-2">
      
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">Jobs Overview</h2>
        <div class="h-64">
          <canvas ref="jobsChart"></canvas>
        </div>
      </div>

      
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Applicants Trend
        </h2>
        <div class="h-64">
          <canvas ref="applicantsChart"></canvas>
        </div>
      </div>
    </div>

    
    <div class="p-4 md:p-6">
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Applicants
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Posted Date
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="job in recentJobs" :key="job.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ job.title }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ job.applicants }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      job.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`"
                  >
                    {{ job.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ new Date(job.created_at).toDateString() }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import axios from "axios";

export default {
  setup() {
    definePageMeta({
      layout: "secondary",
    });
  },
  data() {
    return {
      totalJobs: 24,
      totalApplicants: 186,
      activeJobs: 8,
      recentJobs: [],
    };
  },
  mounted() {
    this.initCharts();
    this.fetchJobs();
  },
  methods: {
    initCharts() {
      Chart.register(...registerables);

      // Jobs Chart
      const jobsCtx = this.$refs.jobsChart.getContext("2d");
      new Chart(jobsCtx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Jobs Posted",
              data: [3, 5, 2, 6, 8, 4],
              backgroundColor: "rgba(79, 70, 229, 0.7)",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 2,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // Applicants Chart
      const applicantsCtx = this.$refs.applicantsChart.getContext("2d");
      new Chart(applicantsCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Applicants",
              data: [12, 19, 15, 27, 34, 22],
              borderColor: "rgba(16, 185, 129, 1)",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async fetchJobs() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("accessToken");

        this.loading = true;

        const response = await axios.get(
          `https://zoopcheck-api.vercel.app/api/recruiter/${user.id}/posts`
        );

        if (response.data && Array.isArray(response.data.posts)) {
          this.recentJobs = response.data.posts.map((post) => ({
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
  },
};
</script>

<style scoped>
/* Responsive table */
@media (max-width: 640px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
