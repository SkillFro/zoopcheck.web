<template>
  <div
    class="bg-[url('/images/jobview.jpg')] px-4 mt-18 lg:mt-22 bg-center bg-cover bg-black/75 bg-blend-overlay w-full md:h-[348px] flex justify-center items-end py-10"
  >
    <div class="flex w-[1080px] mx-auto justify-between">
      <!-- <div class="flex flex-col w-full gap-3"> -->
      <!-- <div class="flex flex-col justify-between rounded-xl gap-4 w-full"> -->
      <div
        class="flex flex-col md:flex-row justify-between items-center w-full"
      >
        <div class="flex items-start justify-between">
          <div class="flex gap-4">
            <NuxtLink :to="`/recruiter/kkk`" class="block sm:hidden">
              <img
                src="/public/dash/user.png"
                alt="recruiter Logo"
                class="object-cover w-20 h-20 rounded-lg cursor-pointer"
              />
            </NuxtLink>
            <div class="flex flex-col gap-2">
              <h2 class="text-lg font-semibold text-white md:text-xl">
                Suresh
              </h2>
              <p class="text-sm text-gray-200">Suresh@gmail.com</p>
              <div class="flex gap-2 items-center">
                <img src="/public/icons/number.svg" class="w-4 h-4" alt="" />
                <p class="text-white">1234567890</p>
              </div>

              <div class="flex gap-2 items-center">
                <img src="/public/icons/web.svg" class="w-4 h-4" alt="" />
                <a
                  class="text-[#2966f4]"
                  target="_blank"
                  href="https://my-portfolio-five-mocha-87.vercel.app/"
                  >Portfolio</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-5">
          <NuxtLink :to="`/recruiter/kkk`" class="hidden sm:block">
            <img
              src="/public/dash/user.png"
              alt="recruiter Logo"
              class="object-cover w-20 h-20 rounded-lg cursor-pointer"
            />
          </NuxtLink>
          <button class="px-4 py-2 rounded bg-[#2966f4] text-white">
            Apply Now
          </button>
        </div>
      </div>
      <!-- </div> -->
      <!-- <div class="flex flex-col gap-4">
            <button class="px-[30px] py-[14px] rounded bg-[#2966f4] text-white">
              Apply Now
            </button>
            <button
              class="px-[20px] py-[14px] rounded bg-[#2966f4] text-white flex items-center gap-3"
            >
              <img
                src="/public/images/linkedin.svg"
                class="w-[20px] h-[20px]"
                alt=""
              />
              <span>Apply With Linkedin</span>
            </button>
          </div> -->
    </div>
  </div>
  <div
    class="xl:max-w-[1080px] w-full px-4 mx-auto mt-8 xl:flex xl:flex-row flex flex-col md:items-start gap-[20px]"
  >
    <div class="md:max-w-[1080px] w-full border-slate-200 rounded-xl mx-auto">
      <h2 class="mb-4 text-lg font-semibold text-gray-800">Job description</h2>
      <div class="mb-6 text-gray-700">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          eius necessitatibus delectus sequi, dicta nisi odit nesciunt similique
          porro inventore aspernatur. Officia soluta corrupti excepturi id natus
          repellat impedit recusandae consectetur maiores dolorem animi ea
          temporibus et, accusamus voluptate sapiente tempore dolores ratione
          quos. Magni quasi sapiente libero a, veritatis sequi dolorum
          consequatur ipsam recusandae excepturi, repudiandae ullam optio, quod
          eaque aliquid illo ab dignissimos reiciendis soluta doloremque
          expedita autem.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
