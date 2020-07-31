console.log("Welcome!");

let qArray=['"Nothing is impossible, the word itself says “I’m possible”!" -- Audrey Hepburn',
    '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." -- Maya Angelou',
    '"Whether you think you can or you think you can’t, you’re right." -- Henry Ford',
    '"Perfection is not attainable, but if we chase perfection we can catch excellence." -- Vince Lombardi',
    '"Life is 10 percent what happens to me and 90 percent of how I react to it." -- Charles Swindoll',
    '"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough." -- Oprah Winfrey',
    '"None of us is as smart as all of us." -- Ken Blanchard',
    '"I can’t change the direction of the wind, but I can adjust my sails to always reach my destination." -- Jimmy Dean',
    '"Believe you can and you’re halfway there." -- Theodore Roosevelt',
    '"To handle yourself, use your head; to handle others, use your heart." -- Eleanor Roosevelt',
    '"Too many of us are not living our dreams because we are living our fears." -- Les Brown',
    '"Alone, we can do so little; together we can do so much." -- Helen Keller',
    '"Whatever the mind of man can conceive and believe, it can achieve." -- Napoleon Hill'];
function newQuote()
{
    let rand=Math.floor(Math.random()*(qArray.length));
    document.getElementById('quotes').innerHTML = qArray[rand];
}