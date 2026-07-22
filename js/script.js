const form = document.querySelector('#flash-card-form');
const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');
const cardsContainer = document.querySelector('#flash-cards-container');

const flashcards = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    }
    {
        question: 'What is the largest planet in our solar system?',
        answer: 'Jupiter'
    }
    {
        question: 'What is the chemical symbol for gold?',
        answer: 'Au'
    }
];

function renderFlashcards() {
    cardsContainer.innerHTML = '';
    flashcards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        console.log(cardElement);
        cardElement.classList.add('flash-card');
        cardElement.innerHTML = `
        <h3>${card.question}</h3>
        <p>${card.answer}</p>

        cardsContainer.appendChild(cardElement);
        
    });
}

//renderFlashCards();
function print (item) {
    console.log(item);
}


