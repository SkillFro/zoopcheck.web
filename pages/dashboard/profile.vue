<template>
  <div>
    <div class="w-full px-10 py-4 bg-white">
      <h1 class="text-3xl font-semibold">Profile</h1>
    </div>
    <div class="max-w-5xl p-8 mx-auto mt-20 bg-white shadow rounded-xl">
      <div class="relative flex items-center mb-6 space-x-6">
        <img
          src="/public/dash/profile.png"
          alt="Profile Picture"
          class="object-cover w-20 h-20 p-2 rounded-full bg-slate-400"
        />
        <button
          class="absolute px-3 py-1 text-sm text-white bg-blue-600 rounded-full left-8 bottom-1"
        >
          Edit
        </button>
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
          <input
            type="text"
            placeholder=" Enter Your Description"
            class="input-style"
          />
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
            type="file"
            value=""
            class="input-style"
            placeholder="Enter Your Website"
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
</template>
<script>
export default {
  setup() {
    definePageMeta({
      layout: "secondary",
    });
  },
};
</script>
<style scoped>
.input-style {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
