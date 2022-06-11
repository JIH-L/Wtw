<template>
  <div>
    <h1>Login</h1>
    <h2 v-if="this.$store.getters.user">
      User: {{ this.$store.getters.user.displayName }}
    </h2>
    <button @click="handleSignInGoogle" v-if="!this.$store.getters.user">
      Sign In
    </button>
    <button @click="handleSignOut" v-if="this.$store.getters.user">
      Sign Out
    </button>
  </div>
</template>
<script>
import firebaseConfig from "../firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
firebaseConfig;
const provider = new GoogleAuthProvider();
const auth = getAuth();
export default {
  data() {
    return {
      isSignedIn: false,
    };
  },
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          this.isSignedIn = true;
          this.updateUserInfoHandler(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSignOut() {
      signOut(auth)
        .then(() => {
          this.isSignedIn = false;
          this.updateUserInfoHandler();
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
    updateUserInfoHandler(user) {
      this.$store.dispatch("updateUser", user);
    },
  },
};
</script>