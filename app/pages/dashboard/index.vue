<script setup>
definePageMeta({
  middleware: ["auth"],
});

const store = useUserInfo();

const userName = store.userData.userName;

const projectCreationForm = ref(false);

const projectForm = reactive({
  title: "",
  description: "",
  interests: "",
  techStack: ""
});

const user = useSupabaseUser();
const client = useSupabaseClient();

async function createProject() {
  try {
    const { data, error } = await client
      .from("projects")
      .insert({
        title: projectForm.title,
        description: projectForm.description,
        domain: projectForm.interests,      // comma separated string, stored as-is
        creater_id: user.value.id,          // logged in user's uuid
        status: "active",                   // default status, change to your enum value
      })
      .select()
      .single();

    if (error) throw error;

    console.log("Project created:", data);
    projectCreationForm.value = false;      // close the form after success

  } catch (error) {
    console.error("Failed to create project:", error.message);
  }
}

</script>

<template>
  <main>
    <div class="content-container">
      <div class="project-creation-form-container" v-if="projectCreationForm">
        <form
          @submit.prevent="createProject"
          class="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-lg project-creation-form"
        >
          <h2 class="text-xl font-bold text-gray-800">Create New Project</h2>

          <!-- Title -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600"
              >Project Title</label
            >
            <input
              v-model="projectForm.title"
              type="text"
              placeholder="Enter project title"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <!-- Description -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Description</label>
            <textarea
              v-model="projectForm.description"
              placeholder="Describe your project..."
              rows="4"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          <!-- Interests -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Domains</label>
            <input
              v-model="projectForm.interests"
              type="text"
              placeholder="e.g. AI, Web Dev, Design"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <p class="text-xs text-gray-400">Separate domains with commas</p>
          </div>

          <!-- tech stack -->
           <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Tech Stack</label>
            <input
              v-model="projectForm.techStack"
              type="text"
              placeholder="e.g. AI, Web Dev, Design"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <p class="text-xs text-gray-400">Separate tools/techonologies with commas</p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Create
          </button>
          <button class="tertiary-btn" @click="projectCreationForm = !projectCreationForm">Cancel</button>
        </form>
      </div>
      <div class="project-container" v-if="!projectCreationForm">
        <h1>Hello!, {{ userName }}</h1>
        <p class="agenda">Here is your agenda for today</p>
        <div class="active-projects">
          <nuxtLink to="" class="project">
            <h2 class="project-title">Projects Completed</h2>
            <p class="project-description">
              <span>69</span>
            </p>
          </nuxtLink>
          <nuxtLink to="/dashboard/yourProjects/activeProjects" class="project">
            <h2 class="project-title">Active Projects</h2>
            <p class="project-description">
              <span>3</span>
            </p>
          </nuxtLink>
          <nuxtLink to="" class="project">
            <h2 class="project-title">Upcoming Projects</h2>
            <p class="project-description">
              <span>5</span>
            </p>
          </nuxtLink>
        </div>
      </div>
      <div class="task-container">
        <h1>Urgent Tasks:</h1>
        <div class="tasks-holder">
          <div class="task">
            <label for="" class="task-desciption">
              <input type="checkbox" />
              Do commits
            </label>
            <p class="due">
              <span>Today</span>
            </p>
          </div>
          <div class="task">
            <label for="" class="task-desciption">
              <input type="checkbox" />
              Start Working on the frontend
            </label>
            <p class="due">
              <span>Today</span>
            </p>
          </div>
          <div class="task">
            <label for="" class="task-desciption">
              <input type="checkbox" />
              Start Working on the frontend
            </label>
            <p class="due">
              <span>Today</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <aside>
      <h1>Your Calender</h1>
      <UCalendar color="neutral" />

      <div
        class="create-project-container"
        @click="projectCreationForm = !projectCreationForm"
      >
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/arcade/64/add.png"
          alt="add"
        />
        <h2 class="project-title">Create a project</h2>
      </div>
    </aside>
  </main>
</template>

<style scoped>
main {
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  /* flex-direction: column; */
  /* gap: 40px; */
  width: 100%;
}

aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 25%;
  top: 0;
  position: sticky;
  /* box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2); */
  height: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
  align-self: flex-start;
  /* position: relative; */

  .create-project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
    padding: 20px 0px;
    border-radius: 10px;
    transition: all 0.3s;

    h2 {
      font-family: "Funnel Sans";
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .create-project-container:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transform: translateY(-20px);
  }
}

.content-container {
  width: 75%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.project-creation-form-container {
  height: 100%;
  width: 100%;

  .project-creation-form{
    width: 100%;
  }
}

.project-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

h1 {
  color: var(--tertiary-color);
  font-family: "KoHo";
  font-weight: 700;
  font-size: 1.5rem;
}

.agenda {
  margin-top: 0;
  font-family: "Raleway";
  color: var(--secondary-color);
  font-weight: 600;
}

.active-projects {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  /* gap: 30px; */
}

.project {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  box-sizing: border-box;
  width: 250px;
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
    font-size: 1.2rem;
    font-weight: 600;
  }
}

.project:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-10px);
  cursor: pointer;
}

.task-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.radio-btn-holder {
  width: 100%;
  display: flex;
  justify-content: end;
}

.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  /* background-color: #eee; */
  box-sizing: border-box;
  box-shadow: 9px 10px 30px -2px rgba(0, 0, 0, 0.45);
  padding: 0.25rem;
  width: 330px;
  /* font-size: 14px; */
  font-family: "Inter";
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.2rem 0;
  color: var(--secondary-color);
  transition: all 0.15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-weight: 600;
}

/* Hover effect */
.radio-inputs .radio:hover .name {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Animation */
.radio-inputs .radio input:checked + .name {
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: select 0.3s ease;
}

@keyframes select {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Particles */
.radio-inputs .radio input:checked + .name::before,
.radio-inputs .radio input:checked + .name::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--tertiary-color);
  opacity: 0;
  animation: particles 0.5s ease forwards;
}

.radio-inputs .radio input:checked + .name::before {
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
}

.radio-inputs .radio input:checked + .name::after {
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes particles {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(var(--direction));
  }
}

.radio-inputs .radio input:checked + .name::before {
  --direction: -10px;
}

.radio-inputs .radio input:checked + .name::after {
  --direction: 10px;
}

.tasks-holder {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.task {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  corner-shape: squircle;
  border-radius: 15px;
  width: 70%;
}

.task:hover {
  background-color: var(--secondary-color);
  color: white;
  transition: all 0.3s;
  transform: translateY(-5px);
}
</style>
