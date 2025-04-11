<template>
  <div>
    <!-- <div class="flex flex-col items-center justify-center gap-3 py-24">
    <div>
      <img src="/public/images/logo.svg" alt="logo" class="w-[150px]" />
    </div>
    <div class="max w-[500px] mx-auto border shadow-md p-6 mt-4">
      <div v-if="recruiter" class="flex flex-col gap-[10px]">
        <div class="flex flex-col gap-[10px]">
          <label class="font-semibold text-[#2c3038]" for="#">Title </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Title"
            class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
          />
        </div>
        <div class="flex flex-col gap-[10px]">
          <label class="font-semibold text-[#2c3038]" for="#"
            >Description
          </label>
          <textarea
            name="description"
            id=""
            cols=""
            rows=""
            placeholder="Enter Your Description"
            class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
          ></textarea>
        </div>
        <div class="flex flex-col gap-[10px]">
          <label class="font-semibold text-[#2c3038]" for="#">Category </label>

          <select
            v-model="category"
            class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
          >
            <option value="Category">Category</option>
            <option>Select Category</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Graphic Designer</option>
          </select>
        </div>
        <div class="flex flex-col gap-[10px]">
          <label class="font-semibold text-[#2c3038]" for="#"
            >Applications
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Applications"
            class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
          />
        </div>
        <div class="flex flex-col gap-[10px]">
          <label class="font-semibold text-[#2c3038]" for="#"
            >Experience
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Experience"
            class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
          />
        </div>
        <nuxt-link to="/dashboard">
          <div class="px-32 py-8">
            <button class="p-3 rounded bg-[#2966f4] text-white w-full">
              Submit
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div> -->
  </div>
</template>
<script>
export default {
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
};
</script>
<!-- <script>
export default {
  data() {
    return {
      recruiter: true,
      category: "Category",
    };
  },
 
  methods: {
    togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      const checkbox = document.getElementById("showpassword");
      passwordInput.type = checkbox.checked ? "text" : "password";
    },
  },
};
</script>  -->
