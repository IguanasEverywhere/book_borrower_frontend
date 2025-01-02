<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Hello user!")
    console.log(user)
  } else {
    console.log('No user')
  }
});

</script>

<template>
  <h1>Library</h1>
</template>