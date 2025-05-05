<template>
  <section class="mt-30">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
          The case studies
        </h2>
        <p class="mt-1 text-gray-600">
          See how game-changing companies are making the most of every
          engagement with Preline.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(blog, title) in blogs"
          :key="title"
          class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
          :href="`/blogs/${blog.title.toLowerCase().replaceAll(' ', '-')}`"
        >
          <div class="aspect-w-16 aspect-h-11">
            <img
              class="w-full object-cover rounded-xl"
              :src="blog.image"
              alt="Blog Image"
            />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 line-clamp-2">
              {{ blog.title }}
            </h3>
            <p class="mt-5 text-gray-600 line-clamp-2">
              {{ blog.description }}
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <img
              class="size-8 rounded-full"
              :src="blog.authorImage"
              alt="Avatar"
            />
            <div>
              <h5 class="text-sm text-gray-800">By {{ blog.author }}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          title:
            "How a Laid-Off Engineer Turned Rejection into a Dream Job Offer",
          description:
            "When Aarav Mehta was laid off from his tech job in 2022, he felt like a failure. But what looked like an ending became the start of a transformative journey—one that landed him a senior role at a Fortune 500 company within a year.",
          image:
            "https://ik.imagekit.io/owncdn/common/blog1.png?updatedAt=1746432468996",
          authorImage: "/images/founder.png",
          author: "Mr.Udayalingam.M,",
        },
        {
          title:
            "How a 45-Year-Old Career Switcher Landed a Tech Job with Zero Experience (Salary Revealed)",
          description:
            "Sanjay Patel (name changed), a former bank manager with 20 years in finance, felt stuck. After his bank automated most processes, he faced a choice: retrain or risk obsolescence.",
          image: "https://ik.imagekit.io/owncdn/common/blog2.png",
          author: "Mr.Udayalingam.M,",
          authorImage: "/images/founder.png",
        },
        {
          title: "Rocking Behavioral Interview Questions",
          description:
            "Say you just landed an interview. Your experience and education are a great fit, but what else will you say or do to stand out to the hiring manager? Well, in most cases, it’s all about preparation for the questions that may be asked.",
          image: "https://ik.imagekit.io/owncdn/common/blog3.png",
          author: "Mr.Udayalingam.M,",
          authorImage: "/images/founder.png",
        },
      ],
    };
  },
};
</script>
