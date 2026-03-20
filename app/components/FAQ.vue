<script setup>
const questions = [
  {
    id: 0,
    question: "What is Colabri & How to use it ?",
    answer:
      "A Carbon Footprint is the total amount of greenhouse gases(GHGs), including carbon dioxide and methane, released into the atmosphere as a result of individual's, organization's, or product's activities.",
  },
  {
    id: 1,
    question: "How to find a Mentor ?",
    answer:
      "To calculate a carbon footprint, first identify the sources of greenhouse gas emissions, such as energy use, transportation, and waste. Then, collect the data for each activity (e.g., kilowatt-hours of electricity, miles driven) and multiply it by the corresponding emission factor to get the total greenhouse gas emissions from that activity. Finally, add up the emissions from all activities to find the total carbon footprint.",
  },
  {
    id: 2,
    question: "How to create a Project ?",
    answer:
      "To reduce your carbon footprint, make changes to your transportation, diet, and energy use, and be a more mindful consumer by reducing waste and reusing items. Sustainable choices like using public transport, cycling, or driving electric vehicles are effective, as is adopting a plant-based diet or reducing meat consumption. Improving home energy efficiency with LED bulbs and renewable energy sources like solar panels also makes a significant difference. ",
  },
  {
    id: 3,
    question: "How to join a Project ?",
    answer:
      "Carbon offsetting is the process of compensating for greenhouse gas emissions by funding projects that remove or prevent the release of an equivalent amount of carbon dioxide (CO₂) or other greenhouse gases elsewhere. This practice has become a central tool for individuals, organizations, and even governments seeking to balance their environmental impact and accelerate the transition to a lower-carbon economy. In this comprehensive guide, you’ll learn everything you need to know about carbon offsetting—how it works, why it matters, key standards for quality assurance, the types of projects involved, frequently asked questions, and how to take meaningful action through Coffset.",
  },
  {
    id: 4,
    question: "How to delete my Account ?",
    answer:
      "Global warming is the long-term increase in Earth's average surface temperature, primarily caused by human activities like burning fossil fuels and deforestation. This is due to the buildup of greenhouse gases, such as carbon dioxide, which trap heat in the atmosphere, leading to climate change and its associated effects like extreme weather events and rising sea levels.",
  },
];
</script>

<template>
  <div class="faq-holder">
    <h1>FA<span>Q</span></h1>
    <h2><span>Frequently</span> Asked Questions</h2>
    <div class="faq-container">
      <details v-for="question in questions">
        <summary>
          <h3>{{ question.question }}</h3>
          <b></b>
        </summary>
        <p>{{question.answer}}</p>
      </details>
    </div>
  </div>
</template>

<style scoped>
.faq-holder{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
}

.faq-holder h1{
  font-size: 3rem;
}

.faq-holder h1, .faq-holder h2{
  font-family: 'KoHo';
  margin-top: 0;
  letter-spacing: 3px;
  font-weight: bold;
}

.faq-holder h2{
  font-size: 2.3rem;
  text-align: center;
}

.faq-container{
  width: 70%;
  display: flex;
  flex-direction: column;
}

.faq-container details{
  cursor: pointer;
  padding: 10px 20px;
  /* background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      #113a15,
      rgba(67, 132, 78, 0.5)
    ); */
    /* background-size: 30px; */
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  margin: 10px;
}

/* .faq-container details:hover{
  background-color: #4dbc5e;
} */

.faq-container details:hover{
  /* transform: translateY(-5px); */
  padding: 15px 20px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transform-origin: left;
  transition: all 0.3s;
}

.faq-container details summary{
  font-family: 'Funnel Sans';
  letter-spacing: 0.8px;
  font-size: 1.2rem;
}

.faq-container details p{
  font-family: 'Raleway';
  line-height: 1.6;
}

details > summary:first-of-type{
  list-style-type: none;
}

details summary::-webkit-details-marker{
  display: none;
}

summary{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

summary b::after{
  content: '+';
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Oswald';
}

details[open] summary b::after{
  content: '-';
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Oswald';
}

/* making it responsive */

@media (max-width: 850px){
  .faq-container{
    width: 100%;
  }

  h1{
    font-size: 2.5rem;
  }

  h2{
    font-size: 2rem;
  }
}
</style>