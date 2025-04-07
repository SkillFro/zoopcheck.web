<template>
  <div>
    <div>
      <div>
        <img
          :src="image"
          alt="image"
          class="w-[456px] h-[304px] rounded-t-md"
        />
      </div>
      <div
        class="w-[456px] h-[206px] flex gap-3 p-3 flex-col bg-white rounded-b-md"
      >
        <h5 class="text-[#555a64] text-[16px]">{{ date }}</h5>
        <a href="#" class="text-[#212529] text-[24px] underline">{{ link }}</a>
        <p class="text-[#555a64] text-[18px]">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "date", "link", "description"],
};
</script>
