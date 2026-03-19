<script setup>

const testimonials = [
    'https://img.icons8.com/color/48/person-female.png',
    'https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png',
    'https://img.icons8.com/color/48/checked-user-male-skin-type-7.png',
    'https://img.icons8.com/color/48/gender-neutral-user.png',
    'https://img.icons8.com/color/48/checked-user-female.png',
]

const noOfStudentsRegistered = ref(0)
const noOfTestsGiven = ref(0)
const noOfDailyActiveUsers = ref(0)

const statsSection = ref(null)
let hasStarted = false

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        hasStarted = true
        startCounters()
        observer.disconnect() // run once
      }
    },
    {
      threshold: 0.4 // 40% visible
    }
  )

  observer.observe(statsSection.value)
})

function startCounters() {
  const maxStudents = 2000
  const maxProjects = 50
  const maxDAU = 1200
  const step = 10

  const interval = setInterval(() => {
    let finished = true

    if (noOfStudentsRegistered.value < maxStudents) {
      noOfStudentsRegistered.value += step
      finished = false
    }

    if (noOfTestsGiven.value < maxProjects) {
      noOfTestsGiven.value += step
      finished = false
    }

    if (noOfDailyActiveUsers.value < maxDAU) {
      noOfDailyActiveUsers.value += step
      finished = false
    }

    if (finished) {
      clearInterval(interval)
    }
  }, 2)
}
</script>

<template>
  <nav>
    <div class="logo">
      <h1 class="logo">Colabri</h1>
    </div>
    <menu>
      <nuxt-link to="/">HOME</nuxt-link>
      <nuxt-link to="/dashboard/allProjects">PROJECTS</nuxt-link>
      <nuxt-link to="/dashboard/mentors">MENTORS</nuxt-link>
      <nuxt-link to="/about">ABOUT US</nuxt-link>
    </menu>
    <div class="side-menu">
      <a href="#cotnact" class="tertiary-btn">CONTACT US</a>
      <nuxt-link to="/loginSignup" class="primary-btn">SIGN IN</nuxt-link>
    </div>
  </nav>
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <h1>Build Better <span>Projects</span> with the Right <span>Mentors</span></h1>
        <h3>
          Match with mentors, collaborate in real time, and manage student projects - all in one platform.
        </h3>
        <div class="btn-container">
          <nuxt-link to="/loginSignup" class="secondary-btn">Sign In</nuxt-link>
          <nuxt-link to="/dashboard/mentors" class="primary-btn">Mentors</nuxt-link>
          <!-- <PrimaryButton title="Sample Test"/> -->
        </div>
      </div>
      <div class="hero-image">
        <img src="@\assets\images\students-studying.png" alt="students studying">
      </div>
    </section>

    <section ref="statsSection" class="user-info-section">
      <div class="container">
        <h2>Students Registered</h2>
        <p>{{ noOfStudentsRegistered }}+</p>
      </div>
      <div class="container">
        <h2>Total Projects</h2>
        <p>{{ noOfTestsGiven }}+</p>
      </div>
      <div class="container">
        <h2>Daily Active Users</h2>
        <p>{{ noOfDailyActiveUsers }}+</p>
      </div>
    </section>

    <section class="mouse-scroll-bar-section">
      <MouseScroll/>
    </section>

    <section class="join-us-section">
      <h1>Why Join Us ?</h1>
      <div class="wrapper">
        <div class="card">
          <div>
            <img width="96" height="96" src="https://img.icons8.com/color/96/positive-dynamic.png" alt="positive-dynamic"/>
          </div>
          <h2>Domain-based mentor matching</h2>
          <p>
            We Provide the best quality test series with most proable questions in the exam.
          </p>
        </div>
        <div class="card">
          <div>
            <img width="96" height="96" src="https://img.icons8.com/color/96/positive-dynamic.png" alt="positive-dynamic"/>
          </div>
          <h2>Solution & Explanation</h2>
          <p>
            We provide the best possible answer and solutions to all the questions.
          </p>
        </div>
        <div class="card">
          <div>
            <img width="96" height="96" src="https://img.icons8.com/color/96/positive-dynamic.png" alt="positive-dynamic"/>
          </div>
          <h2>Progress Tracking & Analysis</h2>
          <p>
            Our website provides tools for to keep track of your progress and do improvement as needed.
          </p>
        </div>
        <div class="card">
          <div>
            <img width="96" height="96" src="https://img.icons8.com/color/96/positive-dynamic.png" alt="positive-dynamic"/>
          </div>
          <h2>Collaborations & Project management</h2>
          <p>
            We Provide the best quality test series with most proable questions in the exam
          </p>
        </div>
      </div>
      <div class="btn-holder">
        <nuxt-link to="" class="secondary-btn">Get Started For Free</nuxt-link>
      </div>
    </section>

    <section class="testimonial-section">
      <h3>TESTIMONIAL</h3>
      <h1>What Users Say</h1>
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="testimonials"
        :ui="{ item: 'basis-1/3' }"
        class="testimonial-carousel"
      >
        <div class="testimonial">
          <img :src="item" width="45" height="45" class="rounded-lg"></img>
          <h2>Balaram Dora</h2>
          <p>
            It is an amezing platform if you need guiadnce with your project from skilled and experinced mentors.
            It also has features like project management and collaborations.
          </p>
        </div>
      </UCarousel>
    </section>

    <!-- contact section -->
     <section class="contact-section" id="cotnact">
      <h3>CONNECT</h3>
      <h1>Contact With Us</h1>
      <div class="contact-container">
        <div class="left-contact-section">
          <img src="@\assets\images\hand-shake.webp" alt="">
          <h4 class="contact-logo">Colabri</h4>
          <h2>Student project - Mentor matching platform</h2>
          <h3>You can either connect with us on email or call us</h3>
          <p>Phone: +917328810701 <br>
          Email: balaramdora1874@gmail.com</p>
          <p>FIND US ON</p>
          <div class="contact-links">
            <a href="https://www.linkedin.com/in/balram-dora-5279742b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="ri-linkedin-box-fill"></i></a>
            <a href="https://github.com/Balaram91-del"><i class="ri-instagram-fill"></i></a>
            <a href="#"><i class="ri-facebook-box-fill"></i></a>
            <a href=""><i class="ri-twitter-x-fill"></i></a>
          </div>
        </div>
        <div class="right-contact-section">
          <form action="https://api.web3forms.com/submit" method="POST" enctype="multipart/form-data" class="contact-form">

            <input type="hidden" name="access_key" value="329f9404-79e1-43c5-aedc-fa33b51198c9">

            <label for="name">NAME</label>
            <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required>
            <label for="email">EMAIL</label>
            <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required>
            <label for="subject">SUBJECT</label>
            <input type="text" name="subject" placeholder="Topic" class="contact-inputs" required>
            <label for="message">MESSAGE</label>
            <textarea name="message" id="" placeholder="Your Message" class="contact-inputs" required></textarea>
            <button type="submit" class="primary-btn">SEND MESSAGE <i class="ri-arrow-right-fill"></i></button>
          </form>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <FAQ/>
    </section>

    <!-- footer -->
    <footer>
      <p><i class="ri-copyright-fill"></i> All copyrights has been reserved.</p>
      <a href="mailto:philotomia26@gmail.com">balaramdora1874@gmail.com</a>
    </footer>


  </main>
