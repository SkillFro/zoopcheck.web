<template>
  <div class="max-w-[1080px]  mx-auto px-4 lg:px-0  mt-32">
    <div class="flex gap-10 mt-6 overflow-x-auto border-b border-slate-200">
      <button v-for="(tab, index) in tabs" class="pb-2 curp text-lg font-semibold border-b-2 whitespace-nowrap" :class="[
        index === selectedTab
          ? 'border-[#086BD8] text-[#086BD8]'
          : 'border-transparent text-gray-800',
        'hover:text-[#086BD8] hover:border-[#086BD8]',
      ]" @click="() => selectedTab = index">
        {{ tab }}
      </button>
    </div>
    <section class="mt-10">
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <!-- <div>
          <p class="flex-1 text-lg font-semibold">Personal Information</p>
          <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
        </div> -->
        <div class="flex-1 space-y-12">
          <div class=" pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you
              share.</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div class="col-span-full">
                <label for="photo" class="block text-sm/6 font-medium text-gray-900">Comapany Logo</label>
                <div class="mt-4 w-12 flex items-center gap-x-3">
                  <img src="/public/dash/user.png" alt="">
                  <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-[#086BD8] ">
                    <div 
                      class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">Change</div>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                  </label>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm/6 font-medium text-gray-900">Company Name</label>
                <div class="mt-4">
                  <div
                    class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#086BD8]">
                    <input type="text" name="username" id="username"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="ZoopCheck Privated Limited">
                  </div>
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
                <div class="mt-4">
                  <textarea name="about" id="about" rows="6"
                    class="block w-full  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6"></textarea>
                </div>
                <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
              </div>

              <div class="sm:col-span-4">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-4">
                  <input id="email" placeholder="hello@zoopcheck.com" name="email" type="email" autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6">
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Mobile Number</label>
                <div class="mt-4">
                  <input id="email" placeholder="1234567890" name="email" type="text" autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6">
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">company website</label>
                <div class="mt-4">
                  <input id="email" placeholder="https://zoopcheck" name="email" type="text" autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#086BD8] sm:text-sm/6">
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
            <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit"
              class="rounded-md bg-[#086BD8] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#086BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]">Save</button>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedTab: 0,
      tabs: [
        'Profile',
        'Jobs'
      ]
    }
  }
}

</script>

<style></style>