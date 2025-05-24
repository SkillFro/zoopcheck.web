<template>
  <div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <a href="/">
        <img
          class="mx-auto h-20 w-auto"
          src="/public/images/logo.svg"
          alt="Your Company"
        />
      </a>
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Sign Up your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900">
            <span v-if="role === 'recruiter'">Company</span> Name
          </label>
          <div class="mt-2">
            <input
              v-model="name"
              type="name"
              name="name"
              id="name"
              autocomplete="name"
              required
              :class="[
                'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6',
                nameError
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-[#086BD8]',
              ]"
            />
            <p v-if="nameError" class="mt-1 text-sm text-red-600">
              {{ nameError }}
            </p>
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              :class="[
                'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6',
                emailError
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-[#086BD8]',
              ]"
            />
            <p v-if="emailError" class="mt-1 text-sm text-red-600">
              {{ emailError }}
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2 relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              :class="[
                'block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6',
                passwordError
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-[#086BD8]',
              ]"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              <svg
                v-if="!showPassword"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            </button>

            <!-- Password Requirements -->
            <div class="mt-2 space-y-1">
              <div class="flex items-center text-xs">
                <span
                  :class="
                    passwordValidation.length
                      ? 'text-green-600'
                      : 'text-red-600'
                  "
                >
                  {{ passwordValidation.length ? "✓" : "✗" }}
                </span>
                <span
                  class="ml-1"
                  :class="
                    passwordValidation.length
                      ? 'text-green-600'
                      : 'text-gray-600'
                  "
                >
                  At least 8 characters
                </span>
              </div>
              <div class="flex items-center text-xs">
                <span
                  :class="
                    passwordValidation.uppercase
                      ? 'text-green-600'
                      : 'text-red-600'
                  "
                >
                  {{ passwordValidation.uppercase ? "✓" : "✗" }}
                </span>
                <span
                  class="ml-1"
                  :class="
                    passwordValidation.uppercase
                      ? 'text-green-600'
                      : 'text-gray-600'
                  "
                >
                  One uppercase letter
                </span>
              </div>
              <div class="flex items-center text-xs">
                <span
                  :class="
                    passwordValidation.special
                      ? 'text-green-600'
                      : 'text-red-600'
                  "
                >
                  {{ passwordValidation.special ? "✓" : "✗" }}
                </span>
                <span
                  class="ml-1"
                  :class="
                    passwordValidation.special
                      ? 'text-green-600'
                      : 'text-gray-600'
                  "
                >
                  One special character (!@#$%^&*)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            @click="signUp"
            type="submit"
            :disabled="!isFormValid || loading"
            :class="[
              'flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086BD8]',
              !isFormValid || loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#086BD8] hover:bg-[#0757b8]',
            ]"
          >
            <span v-if="!loading">Sign up</span>
            <span
              v-else
              class="border-2 border-white border-l-slate-400 w-5 h-5 rounded-full animate-spin"
            ></span>
          </button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already a member?
        <a
          href="/signin"
          class="font-semibold text-[#086BD8] hover:text-[#086BD8]"
          >Sign In</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({ layout: "primary" });
  },
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      password: "",
      role: useRoute().query.role,
      showPassword: false,
    };
  },
  computed: {
    nameError() {
      if (this.name.length === 0) return null;
      if (this.name.length < 2) return "Name must be at least 2 characters";
      return null;
    },
    emailError() {
      if (this.email.length === 0) return null;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email))
        return "Please enter a valid email address";
      return null;
    },
    passwordError() {
      if (this.password.length === 0) return null;
      if (!this.isPasswordValid) return "Password does not meet requirements";
      return null;
    },
    passwordValidation() {
      return {
        length: this.password.length >= 8,
        uppercase: /[A-Z]/.test(this.password),
        special: /[!@#$%^&*]/.test(this.password),
      };
    },
    isPasswordValid() {
      return (
        this.passwordValidation.length &&
        this.passwordValidation.uppercase &&
        this.passwordValidation.special
      );
    },
    isFormValid() {
      return (
        this.name.length >= 2 &&
        this.email.length > 0 &&
        !this.emailError &&
        this.isPasswordValid
      );
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async signUp() {
      // Final validation check
      if (!this.isFormValid) {
        push.error({
          title: "Error",
          message: "Please fill all fields correctly",
        });
        return;
      }

      this.loading = true;
      try {
        await useAuth().signUp(
          {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
          },
          {
            callbackUrl: "/signin",
            redirect: true,
          }
        );

        push.success({ title: "Success", message: "You Signed up!" });
      } catch (err) {
        push.error({ title: "Error", message: "Something went wrong" });
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {},
};
</script>
