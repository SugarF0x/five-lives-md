<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData('home', () => queryContent(path).findOne())
</script>

<template>
  <NuxtLayout :name="data.layout || 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  background-color: $background;
}
</style>
