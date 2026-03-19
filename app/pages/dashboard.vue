<script setup>
const isSidebarOpen = ref(true);

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});

const route = useRoute()
const isFullScreenRoute = computed(() => 
  route.path.endsWith('test')
)

function sidebarToggle() {
  isSidebarOpen.value = !isSidebarOpen.value;

  localStorage.setItem("isSidebarOpen", isSidebarOpen.value);
}
</script>

<template>
  <div class="container">
    
    <aside v-if="!isFullScreenRoute"
      class="sidebar"
      :class="{
        'opened-sidebar-width': isSidebarOpen,
        'colapsed-sidebar-width': !isSidebarOpen,
      }"
    >
      <div class="logo-sidebar-holder">
        <div class="logo-holder">
          <h1 class="logo">Colabri</h1>
          <button class="sidebar-toggle-btn" @click="sidebarToggle">
            <i class="ri-arrow-left-double-line"></i>
          </button>
        </div>
        <div class="btn-holder">
          <p>MENU</p>
          <router-link to="/dashboard" class="router-link">
            <i class="ri-home-2-line"></i>
            Home
          </router-link>
          <router-link to="/dashboard/allProjects" class="router-link">
            <i class="ri-file-list-line"></i>
            Projects
          </router-link>
          <router-link
            to="/dashboard/mentors"
            class="router-link"
          >
            <i class="ri-presentation-fill"></i>
            Mentors
          </router-link>
          <!-- <router-link to="" class="router-link">
            <i class="ri-notification-line"></i>
            Notifications
          </router-link> -->
          <USeparator label="" class="separator" color="secondary" />
          <P>GENERAL</P>
          <!-- <router-link to="/dashboard/profile" class="router-link">
            <i class="ri-user-line"></i>
            Profile
          </router-link> -->
          <router-link to="/dashboard/settings" class="router-link">
            <i class="ri-settings-4-line"></i>
            Settings
          </router-link>
          <router-link to="/dashboard/support" class="router-link">
            <i class="ri-customer-service-2-line"></i>
            Support
          </router-link>
          <button>
            <i class="ri-login-circle-line"></i>
            Log Out
          </button>
        </div>
      </div>
      <!-- <div class="promo-container">
        <h2>Upgrade to Ultimate</h2>
        <p>Gain Access to all the Tests</p>
        <nuxt-link to="/purchase" class="secondary-btn upgrade-btn"
          >Upgrade</nuxt-link
        >
      </div> -->
    </aside>
    <div class="main-navbar-container">
      <nav v-if="!isFullScreenRoute">
        <div class="search-bar-container">
          <input type="text" placeholder="search.." />
          <button>
            <i class="ri-search-ai-line"></i>
          </button>
        </div>
        <div class="profile-holder">
          <!-- <UColorModeButton /> -->
          <UUser
            class="custom-user text-green"
            name="John Doe"
            description="Software Engineer"
            :avatar="{
              src: 'https://img.icons8.com/color/48/checked-user-male-skin-type-7.png',
            }"
            :chip="{
              color: 'success',
              position: 'top-right',
            }"
            :ui="{
              name: 'text-orange-600 font-bold',
              description: 'text-gray-500 italic',
            }"
          />
        </div>
      </nav>
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%; /* ✅ Respects parent width, excludes scrollbar */
  min-height: 100vh;
  display: flex;
  box-sizing: border-box;
  max-width: none;
  /* filter: blur(5px); */
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 10px 30px -2px rgba(0, 0, 0, 0.45);
  padding: 20px ;
  border-radius: 10px;
  h1{
    font-size: 1.5rem;
    font-family: 'Funnel Sans';
    margin-bottom: 10px
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  transition: 0.3s ease-out;
  /* border-right: gray solid 1px; */
  box-sizing: border-box;
  /* padding: 10px; */

  position: sticky;
  top: 0;
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.sidebar-toggle-btn:hover {
  cursor: pointer;
  color: var(--tertiary-color);
}

.colapsed-sidebar-width {
  width: 75px;
  display: flex;
  align-items: center;

  .logo {
    display: none;
  }

  .logo-holder button {
    transform: rotate(180deg);
  }

  .sidebar-toggle-btn {
    margin: 10px 0px 57px 0px;
    width: 100%;
  }

  .btn-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
  }

  .btn-holder a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .btn-holder a {
    font-size: 0.8rem;
    margin: 5px 0px;
    text-align: center;
  }

  .btn-holder a i {
    font-size: 1.3rem;
  }

  .btn-holder p {
    display: none;
  }

  .btn-holder button {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    padding: 0%;
  }

  .btn-holder button i {
    font-size: 1.3rem;
  }

  .promo-container {
    display: none;
  }
}

.opened-sidebar-width {
  width: 250px;
}

.logo-holder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.logo-holder i {
  font-size: 1.5rem;
}

/* .logo {
  color: var(--tertiary-color);
  font-family: "KoHo";
  letter-spacing: 2px;
  font-weight: 1000;
  font-size: 1.5rem;
} */

.btn-holder a:hover {
  background-color: rgba(142, 154, 206, 0.05);
  color: var(--tertiary-color);
}

.router-link.router-link-exact-active {
  background-color: rgba(142, 154, 206, 0.05);
  color: var(--tertiary-color);
}


.router-link.router-link-exact-active::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  width: 5px;
  height: 50%;
  background: var(--tertiary-color);
}

.btn-holder {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  font-size: 1.2rem;

  justify-content: space-evenly;
}

.btn-holder p {
  font-size: 0.8rem;
  margin: 10px;
  color: gray;
}

.btn-holder a {
  padding-left: 20%;
  border-radius: 5px;
  margin: 5px 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  position: relative;
}

.btn-holder button {
  display: flex;
  padding-left: 20%;
  margin: 0px 2px;
  align-items: center;
}

.btn-holder button i {
  margin-right: 5px;
}

.promo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px gray solid; */
  margin: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px 0px;
  /* background-color: var(--secondary-color); */
  color: var(--secondary-color);
  box-shadow: 9px 10px 30px -2px rgba(0, 0, 0, 0.45);
}

.promo-container h2 {
  font-family: "Funnel Sans";
  font-size: 1.4rem;
}

.promo-container p {
  font-family: "Raleway";
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.upgrade-btn {
  padding: 10px 10px;
}

/* .promo-container a {
  background-color: var(--tertiary-color);
  font-family: "Inter";
  padding: 10px 20px;
  border-radius: 10px;
  color: var(--primary-color);
  margin-top: 10px;
} */

.main-navbar-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100%;
  /* background-color: var(--white-color); */
  /* border-bottom: 1px solid gray; */
  position: sticky;
  top: 0;
  background-color: var(--primary-color);
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px var(--secondary-color) solid;
  border-radius: 20px;
  padding: 5px 15px;
}

.search-bar-container input {
  font-family: "Inter";
  color: var(--secondary-color);
}

.search-bar-container input:focus {
  outline: none;
}

.search-bar-container button i {
  color: var(--tertiary-color);
}

.profile-holder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-family: "Raleway";
  width: 20%;
  color: var(--secondary-color);
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
