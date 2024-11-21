<script setup lang="ts">
    console.log("Hello from users")
    fetch('https://bqsqxn1jj7.execute-api.us-east-2.amazonaws.com/api/users')
    .then(r => r.json())
    .then(data => console.log(data))

</script>

<template>
  <h1>Dashboard</h1>
</template>