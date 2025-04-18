<template>
  <div class="max-w-[1120px] mx-auto p-4 sm:p-6 lg:p-10 mt-20">
    <!-- Blog Header -->
    <section class="py-8 dark:bg-[#0B0D10]">
      <div class="flex flex-col gap-4 mx-auto max-w-7xl">
        <h1
          class="text-2xl font-extrabold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl dark:text-white"
        >
          Adding the daily.dev DevCard to your GitHub profile
        </h1>
        <p
          class="mt-2 text-xs tracking-wide text-gray-700 uppercase sm:text-sm dark:text-gray-400"
        >
          Feb 20, 2024
        </p>
      </div>
    </section>

    <!-- Image and Author Section -->
    <section class="grid items-start grid-cols-1 gap-6 mt-10 lg:grid-cols-3">
      <!-- Blog Image -->
      <div class="col-span-2">
        <img
          src="/tech/blog1.png"
          alt="Blog cover"
          class="object-cover w-full h-auto rounded-lg"
        />
      </div>

      <!-- Author Info -->
      <div
        class="sticky top-20 bg-white dark:bg-[#1c1f24] border border-slate-200 dark:border-gray-700 rounded-xl p-5 shadow-sm"
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
      </div>
    </section>

    <!-- Blog Content -->
    <section class="mt-10 space-y-8 text-gray-800 dark:text-gray-300">
      <div>
        <h2 class="mt-6 text-2xl font-semibold">
          How two young dreamers built a crowd-favourite eatery in Ranchi
        </h2>
        <p class="mt-4 text-lg">
          Brothers Nishant and Vikash Ranjan had a dream—to create a space where
          people could come together over warm vibes while enjoying
          unforgettable meals...
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-semibold">A dream takes shape</h2>
        <p class="mt-4 text-lg">
          After completing high school in Ranchi, Nishant and Vikash moved to
          Mumbai for further studies...
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-semibold">Building a standout brand</h2>
        <p class="mt-4 text-lg">
          The first few months were tough. Ranchi was already home to
          established food giants...
        </p>
      </div>

      <div>
        <h2 class="mt-6 text-2xl font-semibold">Adapting and growing</h2>
        <p class="mt-4 text-lg">
          By 2018, Nishant noticed a shift in dining habits—people weren’t just
          visiting restaurants...
        </p>
      </div>
    </section>

    <!-- Related Tech Blogs -->
    <section class="mt-16">
      <div class="flex flex-col items-center justify-center gap-4">
        <TechBlog />
      </div>
    </section>
  </div>
</template>
