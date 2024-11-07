<!-- tamplate -->
<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-gray-300 flex flex-row pt-8"
    >
      <p class="flex-1">&copy; Your Name 2024. All Rights Reserved.</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icone" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<!-- script -->

<script lang="ts" setup>
const links = [
  {
    name: "Github",
    href: "https://github.com/sabbatlumpatshia",
    icone: "👋",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sabbatlumpatshia",
    icone: "👋",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sabbat-lumpatshia/",
    icone: "👋",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sabbat.lumpatshia",
    icone: "👋",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sabbatlumpatshia/",
    icone: "👋",
  },
];
</script>

<!-- style -->
<style></style>
