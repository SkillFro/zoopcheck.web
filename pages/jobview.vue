<template>
  <div class="pt-10 bg-[#f8f9fa]">
    <!-- hero section -->
    <div
      class="bg-[url('/images/jobview.jpg')] bg-center bg-cover bg-black/70 bg-blend-overlay w-full md:h-[348px] h-[408px] flex justify-center items-end md:py-10 p-5"
    >
      <div
        class="lg:flex lg:flex-row lg:w-[1080px] w-[576px] xl:justify-between lg:justify-center flex flex-col justify-center md:gap-10 gap-5"
      >
        <div class="flex flex-col gap-3">
          <label
            class="px-[10px] py-[5px] text-[12px] rounded text-[#ddd] bg-[#FFFFFF29] w-fit"
          >
            Job opening
          </label>
          <h3
            class="text-[#eee] md:text-[25px] text-[22px] leading-[35px] font-bold"
          >
            Web Designer and Developer,Company Name
          </h3>

          <div
            class="flex flex-wrap items-center gap-3 md:flex md:flex-row md:items-center"
          >
            <div class="flex items-center gap-2">
              <img
                src="/public/images/locationdot.svg"
                class="w-[17px] h-[17px]"
                alt=""
              />
              <p
                class="text-[#cccccc] text-[14px] md:text-[17px] leading-[25px]"
              >
                London
              </p>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="/public/images/hand.svg"
                class="w-[17px] h-[17px]"
                alt=""
              />
              <p
                class="text-[#cccccc] text-[14px] md:text-[17px] leading-[25px]"
              >
                Full Time
              </p>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="/public/images/clock.svg"
                class="w-[17px] h-[17px]"
                alt=""
              />
              <p
                class="text-[#cccccc] text-[14px] md:text-[17px] leading-[25px]"
              >
                1 year ago
              </p>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="/public/images/dollar.svg"
                class="w-[17px] h-[17px]"
                alt=""
              />
              <p
                class="text-[#cccccc] text-[14px] md:text-[17px] leading-[25px]"
              >
                $2300-$4500/monthly
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-4 lg:w-fit md:flex md:flex-row md:justify-center lg:flex lg:flex-col lg:justify-start"
        >
          <a href="#">
            <button
              class="md:px-[67px] md:py-[14px] px-10 py-2 rounded bg-[#2966f4] text-white w-full md:w-fit"
            >
              Apply Now
            </button></a
          >
          <a href="#">
            <button
              class="md:px-[20px] md:py-[14px] p-3 rounded bg-[#2966f4] text-white flex items-center gap-3 w-full md:w-fit justify-center"
            >
              <img
                src="/public/images/linkedin.svg"
                class="md:w-[20px] md:h-[20px] h-[15px] w-[15px]"
                alt=""
              />
              <span>Apply With Linkedin</span>
            </button></a
          >
        </div>
      </div>
    </div>

    <!-- jobinformation -->
    <div
      class="xl:max-w-[1080px] mx-auto py-[70px] xl:flex xl:flex-row flex flex-col xl:items-start gap-5 lg:max-w-[768px] md:max-w-[576px] max-w-full px-3"
    >
      <div class="flex flex-col gap-[20px]">
        <div
          class="lg:w-[757px] md:w-[576px] w-full bg-white p-5 md:p-[30px] flex flex-col gap-5 shadow-lg"
        >
          <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
            Job Information
          </h5>
          <div
            class="grid md:[grid-template-columns:1fr_1fr_1fr] [grid-template-columns:1fr_1fr] gap-y-4"
          >
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">Category</h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  Web Designer
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">
                  Work Shift
                </h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  Day Shift
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">
                  Posted on
                </h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  Oct 7, 2019
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">
                  No. of openings
                </h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  2 openings
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">
                  Job level
                </h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  Executive
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div>
                <img
                  src="/public/images/checkbox.svg"
                  class="w-[20px] h-[28px]"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-[18px] font-medium text-[#2c3038]">
                  Job experience
                </h4>
                <p class="text-[16px] leading-[25px] text-[#555a64]">
                  3years of exp
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:w-[757px] md:w-[576px] w-full bg-white p-[30px] flex flex-col gap-5 shadow-lg"
        >
          <div class="flex flex-col gap-[20px]">
            <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
              Job description
            </h5>
            <p class="text-[16px] leading-[25px] text-[#555a64]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. orci
              urna. In et augue ornare, tempor massa in, luctus sapien. Proin a
              diam et dui fermentum dolor molestie vel id neque. Donec sed
              tempus enim, a congue risus. Pellen tesqu euismod massa a quam
              viverra interdum urna vel id neque, Fermentum viverra eros.
              Praesent neque purus, rhoncus nec nibh non, mollis sodales odio.
              Nullam facilisis diam non magna porta luctus. Aenean facilisis
              erat posuere erat ornare ultrices. Aliquam ac arcu interdum,
              dapibus nibh convallis, semper augue.
            </p>
            <p class="text-[16px] leading-[25px] text-[#555a64]">
              Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh
              non, mollis sodales odio. Nullam facilisis diam non magna porta
              luctus. Aenean facilisis erat posuere erat ornare ultrices.
              Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
            </p>
          </div>

          <div class="flex flex-col gap-[30px]">
            <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
              Responsibilities
            </h5>
            <ul class="flex flex-col gap-[10px] pl-[40px]">
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac
                arcu nibh, semper augue.
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh
                non, mollis sodales odio. Nullam facilisis diam non magna porta
                luctus. Aenean facilisis erat posuere.
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Nullam facilisis diam non magna porta luctus. Aenean facilisis
                erat posuere erat ornare ultrices. Aliquam ac arcu interdum,
                dapibus nibh convallis, semper augue.
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-[30px]">
            <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
              What we are looking for:
            </h5>
            <ul class="flex flex-col gap-[10px] pl-[40px]">
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Minimum of a Bachelor’s/College Degree
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                At least 2-3 years of working experience as a writer or editor
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Ability to communicate and coordinate effectively and
                collegially with team members.
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                A strong interest in real estate or business news
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Ability to move quickly from one task to another
              </li>
              <li class="text-[16px] leading-[25px] text-[#555a64] list-disc">
                Ability to work under tight deadline
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-[30px]">
            <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
              Share this job
            </h5>
            <div class="flex items-center gap-2">
              <a href="#">
                <img
                  src="/public/images/facebook.svg"
                  class="w-[35px] h-[35px]"
                  alt=""
              /></a>
              <a href="#">
                <img
                  src="/public/images/twitter.svg"
                  class="w-[35px] h-[35px]"
                  alt=""
              /></a>
              <a href="#">
                <img
                  src="/public/images/linkedin2.svg"
                  class="w-[35px] h-[35px]"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
        <div
          class="lg:w-[757px] md:w-[576px] w-full bg-white p-[30px] flex flex-col gap-5 shadow-lg"
        >
          <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
            Job Skills
          </h5>
          <div class="flex flex-wrap items-center gap-1">
            <a
              href="#"
              class="bg-[#f2f2f2] px-[10px] py-[8px] rounded text-[15px] text-[#555a64] border border-[#cccaca]"
              >Designing</a
            >
            <a
              href="#"
              class="bg-[#f2f2f2] px-[10px] py-[8px] rounded text-[15px] text-[#555a64] border border-[#cccaca]"
              >Management</a
            >
            <a
              href="#"
              class="bg-[#f2f2f2] px-[10px] py-[8px] rounded text-[15px] text-[#555a64] border border-[#cccaca]"
              >Coding</a
            >
          </div>
        </div>
      </div>

      <!-- Aside -->
      <div
        class="xl:flex xl:flex-col grid md:grid-cols-(3,1fr) lg:max-w-[768px] xl:max-w-[303px] gap-[20px]"
      >
        <div
          class="flex gap-2 p-[20px] bg-[#00BCD4] rounded w-full relative overflow-hidden"
        >
          <img
            src="/public/images/clock.svg"
            class="w-[44px] h-[44px]"
            alt=""
          />
          <div class="flex flex-col">
            <small class="text-[16px] leading-[20px] text-[#fff]"
              >Deadline</small
            >
            <strong class="text-[18px] leading-[24px] font-medium text-[#fff]"
              >December 31, 2019</strong
            >
          </div>
          <div class="absolute -bottom-3 -right-2 rotate-12 opacity-35">
            <img
              src="/public/images/clock.svg"
              class="w-[44px] h-[44px]"
              alt=""
            />
          </div>
        </div>
        <div class="p-[20px] bg-[#2966f4] text-[#fff] text-center">
          <a href="#">Save This Job</a>
        </div>
        <div class="p-[20px] bg-[#333] text-[#fff] text-center">
          <a href="#">Email This Job</a>
        </div>
        <div class="bg-[#fff] p-[30px] shadow-lg">
          <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
            Advertisement
          </h5>
        </div>
        <div class="flex flex-col gap-[20px] p-[30px] bg-[#fff] shadow-lg">
          <h5 class="text-[23px] leading-[30px] font-normal text-[#2c3038]">
            Job Tags
          </h5>
          <div class="flex flex-wrap gap-1">
            <a
              href="#"
              class="bg-[#f2f2f275] px-[10px] py-[8px] rounded-full text-[15px] border border-[#cccaca] text-black/75"
              >#Designing</a
            >
            <a
              href="#"
              class="bg-[#f2f2f275] px-[10px] py-[8px] rounded-full text-[15px] border border-[#cccaca] text-black/75"
              >#Coding</a
            >
            <a
              href="#"
              class="bg-[#f2f2f275] px-[10px] py-[8px] rounded-full text-[15px] border border-[#cccaca] text-black/75"
              >#.Net</a
            >
            <a
              href="#"
              class="bg-[#f2f2f275] px-[10px] py-[8px] rounded-full text-[15px] border border-[#cccaca] text-black/75"
              >#Management</a
            >
            <a
              href="#"
              class="bg-[#f2f2f275] px-[10px] py-[8px] rounded-full text-[15px] border border-[#cccaca] text-black/75"
              >#Java</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ],
});
</script>
