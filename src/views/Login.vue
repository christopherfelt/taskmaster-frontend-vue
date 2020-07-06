<template>
  <div>
    <div>
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#login">Login</a></li>
        <li><a data-toggle="tab" href="#signup">Sign Up</a></li>
      </ul>
    </div>
    <div class="tab-content">
      <div id="login" class="tab-pane fade in active">
        <h1>Login</h1>
        <form class="login form">
          <div class="field form-group">
            <label for="login-username">Username</label>
            <input
              v-model="loginUsername"
              type="text"
              placeholder="Username"
              autofocus="autofocus"
              maxlength="150"
              id="login-username"
            />
          </div>
          <div class="field">
            <label for="login-password">Password</label>
            <input
              v-model="loginPassword"
              type="password"
              placeholder="Password"
              id="login-password"
            />
          </div>
          <button
            @click.prevent="authenticate"
            class="button primary"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
      <div id="signup" class="tab-pane fade">
        <h1>Sign Up</h1>
        <form class="signup form">
          <div class="field">
            <label for="signup-username">Username</label>
            <input
              v-model="signupUsername"
              type="text"
              placeholder="Username"
              autofocus="autofocus"
              maxlength="150"
              id="signup-username"
            />
          </div>
          <div class="field">
            <label for="signup-email">Email</label>
            <input
              v-model="signupEmail"
              type="email"
              placeholder="email"
              id="signup-email"
            />
          </div>
          <div class="field">
            <label for="signup-password">Password</label>
            <input
              v-model="signupPassword"
              type="password"
              placeholder="Password"
              id="signup-password"
            />
          </div>
          <small
            style="color: red;"
            v-show="signupPassword != signupPasswordCheck"
            >Password Don't Match</small
          >
          <div class="field">
            <label for="signup-password-check">Password</label>
            <input
              v-model="signupPasswordCheck"
              type="password"
              placeholder="Password"
              id="signup-password-check"
            />
          </div>
          <button @click.prevent="signup" class="button primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>

    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupEmail: "",
      signupPassword: "",
      signupPasswordCheck: "",
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("login", {
        username: this.loginUsername,
        password: this.loginPassword,
      });
    },
    signup() {
      this.$store.dispatch("createNewUser", {
        username: this.signupUsername,
        email: this.signupEmail,
        password: this.signupPassword,
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="css"></style>
