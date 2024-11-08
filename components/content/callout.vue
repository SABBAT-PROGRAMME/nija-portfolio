### Capture 2 : `Callout.vue` (Composant Vue) ```vue

<template>
  <div
    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex">
      <div class="py-1">
        <svg
          class="fill-current h-6 w-6 text-teal-500 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07a10 10 0 1 1 14.14 0 1 1 1 0 0 0 .93-1v-2h-1v2a9.97 9.97 0 0 0-14.14 0z"
          ></path>
        </svg>
      </div>
      <div>
        <p class="font-bold">{{ props.title }}</p>
        <p class="text-sm">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Callout",
  },
});
</script>
