<template>
  <main>
    <div class="profile-container">
      <div class="avatar-container">
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/user.png"
          alt="user"
        />
      </div>
      <div class="info-holder">
        <span>
          <h1 class="name"><b>Name: </b>Dr. Bojack Horseman</h1>
        </span>
        <h2 class="designation"><b>Designation: </b>Professor</h2>
        <p>
          <b>About:</b> Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Qui, laborum. Iure atque alias vel laboriosam, nam molestias
          eligendi dolorum.
        </p>
        <p>
          <b>Email: bojack.horseman@gmail.com</b>
        </p>
        <div class="intrests-holder">
          <h3>
            <span><b>Interests: </b></span>
          </h3>
          <div class="interests">
            <p>Data Science</p>
            <p>Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
    <form
      @submit.prevent=""
      class="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-lg project-creation-form"
    >
      <h2 class="text-xl font-bold text-gray-800">Send Message:</h2>

      <!-- Title -->
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-600">Message</label>
        <input
          type="text"
          placeholder="Enter your text"
          class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      

      <!-- Submit -->
      <button
        type="submit"
        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
      >
        Send
      </button>
      
    </form>
  </main>nForm
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .profile-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
.profile h1 {
  font-family: "Funnel Sans";
  font-size: 1.2rem;
}

.profile h2 {
  font-family: "Raleway";
  font-size: 1.05rem;
}

.profile p {
  font-family: "Raleway";
  font-size: 0.95rem;
}

.interests {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  p {
    box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
    padding: 5px 10px;
    corner-shape: squircle;
    border-radius: 10px;
    transition: all 0.3s;
    font-family: "Inter";
  }

  p:hover {
    background-color: var(--secondary-color);
    color: white;
  }
}
</style>
