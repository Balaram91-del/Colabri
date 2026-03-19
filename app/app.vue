<script setup>

const colorMode = useColorMode();
colorMode.preference = "light";

useHead({
  title: "Colabri",
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
    }
  ]
})
</script>

<template>
  <div class="website-container">
    <NuxtPage/>
  </div>
</template>

<style>
.website-container{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
</style>
