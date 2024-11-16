<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <RouterLink to="/dashboard">Dashboard</RouterLink>
  <RouterLink to="/library">Library</RouterLink>
</template>

<style scoped>

</style>
