// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Static site generation for GitHub Pages
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  // App configuration
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/mapkloud-website/" : "/",
    head: {
      title: "MapKloud - Technology Consulting & Digital Transformation",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "MapKloud transforms your business processes with digital transformation and technology consulting. Modern solutions for cloud, IoT, and DevOps.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // Modules
  modules: ["@nuxtjs/tailwindcss"],
});
