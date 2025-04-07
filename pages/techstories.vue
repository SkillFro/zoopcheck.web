<template>
  <div class="bg-[#f9f9f9] mt-28">
    <div class="relative flex flex-col items-center justify-center">
      <h1
        class="font-semibold text-[35px] leading-[24px] text-[#212529] text-center mb-[50px] mt-20"
      >
        Latest blog
      </h1>
      <div class="w-[180px] bg-[#2966f4] h-0.5 -mt-6"></div>
    </div>
    <div class="flex items-center justify-around gap-4 mt-20">
      <div v-for="item in cards" :key="item">
        <Card
          :image="item.image"
          :date="item.date"
          :link="item.link"
          :description="item.description"
        >
        </Card>
      </div>
    </div>
    <div class="flex items-center justify-around gap-4 mt-10">
      <div v-for="item in items" :key="item">
        <Card
          :image="item.image"
          :date="item.date"
          :link="item.link"
          :description="item.description"
        >
        </Card>
      </div>
    </div>
    <div class="flex items-center justify-around gap-4 mt-10">
      <div v-for="item in indexs" :key="item">
        <Card
          :image="item.image"
          :date="item.date"
          :link="item.link"
          :description="item.description"
        >
        </Card>
      </div>
    </div>
    <div class="mt-5">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
      ],
      items: [
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
      ],
      indexs: [
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
          date: "April 1, 2023.",
          link: "What to wear to a job interview",
          description:
            "Donec sed tempus enim, a congue risus. Pellentesque euismod massa a quam viverra interdum",
        },
        {
          image: "/public/Tech/blog1.jfif",
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
