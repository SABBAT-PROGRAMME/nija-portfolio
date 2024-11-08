<!-- tamplate -->
<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-gray-300 flex flex-row pt-8"
    >
      <p class="flex-1">&copy; Your Name 2024. All Rights Reserved.</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<!-- script -->

<script lang="ts" setup>
const links = [
  { name: "GitHub", href: "https://github.com", icon: "⚪" },
  { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
  { name: "Facebook", href: "https://facebook.com", icon: "📘" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "🔗" },
  { name: "Instagram", href: "https://instagram.com", icon: "📷" },
];
</script>

<!-- style -->
<style></style>
