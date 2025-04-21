<template>
  <section class="mt-30">

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">The case studies</h2>
        <p class="mt-1 text-gray-600 ">See how game-changing companies are making the most of every
          engagement with Preline.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a v-for="blog in blogs" class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 "
          href="/blog">
          <div class="aspect-w-16 aspect-h-11">
            <img class="w-full object-cover rounded-xl"
              :src="blog.image" alt="Blog Image">
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 ">
              {{ blog.title }}
            </h3>
            <p class="mt-5 text-gray-600 ">
              {{ blog.description }}
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <img class="size-8 rounded-full"
              :src="blog.authorImage" alt="Avatar">
            <div>
              <h5 class="text-sm text-gray-800 ">By {{ blog.author }}</h5>
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
          title: "Announcing a free plan for small teams",
          description: "At Wake, our mission has always been focused on bringing openness.",
          image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          author: "Lauren Waller"
        },
        {
          title: "How Google Assistant now helps you record stories for kids",
          description: "Google is constantly updating its consumer AI, Google Assistant, with new features.",
          image: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",

        },
        {
          title: "Front accounts - let's work together",
          description: "Are you an accountant? Are you a company formation advisor?",
          image: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",

        },
        {
          title: "Announcing a free plan for small teams",
          description: "At Wake, our mission has always been focused on bringing openness.",
          image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          author: "Lauren Waller"
        },
        {
          title: "How Google Assistant now helps you record stories for kids",
          description: "Google is constantly updating its consumer AI, Google Assistant, with new features.",
          image: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",

        },
        {
          title: "Front accounts - let's work together",
          description: "Are you an accountant? Are you a company formation advisor?",
          image: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
          author: "Lauren Waller",
          authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",

        }
      ]
    };
  },
};
</script>
