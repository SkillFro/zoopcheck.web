<template>
  <div>
    <nuxt-link to="/blog">
      <div
        class="grid grid-cols-1 gap-8 px-5 mt-5 lg:p-4 md:px-10 lg:mt-20 md:mt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in cards"
          :key="item"
          class="h-full max-w-sm p-4 bg-white border border-slate-200 bg-stone rounded-xl"
        >
          <div class="max-w-sm overflow-hidden">
            <div class="relative">
              <img
                :src="item.image"
                alt="image"
                class="object-cover w-full h-48 rounded-lg"
              />
            </div>
            <div class="mt-4">
              <p class="mb-1 text-sm text-gray-500">{{ item.subtitle }}</p>
              <h2 class="mb-2 text-xl font-bold leading-tight">
                {{ item.title }}
              </h2>
              <p class="mb-4 text-gray-500 text-md line-clamp-3">
                {{ item.description }}
              </p>
              <div class="flex items-center space-x-3">
                <img
                  :src="item.anotherimage"
                  alt="image"
                  class="w-8 h-8 rounded-full"
                />
                <div>
                  <p class="text-sm font-semibold">{{ item.name }}</p>

                  <p class="text-xs text-gray-500">
                    {{ item.date }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
        v-for="item in cards"
        :key="item"
        class="flex flex-col items-center justify-around transition-all duration-1000 shadow-md hover:scale-105"
      >
        <div>
          <img
            :src="item.image"
            alt="image"
            class="lg:w-[406px] lg:h-[304px] w-full rounded-t-md"
          />
        </div>
        <div
          class="lg:w-[406px] lg:h-[206px] flex gap-3 lg:p-2 xl:p-[30px] w-full flex-col bg-white rounded-b-md md:px-3 md:py-2 px-2"
        >
          <h5 class="text-[#555a64] text-[16px]">{{ item.date }}</h5>
          <a
            href="#"
            class="text-[#212529] md:text-[24px] text-[20px] underline"
            >{{ item.link }}</a
          >
          <p class="text-[#555a64] md:text-[18px] text-[16px]">
            {{ item.description }}
          </p>
        </div>
      </div> -->
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
        {
          image: "/tech/blog1.png",
          subtitle: "daily.dev",
          title: "2023 is finally over, let’s wrap it up!",
          description:
            "Discover how daily.dev revolutionized the developer experience in 2023 with the",
          anotherimage: "/dash/user.png",
          name: "Nimrod Kramer",
          date: "2023-12-31",
        },
      ],
    };
  },
};
</script>
