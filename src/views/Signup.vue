<script setup lang="ts">
console.log("this will be the signup page");
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let email = ref("");
let password = ref("");

const handleSignUpSubmit = () => {

  console.log(email.value, password.value)
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


</script>

<template>
  <h1>Signup Screen</h1>
  <p>{{ email }}</p>
  <p>{{ password }}</p>
  <form v-on:submit.prevent="handleSignUpSubmit">
    <h3>Sign Up For New Account</h3>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button type="submit">Sign Up!</button>
  </form>
</template>
