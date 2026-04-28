<script setup>
const isCreateTaskFrom = ref(false);
const isCreateComment = ref(false);

const client = useSupabaseClient();
const route = useRoute();
const tasks = ref([]);

async function fetchTasks() {
  const projectId = route.params.id; // grabs the last segment from the URL

  try {
    const { data, error } = await client
      .from("tasks")
      .select("*")
      .eq("project_id", projectId);

    if (error) throw error;

    tasks.value = data;
    console.log("Tasks loaded:", data);

  } catch (error) {
    console.error("Failed to fetch tasks:", error.message);
  }
}

onMounted(() => {
  fetchTasks();
});
</script>

<template>
  <main>
    <div class="content-container">
      <div class="project-overview-container">
        <div class="project-header">
          <div class="welcome-message">
            <h1 class="logo">Welcome, Balram!</h1>
            <p>Here is your project Colabri</p>
          </div>
        </div>
      </div>
      <div class="project-info-container">
        <h2>Deadline: <span>1st April 2025</span></h2>
        <!-- <h2>Total Commits: <span>10</span></h2>
        <h2>Commits by Each Individual: </h2>
        <div class="commits-by-individual-container">
          <p>Bojack: <span>5</span></p>
          <p>Bojack: <span>3</span></p>
          <p>Bojack: <span>2</span></p>
        </div> -->
      </div>
      <div class="comments-container">
        <h1>New Comments</h1>
        <div class="comments">
          <div class="comment">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/user-male-circle--v11.png"
                alt="user-male-circle--v11"
              />
            </div>
            <div>
              <h3>Bojack</h3>
              <p>Updated the layout</p>
            </div>
            <div>
              <i class="ri-arrow-right-s-fill"></i>
            </div>
          </div>
          <div class="comment">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/user-male-circle--v11.png"
                alt="user-male-circle--v11"
              />
            </div>
            <div>
              <h3>Bojack</h3>
              <p>Updated the layout</p>
            </div>
            <div>
              <i class="ri-arrow-right-s-fill"></i>
            </div>
          </div>
          <div class="comment">
            <div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/user-male-circle--v11.png"
                alt="user-male-circle--v11"
              />
            </div>
            <div>
              <h3>Bojack</h3>
              <p>Updated the layout</p>
            </div>
            <div>
              <i class="ri-arrow-right-s-fill"></i>
            </div>
          </div>
          <button class="add-comment-btn" @click="isCreateComment =! isCreateComment">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/arcade/64/add.png"
              alt="add"
            />
            <h3>Add Comment</h3>
          </button>
        </div>
        <form
          v-if="isCreateComment"
          @submit.prevent=""
          class="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-lg project-creation-form"
        >
          <h2 class="text-xl font-bold text-gray-800">Add New Comment</h2>

          <!-- Title -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Comment</label>
            <input
              type="text"
              placeholder="Enter project title"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Create
          </button>
          <button
            class="tertiary-btn"
            @click="isCreateComment = !isCreateComment"
          >
            Cancel
          </button>
        </form>

      </div>
      <div class="tasks-container">
        <h1>Your Tasks</h1>
        <div class="task task-header">
          <div class="task-description">
            <!-- <input type="checkbox" id="task" />
            <label for="task">Add the task compliation feature</label> -->
            <p>Task Description</p>
          </div>
          <div class="stage">
            <p>Stage</p>
          </div>
          <div class="deadline">
            <p>Deadline</p>
          </div>
          <div class="status">
            <p>Status</p>
          </div>
          <div class="priority">
            <p>Priority</p>
          </div>
        </div>
        <div class="task">
          <div class="task-description">
            <input type="checkbox" id="task" />
            <label for="task">Add the task compliation feature</label>
          </div>
          <div class="stage">
            <p>Ideation</p>
          </div>
          <div class="deadline">
            <p>Fri Feb 27</p>
          </div>
          <div class="status">
            <p>In Progress</p>
          </div>
          <div class="priority">
            <p>High</p>
          </div>
        </div>
        <div class="task">
          <div class="task-description">
            <input type="checkbox" id="task" />
            <label for="task">Add the task compliation feature</label>
          </div>
          <div class="stage">
            <p>Ideation</p>
          </div>
          <div class="deadline">
            <p>Fri Feb 27</p>
          </div>
          <div class="status">
            <p>In Progress</p>
          </div>
          <div class="priority">
            <p>High</p>
          </div>
        </div>
        <div class="task">
          <div class="task-description">
            <input type="checkbox" id="task" />
            <label for="task">Add the task compliation feature</label>
          </div>
          <div class="stage">
            <p>Ideation</p>
          </div>
          <div class="deadline">
            <p>Fri Feb 27</p>
          </div>
          <div class="status">
            <p>In Progress</p>
          </div>
          <div class="priority">
            <p>High</p>
          </div>
        </div>
        <form
          v-if="isCreateTaskFrom"
          @submit.prevent=""
          class="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-lg project-creation-form"
        >
          <h2 class="text-xl font-bold text-gray-800">Create New Task</h2>

          <!-- Title -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Task Title</label>
            <input
              type="text"
              placeholder="Enter project title"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <!-- Description -->
          <!-- <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Description</label>
            <textarea
              placeholder="Describe your project..."
              rows="4"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div> -->

          <!-- Interests -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Deadline</label>
            <input
              type="text"
              placeholder="e.g. Fri Feb 26"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <!-- <p class="text-xs text-gray-400">Separate domains with commas</p> -->
          </div>

          <!-- tech stack -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Priority</label>
            <input
              type="text"
              placeholder="e.g. High, medium, low"
              class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <!-- <p class="text-xs text-gray-400">Separate tools/techonologies with commas</p> -->
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
          >
            Create
          </button>
          <button
            class="tertiary-btn"
            @click="isCreateTaskFrom = !isCreateTaskFrom"
          >
            Cancel
          </button>
        </form>
        <button
          class="primary-btn"
          @click="isCreateTaskFrom = !isCreateTaskFrom"
        >
          add task
        </button>
      </div>
    </div>
    <aside>
      <div class="calender-container">
        <h1>Your Calender</h1>
        <UCalendar color="neutral" />
      </div>
      <div class="team-container">
        <h1>Your Team</h1>
        <div class="team-members">
          <div class="profile">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/user-male-circle--v11.png"
              alt="user-male-circle--v11"
            />
            <h3>Bojack H.</h3>
            <p>Project Mentor</p>
          </div>
          <div class="profile">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/user-male-circle--v11.png"
              alt="user-male-circle--v11"
            />
            <h3>Bojack H.</h3>
            <p>Team Lead</p>
          </div>
          <div class="profile">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/user-male-circle--v11.png"
              alt="user-male-circle--v11"
            />
            <h3>Bojack H.</h3>
            <p>Developer</p>
          </div>
          <div class="profile">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/user-male-circle--v11.png"
              alt="user-male-circle--v11"
            />
            <h3>Bojack H.</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </aside>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  position: relative;
  padding: 10px 20px;
  gap: 2%;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
}

