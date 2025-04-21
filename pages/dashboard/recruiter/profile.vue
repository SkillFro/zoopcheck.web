<template>
  <div>
    <div class="w-full px-10 py-4 bg-white">
      <h1 class="text-3xl font-semibold">Profile</h1>
    </div>
    <div class="px-2">
      <div
        class="max-w-xl p-8 mx-auto mt-20 bg-white shadow md:max-w-5xl rounded-xl"
      >
        <div
          v-if="successMessage"
          class="p-4 mb-6 text-green-700 bg-green-100 rounded-lg"
        >
          {{ successMessage }}
        </div>
        <div
          v-if="errorMessage"
          class="p-4 mb-6 text-red-700 bg-red-100 rounded-lg"
        >
          {{ errorMessage }}
        </div>

        <div class="flex items-center mb-6 space-x-6">
          <img
            src="/public/dash/user.png"
            alt="Profile Picture"
            class="object-cover w-20 h-20 p-2"
          />
        </div>

        <form
          class="grid grid-cols-1 gap-6 md:grid-cols-2"
          @submit.prevent="saveProfile"
        >
          <div>
            <label class="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              v-model="profile.name"
              placeholder="Enter Your Name"
              class="input-style"
              required
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Description</label>
            <textarea
              v-model="profile.description"
              placeholder="Enter Your Description"
              class="input-style"
            ></textarea>
          </div>

          <div>
            <label class="block mb-1 text-sm">Email</label>
            <input
              type="email"
              v-model="profile.email"
              placeholder="Enter Your Email @gmail.com"
              class="input-style"
              required
              disabled
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Number</label>
            <input
              type="number"
              v-model="profile.number"
              placeholder="Enter Your Number"
              class="input-style"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm">Website</label>
            <input
              type="text"
              v-model="profile.website"
              placeholder="Enter Your Website URL"
              class="input-style"
            />
          </div>

          <div class="text-right md:col-span-2">
            <button
              type="submit"
              class="px-6 py-2 text-white bg-[#086BD8] rounded-lg hover:bg-[#086BD8] disabled:bg-blue-300"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Save</span>
              <span v-else>Saving...</span>
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
  data() {
    return {
      profile: {
        id: "",
        name: "",
        description: "",
        email: "",
        number: "",
        website: "",
      },
      isLoading: false,
      successMessage: "",
      errorMessage: "",
    };
  },
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
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.id) {
          throw new Error("User not found");
        }

        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Authentication required");
        }

        // Determine the correct endpoint based on user role
        const endpoint =
          user.role === "recruiter"
            ? `https://zoopcheck-api.vercel.app/api/recruiter/profile/${user.id}`
            : `https://zoopcheck-api.vercel.app/api/candidate/profile/${user.id}`;

        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data && response.data.user) {
          const data = response.data.user;
          this.profile = {
            id: user.id,
            name: data.name || "",
            description: data.description || "",
            email: user.email || data.email || "",
            number: data.number || "",
            website: data.website || "",
          };
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        this.errorMessage =
          "Failed to load profile data. Please try again later.";
      }
    },

    async saveProfile() {
      this.isLoading = true;
      this.successMessage = "";
      this.errorMessage = "";

      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.id) {
          throw new Error("User not found");
        }

        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Authentication required");
        }

        // Determine the correct endpoint based on user role
        const endpoint =
          user.role === "recruiter"
            ? "https://zoopcheck-api.vercel.app/api/recruiter/me"
            : "https://zoopcheck-api.vercel.app/api/candidate/me";

        const payload = {
          name: this.profile.name,
          description: this.profile.description,
          number: this.profile.number,
          website: this.profile.website,
        };

        const response = await axios.put(endpoint, payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data && response.data.success) {
          this.successMessage = "Profile updated successfully!";
          // Update local user data if needed
          if (response.data.user) {
            const user = JSON.parse(localStorage.getItem("user"));
            user.name = this.profile.name;
            localStorage.setItem("user", JSON.stringify(user));
          }
        } else {
          throw new Error(response.data.message || "Failed to update profile");
        }
      } catch (error) {
        console.error("Profile update error:", error);
        this.errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to update profile. Please try again.";
      } finally {
        this.isLoading = false;

        // Clear messages after 5 seconds
        setTimeout(() => {
          this.successMessage = "";
          this.errorMessage = "";
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.input-style {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086BD8];
}
</style>
