<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  console.log("signed out!")
}).catch((error) => {
  console.log(error)
});
</script>

<template>
  <h1>Logout...</h1>
</template>