h1 {
  font-size: 2rem;
  color: var(--tertiary-color);
  font-family: "KoHo";
  font-weight: 700;
}

.content-container {
  width: 75%;
  top: 0;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  box-sizing: border-box;
  gap: 10px;
}

.project-overview-container {
  width: 100%;
}

.project-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.welcome-message {
  p {
    font-size: 1.3rem;
    font-family: "Raleway";
  }
}

.project-info-container {
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 600;
  }

  .commits-by-individual-container {
    display: flex;
    gap: 20px;
    margin-top: 5px;
    p {
      font-family: "Raleway";
      font-weight: 500;
      box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
      padding: 5px 10px;
      corner-shape: squircle;
      border-radius: 10px;
    }

    p:hover {
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  }
}

.comments-container {
  padding: 10px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comments-container h1 {
  font-size: 1rem;
}

.comments {
  display: flex;
  gap: 7px;
}

.comment {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
}

.comment:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  cursor: pointer;
  transform: translateY(-10px);
}

.comment h3 {
  font-family: "Funnel Sans";
  color: var(--tertiary-color);
}

.comment p {
  font-family: "Raleway";
}

.add-comment-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;

  h3 {
    font-family: "Inter";
  }
}

.add-comment-btn:hover {
  background-color: var(--secondary-color);
  color: white;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.task-header {
  font-family: "Raleway";
  font-weight: 600;
  margin-bottom: 10px;
  box-shadow: none !important;
}

.task {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-family: "Inter";
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 7px 0px;
  corner-shape: squircle;
  border-radius: 5px;

  .task-description {
    width: 40%;
  }
}

aside {
  width: 23%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: start;
}

.team-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;

  h3 {
    color: var(--tertiary-color);
    font-family: "Funnel Sans";
  }

  p {
    font-family: "Raleway";
    font-size: 0.9rem;
  }
}

.profile:hover {
  cursor: pointer;
}
</style>
