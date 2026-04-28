<script setup>
const router = useRouter();
function takeToMentorProfile() {
  router.push('/dashboard/mentors/profile');
}
</script>

<template>
  <main>
    <div class="content-holder">
      <div class="search-bar-container">
        <div class="search-bar">
          <input type="text" placeholder="search mentor by username" />
          <button>
            <span><i class="ri-search-ai-line"></i></span>
          </button>
        </div>
      </div>
      <div class="profiles-holder">
        <div class="profile" @click="takeToMentorProfile">
          <div class="avatar-holder">
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
        <div class="profile">
          <div class="avatar-holder">
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
        <div class="profile">
          <div class="avatar-holder">
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
        <div class="profile">
          <div class="avatar-holder">
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
        <div class="profile">
          <div class="avatar-holder">
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
      </div>
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
main {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  /* position: relative; */

}

.content-holder {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.search-bar-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px var(--secondary-color) solid;
  border-radius: 20px;
  padding: 5px 15px;
}

.search-bar input {
  font-family: "Inter";
  color: var(--secondary-color);
}

.search-bar input:focus {
  outline: none;
}

.search-bar button i {
  color: var(--tertiary-color);
}

.profiles-holder {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.profile {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-self: center;
  box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2);
  padding: 20px 10px;
  corner-shape: squircle;
  border-radius: 20px;
  transition: all 0.3s;
}

.profile:hover {
  background-color: var(--secondary-color);
  transform: translateY(-10px);
  color: white;
}

.profile:hover .interests p {
  box-shadow: 9px 10px 30px -2px rgba(0, 0, 0, 0.87);
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

aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 25%;
  top: 0;
  position: sticky;
  /* box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2); */
  /* height: 100%; */
  box-sizing: border-box;
  padding: 60px 10px;
  align-self: flex-start;
  /* position: relative; */
  /* box-shadow: 8px 10px 30px 0 rgba(22, 45, 61, 0.2); */
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
