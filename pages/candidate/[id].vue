<template>
  <div v-if="candidate !== null">
    <div
      class="bg-[url('/images/jobview.jpg')] bg-black/50 bg-blend-darken px-4 mt-18 lg:mt-24 bg-center bg-cover w-full md:h-[300px] flex justify-center items-end py-10"
    ></div>

    <div class="flex gap-0.5 max-w-5xl mx-auto">
      <div class="w-[250px] lg:h-[350px] bg- flex flex-col gap-4 py-6 px-12">
        <div>
          <img
            :src="candidate.profile"
            alt="user"
            class="w-[80px] h-[80px] rounded-full bg-auto border border-gray-300"
          />
        </div>
        <div>
          <h1 class="text-lg font-semibold md:text-xl">{{ candidate.name }}</h1>
        </div>
        <div class="flex gap-1.5 flex-col">
          <div class="flex gap-2 items-center">
            <img src="/public/icons/mail.svg" class="w-4 h-4" alt="mail" />
            <p class="text-sm">{{ candidate.email }}</p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/public/icons/number.svg" class="w-4 h-4" alt="" />
            <p class="text-sm">{{ candidate.number }}</p>
          </div>

          <div class="flex gap-2 items-center">
            <img src="/public/icons/web.svg" class="w-4 h-4" alt="" />
            <a class="text-[#2966f4]" target="_blank" :href="candidate.website"
              >Portfolio</a
            >
          </div>
        </div>
        <div class="w-full">
          <button
            class="bg-green-800 text-xs text-white py-2 rounded px-6 cursor-pointer"
          >
            Hire {{ candidate.name }}
          </button>
        </div>
      </div>

      <div class="bg- w-full mt-10 px-8">
        <div class="w-full border-slate-200 rounded-xl mx-auto">
          <h2 class="text-xl font-semibold text-gray-800">About Me</h2>
          <div class="mt-6 text-gray-700">
            <p class="text-sm">
              {{ candidate.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center mt-32 items-center py-4 h-screen">
    <div
      class="w-8 h-8 animate-spin border-[#086BD8] border-3 rounded-full border-r-gray-400"
    ></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      candidate: null,
      loading: false,
    };
  },
  methods: {
    async fetchCandidate() {
      const response = await axios.get(
        `https://zoopcheck-api.onrender.com/api/candidate/profile/${
          useRoute().params.id
        }`
      );
      this.candidate = response.data.user;
    },
  },
  mounted() {
    this.fetchCandidate();
  },
};
</script>
