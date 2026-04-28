<template>
  <main>
    <h1>Please login to view this page.</h1>
    <router-link to="/loginSignup" class="secondary-btn">Sign In</router-link>
  </main>
</template>

<style scoped>
main{
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

h1{
  font-family: 'Funnel Sans';
  font-size: 2rem;
}

.secondary-btn{
  font-size: 1.5rem;
}
</style>