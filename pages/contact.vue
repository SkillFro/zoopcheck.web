<template>
  <div class="bg-[#f9f9f9] mt-[30px]">
    <div class="relative flex flex-col items-center justify-center">
      <h1
        class="font-semibold md:text-[35px] text-[30px] leading-[24px] text-[#212529] text-center mb-[50px] mt-20"
      >
        Contact Us
      </h1>
      <div
        class="md:w-[180px] w-[120px] bg-[#2966f4] h-0.5 md:-mt-6 -mt-8"
      ></div>
    </div>
    <div class="flex items-center justify-center">
      <div class="max-w-[1228px] flex items-center justify-center">
        <div
          class="w-[614px] h-[633px] drop-shadow-2xl flex flex-col items-center justify-center mx-auto bg-white rounded-[0.375rem] mt-10 mb-10"
        >
          <img
            src="/public/images/logo.jpg"
            alt="logo"
            width="150px"
            height="53px"
            class="-mt-10"
          />
          <div
            class="flex flex-col items-start justify-start px-[60px] mt-[48px]"
          >
            <h2 class="text-[32px] font-medium leading-[38.4px] text-[#2966f4]">
              Partner with us to envision a brand new future for your business.
            </h2>
            <div class="flex flex-col gap-5 mt-[48px]">
              <p
                class="text-[16px] leading-[19.2px] font-medium text-[#212529] underline"
              >
                Emai
              </p>
              <p class="text-[16px] leading-[25px] text-[#555a64] font-normal">
                hello@zoopcheck.com
              </p>
            </div>
            <div class="flex flex-col gap-5 mt-10">
              <p
                class="text-[16px] leading-[19.2px] font-medium text-[#212529] underline"
              >
                Reach us
              </p>
              <p class="text-[16px] leading-[25px] text-[#555a64] font-normal">
                +91 78457 41717
              </p>
            </div>
            <div class="flex flex-col gap-5 mt-10">
              <p
                class="text-[16px] leading-[19.2px] font-medium text-[#212529] underline"
              >
                Location
              </p>
              <p class="text-[16px] leading-[25px] text-[#555a64] font-normal">
                Chennai
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-[614px] h-[633px] mx-auto bg-[#2966f4] rounded-[0.375rem] mt-10 mb-10 p-5 px-10"
        >
          <div class="flex flex-col items-start justify-start w-full mt-5">
            <h4 class="text-[30px] leading-[35px] text-white font-medium">
              Get in Touch
            </h4>
            <div class="w-full mt-4">
              <label
                for="name"
                class="text-[16px] w-full text-white leading-[24px] font-normal"
                >Name</label
              >
              <input
                type="text"
                placeholder="Enter your name"
                class="text-[#212529] bg-white w-full h-[40px] rounded-[0.375rem] mt-2 pl-4"
              />
            </div>
            <div class="w-full mt-4">
              <label
                for="name"
                class="text-[16px] text-white leading-[24px] font-normal"
                >Contact Number</label
              >
              <input
                type="text"
                placeholder="Enter Contact Number"
                class="text-[#212529] bg-white w-full h-[40px] rounded-[0.375rem] mt-2 pl-4"
              />
            </div>
            <div class="w-full mt-4">
              <label
                for="name"
                class="text-[16px] text-white leading-[24px] font-normal"
                >Email</label
              >
              <input
                type="text"
                placeholder="Enter Your Email"
                class="text-[#212529] bg-white w-full h-[40px] rounded-[0.375rem] mt-2 pl-4"
              />
            </div>
            <div class="w-full mt-4">
              <label
                for="name"
                class="text-[16px] text-white leading-[24px] font-normal"
                >Message</label
              >
              <div class="w-full">
                <textarea
                  name=""
                  id=""
                  class="w-full pl-4 text-[#212529] bg-white rounded-[0.375rem] mt-2"
                  placeholder="Type.Your query here"
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div class="w-full mt-4">
              <label
                for="name"
                class="text-[16px] text-white leading-[24px] font-normal"
                >Upload File</label
              >
              <input
                type="file"
                class="text-[#212529] bg-white w-full h-[30px] rounded-[0.375rem] mt-2"
              />
            </div>
            <div class="flex justify-end w-full mt-6">
              <button
                class="text-[16px] text-[#2966f4] bg-white font-normal p-2.5 px-14 right-0"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
