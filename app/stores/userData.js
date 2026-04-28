import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfo = defineStore("info", () => {
  const userData = ref({
    userName: ref("Bojack Horsemen"),
    email: "",
    uuid: "",
  });

  function setUserName(name) {
    userData.value.userName = name;
  }

  function setUserEmail(email) {
    userData.value.email = email;
  }

  return { userData, setUserName, setUserEmail };
});