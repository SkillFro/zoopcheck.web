<template>
  <div class="bg-[#f8f9fa] h-screen flex justify-center items-center">
    <!-- Login -->
    <div
      v-if="login"
      class="lg:flex lg:flex-row flex flex-col items-center justify-center w-full md:max-w-[1100px] md:mx-auto px-2"
    >
      <div
        class="md:w-[400px] h-[550px] w-full bg-white border px-4 md:px-8 py-5 flex flex-col gap-[12px] shadow-xl"
      >
        <div
          class="flex items-center justify-center lg:items-start lg:justify-start lg:flex"
        >
          <img src="/public/images/logo.svg" class="w-[150px]" alt="" />
        </div>
        <div class="text-center lg:text-start">
          <h3 class="text-[25px] font-semibold text-[#2c3038]">Welcome Back</h3>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              v-model="loginForm.email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              v-model="loginForm.password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <input
              @click="togglePasswordVisibility()"
              type="checkbox"
              name="checkbox"
              id="showpassword"
              class="w-[15px] h-[15px]"
            />
            <p class="">Show Me Password</p>
          </div>
          <div>
            <button
              @click="handleLogin"
              class="p-3 rounded bg-[#2966f4] text-white w-full"
              :disabled="loading"
            >
              <span v-if="loading">Logging in...</span>
              <span v-else>Login</span>
            </button>
          </div>
        </div>
        <hr />
        <div class="text-center">
          <p class="text-[16px] leading-[25px] text-[#2c3038]">
            Don't have an account?
            <span @click="toggleLogin()" class="text-[#2966f4] cursor-pointer"
              >Sign up now</span
            >
          </p>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="/public/images/loginimage.png"
          class="w-[440px] h-[550px] object-contain"
          alt=""
        />
      </div>
    </div>

    <!-- Signup -->
    <div
      v-if="signup"
      class="lg:flex lg:flex-row-reverse flex flex-col-reverse items-center justify-center w-full lg:max-w-[1100px] lg:mx-auto px-2"
    >
      <div
        class="md:w-[400px] h-[550px] w-full bg-white border px-3 md:px-8 md:py-3 py-5 flex flex-col gap-[10px] shadow-xl"
      >
        <div class="text-center">
          <h3 class="text-[25px] font-semibold text-[#2c3038]">Hi Welcome</h3>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-center gap-2">
          <button
            id="recruiter"
            @click="toggleRecruiter()"
            class="px-6 py-2 :font-medium :text-[16px] border rounded transition-all duration-300 font-medium hover:bg-[#333333] hover:text-white"
            :class="
              recruiter ? 'bg-[#333333] text-white' : 'bg-white text-black'
            "
          >
            Recruiter?
          </button>
          <button
            id="canditate"
            @click="toggleCanditate()"
            class="px-6 py-2 :font-medium :text-[16px] border rounded transition-all duration-300 font-medium hover:bg-[#333333] hover:text-white"
            :class="
              canditate ? 'bg-[#333333] text-white' : 'bg-white text-black'
            "
          >
            Candidate?
          </button>
        </div>

        <!-- Recruiter -->
        <div v-if="recruiter" class="flex flex-col gap-[8px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Name </label>
            <input
              v-model="signupForm.name"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <p v-if="signupErrors.name" class="mt-1 text-sm text-red-600">
              {{ signupErrors.name }}
            </p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              v-model="signupForm.email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <p v-if="signupErrors.email" class="mt-1 text-sm text-red-600">
              {{ signupErrors.email }}
            </p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              v-model="signupForm.password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <p v-if="signupErrors.password" class="mt-1 text-sm text-red-600">
              {{ signupErrors.password }}
            </p>
            <div class="flex items-center gap-3">
              <input
                @click="togglePasswordVisibility()"
                type="checkbox"
                name="checkbox"
                id="showpassword"
                class="w-[15px] h-[15px]"
              />
              <p class="">Show Me Password</p>
            </div>
          </div>

          <div>
            <button
              @click="handleSignup"
              class="p-3 rounded bg-[#2966f4] text-white w-full"
              :disabled="loading"
            >
              <span v-if="loading">Registering...</span>
              <span v-else>Register</span>
            </button>
          </div>
          <div v-if="signupError" class="text-sm text-center text-red-500">
            {{ signupError }}
          </div>
          <hr />
          <div class="text-center">
            <p class="text-[16px] leading-[25px] text-[#2c3038]">
              Already have an account?
              <span
                @click="toggleSignup()"
                class="text-[#2966f4] cursor-pointer"
                >Login now</span
              >
            </p>
          </div>
        </div>

        <!-- Candidate -->
        <div v-if="canditate" class="flex flex-col gap-[8px]">
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Name </label>
            <input
              v-model="signupForm.name"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#">Email </label>
            <input
              v-model="signupForm.email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
          </div>
          <div class="flex flex-col gap-[10px]">
            <label class="font-semibold text-[#2c3038]" for="#"
              >Password
            </label>
            <input
              v-model="signupForm.password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full rounded-md bg-[#F3F4F6] px-[20px] py-[12px] text-[16px] placeholder:text-[#555a64] outline-none"
            />
            <div class="flex items-center gap-3">
              <input
                @click="togglePasswordVisibility()"
                type="checkbox"
                name="checkbox"
                id="showpassword"
                class="w-[15px] h-[15px]"
              />
              <p class="">Show Me Password</p>
            </div>
          </div>

          <div>
            <button
              @click="handleSignup"
              class="p-3 rounded bg-[#2966f4] text-white w-full"
              :disabled="loading"
            >
              <span v-if="loading">Registering...</span>
              <span v-else>Register</span>
            </button>
          </div>
          <div v-if="signupError" class="text-sm text-center text-red-500">
            {{ signupError }}
          </div>
          <hr />
          <div class="text-center">
            <p class="text-[16px] leading-[25px] text-[#2c3038]">
              Already have an account?
              <span
                @click="toggleSignup()"
                class="text-[#2966f4] cursor-pointer"
                >Login now</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="/public/images/signupimage.png"
          class="w-[440px] h-[550px] object-contain"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: true,
      signup: false,
      recruiter: true,
      canditate: false,
      loading: false,
      loginError: "",
      signupError: "",
      loginForm: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        email: "",
        password: "",
        role: "recruiter",
      },
      errors: {
        email: null,
        password: null,
      },
      signupErrors: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    toggleLogin() {
      this.login = false;
      this.signup = true;
      this.loginError = "";
    },
    toggleSignup() {
      this.login = true;
      this.signup = false;
      this.signupError = "";
    },
    toggleRecruiter() {
      this.recruiter = true;
      this.canditate = false;
      this.signupForm.role = "recruiter";
    },
    toggleCanditate() {
      this.canditate = true;
      this.recruiter = false;
      this.signupForm.role = "candidate";
    },
    togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      const checkbox = document.getElementById("showpassword");
      passwordInput.type = checkbox.checked ? "text" : "password";
    },
    async handleLogin() {
      if (this.loginForm.email === "") {
        this.errors.email = "Email is Required";
      } else {
        this.errors.email = "";
      }
      if (this.loginForm.password === "") {
        this.errors.password = "Password is Required";
      } else {
        this.errors.password = "";
      }

      this.loading = true;

      try {
        const response = await axios.post(
          "https://zoopcheck-api.vercel.app/api/auth/login",
          {
            email: this.loginForm.email,
            password: this.loginForm.password,
          }
        );

        // Handle successful login
        console.log("Login successful:", response.data);

        // Store the token (you might want to use cookies or localStorage)
        localStorage.setItem("authToken", response.data.token);

        // Redirect to dashboard
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        this.loading = false;
      }
    },
    async handleSignup() {
      if (
        !this.signupForm.name ||
        !this.signupForm.email ||
        !this.signupForm.password
      ) {
        this.signupError = "Please fill in all fields";
        return;
      }

      this.loading = true;
      this.signupError = "";

      try {
        const response = await axios.post(
          "https://zoopcheck-api.vercel.app/api/auth/register",
          {
            name: this.signupForm.name,
            email: this.signupForm.email,
            password: this.signupForm.password,
            role: this.signupForm.role,
          }
        );

        // Handle successful registration
        console.log("Registration successful:", response.data);

        // Optionally auto-login the user after registration
        // Or show a success message and switch to login form
        this.toggleSignup();

        // Clear form
        this.signupForm = {
          name: "",
          email: "",
          password: "",
          role: "recruiter",
        };
      } catch (error) {
        console.error("Registration error:", error);
        this.signupError =
          error.response?.data?.message ||
          "Registration failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
  setup() {
    definePageMeta({
      layout: "primary",
    });
  },
};
</script>
