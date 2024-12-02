<script setup lang="ts">
    console.log('this will be the login page')
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, 'scottschwab86@gmail.com', 'testpw123')
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("hello, ", user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
</script>

<template>
    <h1>Login Screen</h1>
</template>