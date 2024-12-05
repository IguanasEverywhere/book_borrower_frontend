<script setup lang="ts">
console.log("Navbar is happening...")
</script>

<template>
  <RouterLink to="/dashboard">Dashboard</RouterLink>
  <RouterLink to="/library">Library</RouterLink>
  <RouterLink to="/users">Users</RouterLink>
  <RouterLink to="user-reviews">My Reviews</RouterLink>
  <RouterLink to="/my-books">My Books</RouterLink>
  <RouterLink to="/signup">Sign Up</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
</template>