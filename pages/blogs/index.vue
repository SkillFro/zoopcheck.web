<template>
  <div class="mt-30">
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
      <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechBlog
          v-for="(blog, title) in blogs"
          :key="title"
          :blog="blog"
          :href="`/blogs/${blog.title.toLowerCase().replaceAll(' ', '-')}`"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import TechBlog from "~/components/TechBlog.vue";

const blogs = [
  {
    title: "How a Laid-Off Engineer Turned Rejection into a Dream Job Offer",
    slug: "laid-off-engineer-dream-job",
    description:
      "When Aarav Mehta was laid off from his tech job in 2022, he felt like a failure. But what looked like an ending became the start of a transformative journey—one that landed him a senior role at a Fortune 500 company within a year.",
    image: "https://ik.imagekit.io/owncdn/common/blog1.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    content: `Full content goes here...`,
  },
  {
    title:
      "How a 45-Year-Old Career Switcher Landed a Tech Job with Zero Experience (Salary Revealed)",
    slug: "45-Year-Old Career Switcher Landed a Tech",
    description:
      "The BackstorySanjay Patel (name changed) a former bank manager with 20 years in finance, felt stuck. After his bank automated most processes he faced a choice: retrain or risk obsolescence.",
    image: "https://ik.imagekit.io/owncdn/common/blog2.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    content: `Full content goes here...`,
  },
  {
    title: "Rocking Behavioral Interview Questions",
    slug: "Rocking Behavioral Interview",
    description:
      "Say you just landed an interview. Your experience and education are a great fit, but what else will you say or do to stand out to the hiring manager? Well, in most cases, it’s all about preparation for the questions that may be asked.",
    image: "https://ik.imagekit.io/owncdn/common/blog3.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    content: `Full content goes here...`,
  },
  // Add more blog objects
];
</script>