</template>

<style scoped>
a{
  font-family: 'Inter';
  text-decoration: none;
}

nav{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
}

/* .logo h1{
  color: var(--tertiary-color);
  font-family: 'KoHo';
  letter-spacing: 2px;
  font-weight:1000;
  font-size: 2.3rem;
} */

menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
}

menu a{
  font-family: 'Inter';
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--secondary-color);
}

menu a::after{
  content: '';
  display: block;
  background-color: var(--tertiary-color);
  height: 2px;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s;
}

menu a:hover::after{
  transform-origin: right;
  transform: scaleX(1);
}

.side-menu{
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary-color);
  width: 80%;
  margin: 90px 0px;
}

.hero-content{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 45%;
  text-align: left;
}

.hero-content h1{
  font-family: 'Funnel Sans';
  font-size: 2.5rem;
  margin-bottom: 0;
  letter-spacing: 1px;
}

.hero-content h3{
  font-family: 'Raleway';
  letter-spacing: 0.6px;
  line-height: 1.3;
  color: var(--text-color);
  font-size: 1.3rem;
}

.btn-container{
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
}

.btn-container a{
  padding: 10px 25px;
}

.hero-image{
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
}

.hero-image img{
  height: auto;
  width: 90%;
}

.user-info-section{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.user-info-section div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 8px 10px 30px 0 rgba(22,45,61,0.2);
  transition: all 0.3s ease-in-out;
}

.user-info-section div h2{
  margin-top: 0;
  color: var(--secondary-color);
  font-family: 'Funnel Sans';
  font-size: 1.3rem;
}

