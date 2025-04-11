<template>
  <div @click="arrow()" class="fixed bottom-0 right-0 z-50 m-5">
    <img
      class="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
      src="/public/images/arrow.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  methods: {
    arrow() {
      document.body.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
