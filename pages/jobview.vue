<template>
  <div
    class="xl:max-w-[1120px] w-full mx-auto mt-32 xl:flex xl:flex-row flex flex-col md:items-start gap-[20px]"
  >
    <div
      class="md:max-w-[700px] w-full mx-auto flex flex-col items-center justify-center gap-[16px] px-2"
    >
      <div
        @click="companyPage()"
        class="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-200 flex flex-col gap-4 w-full md:max-w-[700px] transition hover:shadow-lg"
      >
        <!-- Title and Logo -->
        <div class="flex items-start justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-900 md:text-xl">
              Senior Network Security Engineer - L2
            </h2>
            <p class="mt-1 text-sm text-gray-500">Skillmine Technology</p>
          </div>
          <img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt="Company Logo"
            class="object-contain w-10 h-10 rounded-lg cursor-pointer"
          />
        </div>

        <!-- Job Info -->
        <div class="flex flex-wrap gap-4 text-sm text-gray-700">
          <div class="flex items-center gap-1">
            <span>👨‍💻</span>
            <span>4 - 7 years</span>
          </div>
          <div class="flex items-center gap-1">
            <span>📍</span>
            <span>Mumbai</span>
          </div>
        </div>

        <hr />

        <!-- Meta Info & Actions -->
        <div class="flex flex-wrap items-center justify-between gap-2 text-sm">
          <div class="space-x-3 text-gray-500">
            <span>Posted: <strong>1 day ago</strong></span>
            <span>Openings: <strong>1</strong></span>
            <span>Applicants: <strong>Less than 10</strong></span>
          </div>

          <div class="flex gap-2 mt-2 md:mt-0">
            <button
              class="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              Register to apply
            </button>
            <button
              class="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login to apply
            </button>
          </div>
        </div>
      </div>
      <div
        class="sticky top-0 w-full max-w-3xl p-6 bg-white border border-gray-200 shadow-sm rounded-xl"
      >
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Job description
        </h2>

        <ul class="pl-6 mb-6 space-y-2 text-gray-700 list-disc">
          <li>
            Design, implement and maintain security protocols and infrastructure
            to protect computer systems, networks, and data
          </li>
          <li>
            Monitor network traffic for unusual activity and potential threats
          </li>
          <li>
            Configure and manage security tools such as firewalls, antivirus
            software, and intrusion detection systems
          </li>
          <li>
            Conduct regular security audits to identify vulnerabilities and
            implement remedial actions
          </li>
          <li>
            Research and keep up to date with the latest security standards,
            systems, and authentication protocols
          </li>
          <li>
            Provide technical advice on network security issues to staff and
            management
          </li>
          <li>
            Respond to, investigate, and resolve security incidents and breaches
          </li>
          <li>
            Develop and deliver training materials and perform general security
            awareness and specific security technology training
          </li>
          <li>
            Document network security architecture and design, operational
            procedures, and incident response reports
          </li>
        </ul>

        <div class="mb-6 space-y-2 text-sm text-gray-800">
          <p><strong>Role:</strong> System Administrator / Engineer</p>
          <p><strong>Industry Type:</strong> IT Services & Consulting</p>
          <p><strong>Department:</strong> Engineering - Hardware & Networks</p>
          <p><strong>Employment Type:</strong> Full Time, Permanent</p>
          <p><strong>Role Category:</strong> IT Network</p>
        </div>

        <div class="mb-6 space-y-1 text-sm text-gray-800">
          <p><strong>Education</strong></p>
          <p><strong>UG:</strong> Any Graduate</p>
          <p><strong>PG:</strong> Any Postgraduate</p>
        </div>

        <div class="mb-4">
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
        </div>
      </div>
    </div>
    <div
      class="xl:max-w-[400px] md:max-w-[684px] w-full px-2 sticky top-0 mx-auto"
    >
      <div
        class="xl:w-[400px] md:w-[700px] w-full p-4 bg-white border border-gray-200 shadow-sm rounded-xl"
      >
        <h2 class="mb-4 text-lg font-semibold text-gray-800">
          Jobs you might be interested in
        </h2>

        <div
          v-for="(job, index) in suggestedJobs"
          :key="index"
          class="flex flex-col gap-3 py-4 border-b md:flex md:flex-row md:items-start md:justify-between last:border-b-0"
        >
          <div class="flex flex-row items-start gap-5 last:border-b-0">
            <div
              class="flex items-center justify-center w-10 h-10 text-lg font-semibold text-gray-700 bg-gray-100 rounded-md"
            >
              {{ job.logo }}
            </div>

            <div class="flex-1">
              <h3 class="text-sm font-semibold leading-tight text-gray-800">
                {{ job.title }}
              </h3>
              <p class="w-56 text-xs text-gray-600 truncate">
                {{ job.company }}
              </p>

              <div class="flex items-center mt-1 text-xs text-gray-500">
                <span class="mr-1 font-semibold text-yellow-500">★</span
                >{{ job.rating }}
                <span class="ml-1">• {{ job.reviews }} reviews</span>
              </div>

              <p class="mt-1 text-xs text-gray-500">{{ job.location }}</p>
            </div>
          </div>

          <div>
            <p class="text-xs text-gray-400">
              {{ job.posted }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Security audit",
        "Training",
        "Architecture",
        "Intrusion detection",
        "Network security",
        "Manager Technology",
        "Antivirus",
        "Management",
        "Research",
        "Operations",
      ],
      suggestedJobs: [
        {
          logo: "L",
          title: "Firewall Security Engineer",
          company: "Liquid Intelligent Techno...",
          rating: "4.3",
          reviews: 17,
          location: "Pune",
          posted: "8 days ago",
        },
        {
          logo: "N",
          title: "Network Security Engineer",
          company: "Net Connect",
          rating: "3.3",
          reviews: 530,
          location: "Pune",
          posted: "29 days ago",
        },
        {
          logo: "E",
          title: "Cyber Security Analyst",
          company: "Daruwallas Consultancy Se...",
          rating: "4.7",
          reviews: 17,
          location: "Navi Mumbai",
          posted: "29 days ago",
        },
        {
          logo: "M",
          title: "Network Security Engineer",
          company: "Micrologic Networks Pvt. ...",
          rating: "4.9",
          reviews: 5,
          location: "Mumbai Suburban, Navi Mumbai...",
          posted: "6 days ago",
        },
        {
          logo: "🌼",
          title: "Zscaler Proxy Security Engineer - Mumbai",
          company: "Happiest Minds Technologi...",
          rating: "3.6",
          reviews: 1106,
          location: "Navi Mumbai, Pune, Mumbai (All ...)",
          posted: "20 days ago",
        },
        {
          logo: "L",
          title: "Firewall Security Engineer",
          company: "Liquid Intelligent Techno...",
          rating: "4.3",
          reviews: 17,
          location: "Pune",
          posted: "8 days ago",
        },
        {
          logo: "N",
          title: "Network Security Engineer",
          company: "Net Connect",
          rating: "3.3",
          reviews: 530,
          location: "Pune",
          posted: "29 days ago",
        },
        {
          logo: "E",
          title: "Cyber Security Analyst",
          company: "Daruwallas Consultancy Se...",
          rating: "4.7",
          reviews: 17,
          location: "Navi Mumbai",
          posted: "29 days ago",
        },
        {
          logo: "M",
          title: "Network Security Engineer",
          company: "Micrologic Networks Pvt. ...",
          rating: "4.9",
          reviews: 5,
          location: "Mumbai Suburban, Navi Mumbai...",
          posted: "6 days ago",
        },
        {
          logo: "🌼",
          title: "Zscaler Proxy Security Engineer - Mumbai",
          company: "Happiest Minds Technologi...",
          rating: "3.6",
          reviews: 1106,
          location: "Navi Mumbai, Pune, Mumbai (All ...)",
          posted: "20 days ago",
        },
      ],
    };
  },
  methods: {
    companyPage() {
      this.$router.push("companyview");
    },
  },
};
</script>
