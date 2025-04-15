<template>
  <div>
    <div class="flex items-center justify-between w-full px-10 py-4 bg-white">
      <h1 class="text-3xl font-semibold">Profile</h1>
      <button
        @click="handleLogout"
        class="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
    <div class="max-w-5xl p-8 mx-auto mt-20 bg-white shadow rounded-xl">
      <div class="relative flex items-center mb-6 space-x-6">
        <img
          :src="userProfile.profile_picture || '/public/dash/profile.png'"
          alt="Profile Picture"
          class="object-cover w-20 h-20 p-2 rounded-full bg-slate-400"
        />
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          class="hidden"
          @change="handleImageUpload"
        />
        <button
          @click="triggerFileInput"
          class="absolute px-3 py-1 text-sm text-white bg-blue-600 rounded-full left-8 bottom-1 hover:bg-blue-700"
        >
          Edit
        </button>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div>
          <label class="block mb-1 text-sm">Your Name</label>
          <input
            v-model="userProfile.name"
            type="text"
            placeholder="Enter Your Name"
            class="input-style"
            required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Description</label>
          <input
            v-model="userProfile.description"
            type="text"
            placeholder="Enter Your Description"
            class="input-style"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Email</label>
          <input
            v-model="userProfile.email"
            type="email"
            placeholder="Enter Your Email"
            class="input-style"
            required
            disabled
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Phone Number</label>
          <input
            v-model="userProfile.phone"
            type="tel"
            class="input-style"
            placeholder="Enter Your Number"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Website</label>
          <input
            v-model="userProfile.website"
            type="url"
            class="input-style"
            placeholder="Enter Your Website URL"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm">Role</label>
          <input
            v-model="userProfile.role"
            type="text"
            class="input-style"
            disabled
          />
        </div>

        <div class="text-right md:col-span-2">
          <button
            type="submit"
            class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            :disabled="loading"
          >
            <span v-if="loading">Saving...</span>
            <span v-else>Save Changes</span>
          </button>
        </div>
        <div v-if="error" class="text-red-500 md:col-span-2">
          {{ error }}
        </div>
        <div v-if="success" class="text-green-500 md:col-span-2">
          {{ success }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const error = ref("");
    const success = ref("");

    // Initialize with data from auth response
    const userProfile = ref({
      id: "",
      name: "",
      email: "",
      role: "",
      phone: "",
      website: "",
      description: "",
      profile_picture: "",
    });

    // Fetch user data from localStorage or auth store
    const initializeProfile = () => {
      const authData = JSON.parse(localStorage.getItem("authData"));
      if (authData && authData.user) {
        userProfile.value = {
          ...userProfile.value,
          id: authData.user.id,
          name: authData.user.name,
          email: authData.user.email,
          role: authData.user.role,
        };
      }
    };

    // Fetch additional profile data from API
    const fetchProfileData = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `https://zoopcheck-api.vercel.app/api/recruiter/profile/${userProfile.value.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        userProfile.value = {
          ...userProfile.value,
          ...response.data,
        };
      } catch (err) {
        if (err.response?.status === 401) {
          handleLogout(); // token expired
        } else {
          error.value =
            err.response?.data?.message || "Failed to load profile data";
        }
      } finally {
        loading.value = false;
      }
    };

    // Handle form submission
    const handleSubmit = async () => {
      try {
        loading.value = true;
        error.value = "";
        success.value = "";

        const response = await axios.put(
          `https://zoopcheck-api.vercel.app/api/recruiter/profile/${userProfile.value.id}`,
          userProfile.value,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        success.value = "Profile updated successfully!";
        setTimeout(() => (success.value = ""), 3000);
      } catch (err) {
        console.error("Error updating profile:", err);
        error.value = err.response?.data?.message || "Failed to update profile";
      } finally {
        loading.value = false;
      }
    };

    // Handle image upload
    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      try {
        loading.value = true;
        const formData = new FormData();
        formData.append("profile_picture", file);

        const response = await axios.post(
          `https://zoopcheck-api.vercel.app/api/recruiter/profile/${userProfile.value.id}/picture`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        userProfile.value.profile_picture = response.data.profile_picture;
        success.value = "Profile picture updated!";
        setTimeout(() => (success.value = ""), 3000);
      } catch (err) {
        console.error("Error uploading image:", err);
        error.value = err.response?.data?.message || "Failed to upload image";
      } finally {
        loading.value = false;
      }
    };

    const triggerFileInput = () => {
      document.getElementById("profileImage").click();
    };

    // Handle logout
    const handleLogout = () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authData");
      router.push("/login");
    };

    // Initialize when component mounts
    onMounted(() => {
      initializeProfile();
      fetchProfileData();
    });

    definePageMeta({
      layout: "secondary",
    });

    return {
      userProfile,
      loading,
      error,
      success,
      handleSubmit,
      handleImageUpload,
      triggerFileInput,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.input-style {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
