<template>
  <div class="max-w-[1080px] mx-auto p-4 sm:p-6 lg:p-4 mt-20">
    <!-- Blog Header -->
    <section class="py-8">
      <div class="flex flex-col gap-4 mx-auto max-w-7xl">
        <h1
          class="text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl lg:text-4xl"
        >
          Adding the daily.dev DevCard to your GitHub profile
        </h1>
        <p
          class="mt-2 text-xs tracking-wide text-gray-700 uppercase sm:text-sm"
        >
          Feb 20, 2024
        </p>
      </div>
    </section>

    <!-- Image and Author Section -->
    <section class="items-start mt-2">
      <!-- Blog Image -->
      <div class="col-span-2">
        <img
          src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Blog cover"
          class="object-cover w-full h-[500px] rounded-lg"
        />
      </div>

      <!-- Author Info -->
      <!-- <div
        class="sticky top-20 bg-white border border-slate-200 dark:border-gray-700 rounded-xl p-5"
      >
        <p class="mb-3 text-sm text-gray-800 dark:text-gray-300">Author</p>
        <div class="flex items-center gap-4">
          <img
            src="/dash/profile.svg"
            alt="Author avatar"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <h3 class="text-lg font-bold text-black dark:text-white">
              Chris Bongers
            </h3>
            <p class="text-sm text-gray-900 dark:text-gray-400">
              @DailyDevTips1
            </p>
          </div>
        </div>
      </div> -->
    </section>

    <!-- Blog Content -->
    <section class="mt-10 space-y-8 text-gray-800">
      <div>
        <h2 class="mt-6 text-2xl font-medium">
          How two young dreamers built a crowd-favourite eatery in Ranchi
        </h2>
        <p class="mt-4 text-lg">
          Brothers Nishant and Vikash Ranjan had a dream—to create a space where
          people could come together over warm vibes while enjoying
          unforgettable meals. But bringing this idea to life was no easy feat!
          <br /><br />
          It required grit, resourcefulness and a whole lot of faith in their
          passion for food.
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-medium">A dream takes shape</h2>
        <p class="mt-4 text-lg">
          After completing high school in Ranchi, Nishant and Vikash moved to
          Mumbai for further studies. While Nishant pursued Chartered
          Accountancy, Vikash studied mathematics. It was during this time that
          they started cooking for themselves. This was out of necessity at
          first, as they longed for the comfort of home-cooked meals. But what
          started as a task soon became a passion. <br />
          <br />
          While a corporate career seemed like the logical next step, something
          about food and cooking kept pulling them in a different direction.
          Vikash says, “Having lived outside as students, we wanted to recreate
          the sense of comfort that we often missed.”
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-medium">Building a standout brand</h2>
        <p class="mt-4 text-lg">
          The first few months were tough. Ranchi was already home to
          established food giants, which attracted a huge crowd of customers.
          The brothers tackled this head-on by focusing on three key areas:
          quality, consistency, and customer service.
          <br /><br />They personally connected with customers on social media
          and tweaked the menu based on customer feedback. They also built
          strong relationships with local suppliers to secure the freshest
          ingredients, ensuring every dish delivered on taste and quality.
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-medium">Adapting and growing</h2>
        <p class="mt-4 text-lg">
          By 2018, Nishant noticed a shift in dining habits—people weren’t just
          visiting restaurants; they wanted great food delivered straight to
          their doorsteps. <br /><br />Then came the COVID-19 pandemic, a crisis
          that forced many businesses to shut down. But with the guidance of Key
          Account Manager Nikesh Kumar, it turned into an unanticipated growth
          engine for Jashn. He explains, “The decision to work with Zomato
          changed our operations and reach for the better! Our orders surged
          threefold during COVID, and our monthly revenue increased 2x between
          2019 and 2024.”
        </p>
      </div>
    </section>

    <!-- Related Tech Blogs -->
    <section class="mt-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(blog, index) in blogs"
          :key="index"
          class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
          :href="`/blogs/${index}`"
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
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "Announcing a free plan for small teams",
          description:
            "At Wake, our mission has always been focused on bringing openness.",
          image:
            "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

          author: "Lauren Waller",
          authorImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
        {
          title: "How Google Assistant now helps you record stories for kids",
          description:
            "Google is constantly updating its consumer AI, Google Assistant, with new features.",
          image:
            "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
        {
          title: "Front accounts - let's work together",
          description:
            "Are you an accountant? Are you a company formation advisor?",
          image:
            "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
      ],
    };
  },
};
</script>
