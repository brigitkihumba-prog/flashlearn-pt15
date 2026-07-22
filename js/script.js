const form = document.querySelector('#flash-card-form');
const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');
const cardsContainer = document.querySelector('#cards-container');

const flashcards = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        answer: 'Jupiter'
    },
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
        <p class="answer hidden">${card.answer}</p>
        `;
        <button class="show-btn">Show Answer</button>;


        const answer = cardElement.querySelector('.answer');
        const showButton = cardElement.querySelector('.show-btn');

        

        showButton.addEventListener('click', () => {
            answer.classList.toggle('hidden');
        });

        cardsContainer.appendChild(cardElement);

    });
}
renderFlashcards();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    flashcards.push({
         question: question,
         answer: answer,
        });
});