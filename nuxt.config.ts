// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon-tw", "@nuxt/content"],
  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "vue", "html", "java", "json", "bash", "css"],
    },
  },
});
