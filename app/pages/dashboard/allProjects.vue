<template>
  <main>
    <div class="content-container">
      <header>
        <h1 class="logo">All Current Projects</h1>
      </header>
      
      <nuxtLink class="project" to="">
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
      <nuxtLink class="project" to="">
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
      <nuxtLink class="project" to="">
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
    </div>
    <aside>
      <h1>Filter by category:</h1>
      <div class="categories-holder">
        <p class="category">Data Science</p>
        <p class="category">Machine Learning</p>
        <p class="category">AI</p>
        <p class="category">Blockchain</p>
        <p class="category">Cloud Computing</p>
        <p class="category">Frontend Develepment</p>
        <p class="category">Backend Developments</p>
        <p class="category">Full Stack</p>
      </div>
    </aside>
  </main>
</template>

<style scoped>
main{
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
}

.content-container{
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  box-sizing: border-box;
  width: 90%;
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

aside{
  width: 25%;
  align-self: flex-start;
}

.project:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-10px);
  cursor: pointer;
}

aside h1 {
  color: var(--tertiary-color);
  font-family: "Funnel Sans";
  font-weight: 600;
  font-size: 1.3rem;
}

.categories-holder {
  display: flex;
  flex-wrap: wrap;
}

.category {
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  padding: 5px 10px;
  corner-shape: squircle;
  border-radius: 10px;
  transition: all 0.3s;
  font-family: "Inter";
  margin: 5px 10px;
  transition: all 0.3s;
}

.category:hover{
  background-color: var(--secondary-color);
  color: white;
}
</style>