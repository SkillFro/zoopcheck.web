<template>
  <div>
    <div
      class="grid grid-cols-1 gap-8 px-5 mt-5 lg:p-4 md:px-10 lg:mt-20 md:mt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="item in cards"
        :key="item"
        class="flex flex-col items-center justify-around transition-all duration-1000 shadow-md hover:scale-105"
      >
        <div>
          <img
            :src="item.image"
            alt="image"
            class="lg:w-[456px] lg:h-[304px] w-full rounded-t-md"
          />
        </div>
        <div
          class="lg:w-[456px] lg:h-[206px] flex gap-3 lg:p-2 xl:p-[30px] w-full flex-col bg-white rounded-b-md md:px-3 md:py-2 px-2"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog2.jfif",
          date: "April 1, 2023.",
          link: "Resume Writing Do's and Don'ts",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog3.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog4.jpg",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog5.jpg",
          date: "April 1, 2023.",
          link: "Resume Writing Do's and Don'ts",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog6.jpg",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog7.jpg",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog8.jpg",
          date: "April 1, 2023.",
          link: "Resume Writing Do's and Don'ts",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/tech/blog9.jpg",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
      ],
    };
  },
};
</script>
