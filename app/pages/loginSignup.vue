<template>
  <main>
    <div class="btn-container">
      <button class="cancel-btn" @click="$router.back()">
        <i class="ri-close-circle-fill"></i>
      </button>
    </div>
    <div class="login-container">
      <div class="login-from">
        <div class="login-signup-holder">
          <router-link to="/loginSignup" class="login-routerlink">Sign in</router-link>
          <router-link to="/loginSignup/signup" class="signup-routerlink">Sign Up</router-link>
        </div>
        <NuxtPage />
      </div>
      <div class="image-container">
        <h1 class="logo">Colabri</h1>
        <img src="@\assets\images\students-studying.png" alt="" />
        <h3>Let's <span>Built</span> together</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-container {
  display: flex;
  flex-direction: row;
  width: 60%;
  height: auto;
  border-radius: 20px;
  z-index: 30;
  min-height: 70%;
}

.login-from {
  width: 40%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  box-shadow: 9px 10px 30px -2px rgba(0, 0, 0, 0.45);
}

.login-signup-holder {
  width: 70%;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
}

.login-signup-holder a {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.5rem;
}

.image-container {
  width: 60%;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.image-container img {
  width: 80%;
  height: 50%;
}

.image-container h1,
h3 {
  color: var(--primary-color);
}

.image-container h3 {
  font-size: 1.5rem;
}

.logo {
  font-family: 'KoHo';
  font-size: 2rem;
}

.login-routerlink.router-link-exact-active,
.signup-routerlink.router-link-exact-active {
  text-decoration: underline solid var(--tertiary-color);
  text-decoration-thickness: 2px;
}

.btn-container {
  width: 60%;
  display: flex;
  justify-content: end;
}

.cancel-btn {
  background-color: transparent;
  border: none;
  color: var(--secondary-color);
  font-size: 2rem;
  cursor: pointer;
}

/* making the page responsive */

@media (max-width: 850px) {
  .btn-container{
    width: 90%;
  }

  .login-container {
    width: 90%;

    .login-from {
      width: 100%;

      .login-signup-holder{
        width: 90%;
      }
    }

    .image-container {
      display: none;
      width: 0;
    }
  }



}
</style>
