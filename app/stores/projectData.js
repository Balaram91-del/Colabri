import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectInfo = defineStore("info", () => {
  const projectData = ref({
    projectId : "",
    projectTitle: "",
    projectDescription: ""
  })

  function setProjectData(projectId, projectTitle, projectDescription) {
    projectData.projectId = projectId;
    projectData.projectTitle = projectTitle;
    projectData.projectDescription = projectDescription;
  }

  return { setProjectData, projectData };
});
