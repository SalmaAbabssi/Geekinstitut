const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

let currentInputs = {};
let currentStoryIndex = 0;

// Plusieurs histoires différentes avec les mêmes variables
const stories = [
  ({noun, adjective, person, verb, place}) =>
    `${person} went to the ${place} to ${verb} a very ${adjective} ${noun}.`,

  ({noun, adjective, person, verb, place}) =>
    `One day, ${person} decided to ${verb} the ${adjective} ${noun} at the ${place}.`,

  ({noun, adjective, person, verb, place}) =>
    `At the ${place}, ${person} found a ${noun} that was ${adjective} enough to ${verb}.`,

  ({noun, adjective, person, verb, place}) =>
    `${person} couldn't believe how ${adjective} the ${noun} was when they tried to ${verb} it at the ${place}.`
];

// Fonction qui génère et affiche l’histoire
function generateStory(inputs) {
  if(Object.values(inputs).some(value => !value.trim())) {
    alert("Please fill in all the fields.");
    return false;
  }
  currentInputs = inputs;
  currentStoryIndex = 0;
  displayStory(currentStoryIndex);
  return true;
}

function displayStory(index) {
  const storyFunc = stories[index];
  storySpan.textContent = storyFunc(currentInputs);
}

// Shuffle pour afficher une autre histoire (au hasard, différente de la courante)
function shuffleStory() {
  if (!currentInputs || Object.values(currentInputs).some(value => !value.trim())) {
    alert("Please fill and submit the form first.");
    return;
  }
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * stories.length);
  } while(nextIndex === currentStoryIndex);

  currentStoryIndex = nextIndex;
  displayStory(currentStoryIndex);
}

// Événement sur la soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = {
    noun: form.noun.value,
    adjective: form.adjective.value,
    person: form.person.value,
    verb: form.verb.value,
    place: form.place.value
  };

  generateStory(inputs);
});

// Événement sur le bouton shuffle
shuffleBtn.addEventListener('click', shuffleStory);
