<script setup>
const store = useProjectInfo();
const router = useRouter();

function takeToProjectPage(projectId, projectTitle, ProjectDescription) {
  store.setProjectData(projectId, projectTitle, ProjectDescription);
  router.push("/dashboard/yourProjects/project");
}

const client = useSupabaseClient();

const user = useSupabaseUser();
const myProjects = ref([]);

async function fetchMyProjects() {
  // get user directly from the client instead
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user?.id) {
    console.error("No user found");
    return;
  }

  try {
    const { data, error } = await client
      .from("project_members")
      .select(
        `
        *,
        projects (*)
      `,
      )
      .eq("member_id", user.id);

    if (error) throw error;

    myProjects.value = data;
    console.log("My projects loaded:", data);
  } catch (error) {
    console.error("Failed to fetch my projects:", error.message);
  }
}

onMounted(() => {
  fetchMyProjects();
});
</script>

<template>
  <main>
    <h1>Your Active Projects</h1>
    <div class="active-projects">
      <NuxtLink
        v-for="item in myProjects"
        :key="item.id"
        class="project"
        :to="`/dashboard/yourProjects/${item.projects.id}`"
      >
        <h2 class="project-title">
          <span>Project Title: </span> {{ item.projects.title }}
        </h2>

        <p class="project-description">
          <span>Project Description: </span> {{ item.projects.description }}
        </p>

        <p class="project-description">
          <span>Project Domain: </span> {{ item.projects.domain }}
        </p>
      </NuxtLink>
      <!-- <nuxtLink class="project">
        <h2 class="project-title">
          <span>01. Project Title: </span> Studen project - mentor match hub
          with collaborations.
        </h2>
        <p class="project-description">
          <span>Project Description: </span> This project aims to build a
          platform that will help students that need guidence and mentorship
          with their Projects to be able to find and conntect with domain
          specific and experienced mentors with features like project management
          and real time collaborations.
        </p>
      </nuxtLink> -->
      <!-- <nuxtLink class="project">
        <h2 class="project-title">
          <span>01. Project Title: </span> Studen project - mentor match hub
          with collaborations.
        </h2>
        <p class="project-description">
          <span>Project Description: </span> This project aims to build a
          platform that will help students that need guidence and mentorship
          with their Projects to be able to find and conntect with domain
          specific and experienced mentors with features like project management
          and real time collaborations.
        </p>
      </nuxtLink>
      <nuxtLink class="project">
        <h2 class="project-title">
          <span>01. Project Title: </span> Studen project - mentor match hub
          with collaborations.
        </h2>
        <p class="project-description">
          <span>Project Description: </span> This project aims to build a
          platform that will help students that need guidence and mentorship
          with their Projects to be able to find and conntect with domain
          specific and experienced mentors with features like project management
          and real time collaborations.
        </p>
      </nuxtLink> -->
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
  width: 100%;
}

h1 {
  color: var(--tertiary-color);
  font-family: "KoHo";
  font-weight: 700;
  font-size: 1.5rem;
}

.active-projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  gap: 30px;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  box-sizing: border-box;
  width: 60%;
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  padding: 20px;
  corner-shape: squircle;
  border-radius: 20px;
  transition: all 0.3s;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Funnel Sans";
  }

  p {
    font-family: "Raleway";
    /* font-size: 1.2rem;
    font-weight: 600; */
  }
}

.project:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-10px);
  cursor: pointer;
}
</style>