.user-info-section div p{
  margin: 0;
  font-family: 'Raleway';
  color: var(--tertiary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.user-info-section div:hover{
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-10px);
}

.user-info-section div:hover h2{
  color: var(--primary-color);
}

.user-info-section div:hover p{
  color: var(--tertiary-color);
}

.mouse-scroll-bar-section{
  width: 90vw;
  display: flex;
  justify-content: end;
  margin: 20px 0px;
}

.join-us-section{
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  align-items: center;
  justify-content: center;
}

.join-us-section h1{
  font-family: 'Funnel Sans';
  font-weight: 1200;
  font-size: 2.5rem;
  color: var(--secondary-color);
}

.wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 25px 0px;
}

.card{
  position: relative;
  color: var(--secondary-color);
  padding: 20px 20px;
  margin: 10px;
  border-radius: 25px;
  text-align: center;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  corner-shape: square round round round;
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
}

.card img {
  display: inline-block;
  margin: 0 auto;
}

.card h2{
  margin: 0;
  font-family: 'Funnel Sans';
  font-weight: 900;
  font-size: 1.3rem;
}

.card p{
  font-family: 'Raleway';
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: var(--secondary-color);
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100% 0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.card:hover:after {
  content: "JOIN US";
  color: var(--primary-color);
}

.btn-holder{
  margin: 40px;
}

.btn-holder a{
  padding: 10px 25px;
}

.testimonial-section{
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px 80px 0px;
}

.testimonial-section h3, .contact-section h3{
  font-family: 'Raleway';
  font-weight: 900;
  color: var(--tertiary-color);
  margin: 10px;
}

.testimonial-section h1, .contact-section h1{
  font-family: 'Funnel Sans';
  font-weight: 1000;
  color: var(--secondary-color);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.testimonial-carousel{
  width: 60%;
}

.testimonial{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 200px;
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
  padding: 20px;
  border-radius: 15px;
}

.testimonial h2{
  font-family: 'Funnel Sans';
  font-size: 1.5rem;
  color: var(--tertiary-color);
  margin: 10px 0px;
}

.testimonial p{
  text-align: center;
  font-family: 'Raleway';
  font-size: 0.8rem;
  color: var(--secondary-color);
}

.contact-section{
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  color: var(--secondary-color);
}

.contact-section h1{
  margin-top: 0;
}

.contact-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  /* height: 50vh; */
}

.left-contact-section{
  width: 40%;
  display: flex;
  flex-direction: column;
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  /* height: 117%; */
}

.left-contact-section img{
  width: 150px;
}

.contact-logo{
  color: var(--tertiary-color);
  font-family: 'KoHo';
  letter-spacing: 2px;
  font-weight:1000;
  font-size: 2rem;
}

.left-contact-section h2, .left-contact-section h3{
  font-family: 'Raleway';
  color: var(--secondary-color);
  text-align: left;
  font-weight: 800;
  margin: 0px;
}

.left-contact-section h3{
  font-weight: 500;
  margin: 10px 0px;
}

.left-contact-section p{
  font-family: 'Raleway';
  margin-bottom: 0;
  font-size: 0.8rem;
}

.contact-links{
  margin-top: 20px;
}

.left-contact-section a{
  text-decoration: none;
  color: var(--text-color);
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
  border-radius: 5px;
  padding: 10px;
  font-size: 1.5rem;
  margin: 0 10px;
}

.left-contact-section a:hover{
  cursor: pointer;
  background-color: var(--secondary-color);
  color: var(--primary-color);
}



.right-contact-section{
  width: 60%;
  padding: 30px;
  display: flex;
  justify-content: center;
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
  margin-left: 20px;
  height: 100%;
  border-radius: 10px;
}

.contact-form{
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
}

.contact-form label{
  font-family: 'Raleway';
}

.contact-inputs{
  height: 2rem;
  border-radius: 5px;
  width: 100%;
  border: none;
  font-family: 'Inter';
  padding: 5px;
  border: 1px solid var(--secondary-color);
}

.contact-inputs:focus{
  border: none;
  outline: 2px solid var(--tertiary-color);
}

.contact-form textarea{
  height: 30%;
}

/* .contact-form button{
  width: 100%;
  border: none;
  color: var(--tertiary-color);
  box-shadow: 9px 10px 30px -2px rgba(0,0,0,0.45);
  border-radius: 10px;
  height: 2.5rem;
  margin-top: 10px;
  padding: 10px 0px;
}

.contact-form button:hover{
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  cursor: pointer;
} */

.contact-form button{
  width: 100%;
  margin-top: 10px;
  padding: 10px 0px;
}

.faq-section{
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

footer{
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
}
</style>
