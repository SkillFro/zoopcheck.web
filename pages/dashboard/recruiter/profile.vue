<template>
  <div>
    <div class="w-full px-10 py-4 bg-white">
      <h1 class="text-3xl font-semibold">Profile</h1>
    </div>
    <div class="px-2">
      <div
        class="max-w-xl p-8 mx-auto mt-20 bg-white shadow md:max-w-5xl rounded-xl"
      >
        <div class="flex items-center mb-6 space-x-6">
          <img
            src="/public/dash/user.png"
            alt="Profile Picture"
            class="object-cover w-20 h-20 p-2 rounded-full bg-stone-100"
          />
          <!-- <div
            class="bg-blue-500 w-[30px] h-[30px] flex justify-center items-center absolute left-6 -bottom-1 rounded-full"
          >
            <img
              src="/public/dash/edit.png"
              alt="edit"
              class="w-[13px] h-[13px]"
            />
          </div> -->
        </div>

        <form class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              class="input-style"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Description</label>
            <textarea
              name="text"
              id=""
              placeholder=" Enter Your Description"
              class="input-style"
            ></textarea>
            <!-- <input
              type="text"
              placeholder=" Enter Your Description"
              class="input-style"
            /> -->
          </div>

          <div>
            <label class="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email @gmail.com"
              class="input-style"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Number</label>
            <input
              type="number"
              value=""
              class="input-style"
              placeholder="Enter Your Number"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Website</label>
            <input
              type="text"
              value=""
              class="input-style"
              placeholder="Enter Your Website URL"
            />
          </div>

          <div class="text-right md:col-span-2">
            <button
              type="submit"
              class="px-6 py-2 text-white bg-blue-600 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
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
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);
      const response = await axios.get(
        `https://zoopcheck-api.vercel.app/api/recruiter/profile/${parsedUser.id}`
      );

      // Handle successful login
      console.log("Login successful:", response.data);
    },
  },
};
</script>
<style scoped>
.input-style {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
