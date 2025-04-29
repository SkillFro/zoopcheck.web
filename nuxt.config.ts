// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  app: {
    head: {
      title: "ZoopCheck",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css",'notivue/notification.css',
    'notivue/animations.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  auth: {
    // globalAppMiddleware: true,
    baseURL: process.env.BASE_URL,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/auth/login", method: "post" },
        signOut: false,
        signUp: { path: "/auth/register", method: "post" },
        getSession: { path: "/auth/me", method: "get" },
      },
      token: {
        signInResponseTokenPointer: "/accessToken",
        type: "Bearer",
        cookieName: "auth.accessToken",
        headerName: "Authorization",
        maxAgeInSeconds: 15 * 60,
        sameSiteAttribute: "lax",
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      refresh: {
        isEnabled: true,
        endpoint: { path: "/auth/refresh-token", method: "post" },
        refreshOnlyToken: false,
        token: {
          signInResponseRefreshTokenPointer: "/refreshToken",
          refreshResponseTokenPointer: "",
          refreshRequestTokenPointer: "/refreshToken",
          cookieName: "auth.refreshToken",
          maxAgeInSeconds: 15 * 24 * 60,
          sameSiteAttribute: "lax",
          secureCookieAttribute: false,
          httpOnlyCookieAttribute: false,
        },
      },
      pages: {
        login: '/signin'
      }
    },
    sessionRefresh: {
      enablePeriodically: 10*60*1000,
      enableOnWindowFocus: true,
    }
  },

  compatibilityDate: "2025-04-08",
  modules: ["@sidebase/nuxt-auth",'notivue/nuxt'],
});
