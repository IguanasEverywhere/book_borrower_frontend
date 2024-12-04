<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let email = ref("");
let password = ref("");
let errorMessage = ref("");

const handleLoginSubmit = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("hello, ", user.email);
      errorMessage.value = "";
    })
    .catch((error) => {
      errorMessage.value = error.message;
    });
};
</script>

<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="handleLoginSubmit">
    <p>{{ errorMessage }}</p>
    <h3>Login to your Account</h3>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button type="submit">Sign Up!</button>
  </form>
</template>
