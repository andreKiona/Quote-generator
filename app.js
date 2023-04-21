 // Variable declarations

 let btn = document.querySelector('#new-quote');
 let quote = document.querySelector('.quote');
 let person = document.querySelector('.person');

 /*Arrays of quote to be generated to the display*/
 const quotes = [{
    quote: `"The best way to find yourself is to yourself in the service of others."`,
    person: `Mahatma Gandhi`
 }, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
 }, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst of all."`,
        person: `Aristotle`
 }, {
    quote: `"Your time is limited, so do not waste it living someone else's life."`,
        person:`Steve Jobs`
 }, {
    quote: `"Go confidently in the direction of your dreams! Live the life you've imagined."`,
    person: `Henry David Thoreau`
 }, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall." `,
    person: `Nelson Mandela`
 }, {
    quote: `"Do not let making a living prevent you from making a life."`,
    person:`John Wooden`
 }, {
    quote: `"Life is a long lesson in humility."`,
    person: `James M. Barrie`
 }, {
    quote:`"Life is trying things to see if they work."`,
    person: `Ray Bradbury`
 }, {
    quote: `"I find that the harder I work, the more luck I seem to have."`,
    person: `Thomas Jefferson`
 }, {
   quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
   person: `Oprah Winfrey`
 }, {
   quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
   person: `James Cameron`
 }, {
   quote: `"Life is never fair, and perhaps it is a good thing for most of us that it is not."`,
   person: `Oscar Wilde`
 }, {
   quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
   person: `Nelson Mandela`
 }, {
   quote: `"May you live all the days of your life."`,
   person: `Jonathan Swift`
 }, {
   quote: `"Do not let making a living prevent you from making a life."`,
   person:`John Wooden`
 }, {
   quote: `"Keep smiling, because life is a beautiful thing and there's so much to smile about."`,
   person: `Marilyn Monroe`
 }, {
   quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
   person: `Robert Frost`
 }, {
   quote: `"Love the life you live. Live the life you love."`,
   person: `Bob Marley`
 }, {
   quote: `"Life is either a daring adventure or nothing at all."`,
   person: `Helen Keller`
 }, {
  quote: `"Be kind, for everyone you meet is fighting a hard battle."`,
  person: `Plato`
 }, {
  quote: `"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."`,
  person:`Voltaire`
 }, {
  quote: `"To live is the rarest thing in the world. Most people exist, that is all."`,
  person: `Oscar Wilde`
 }, {
  quote: `"That it will never come again is what makes life so sweet."`,
  person: `Emily Dickinson`
 }, {
  quote: `"It is never too late to be what you might have been."`,
  person: `George Eliot`
 }, {
  quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
  person: `Ralph Waldo Emerson`
 }, {
  quote: `"Pain is inevitable. Suffering is optional."`,
  person: `Haruki Murakami`
 }, {
  quote: `"All the world's a stage, and all the men and women merely players"`,
  person: `William Shakespeare`
 }];

 
 btn.addEventListener('click', function(){

    //Getting a random number from the array and into the whole number with Math,floor function
    let random_quotes = Math.floor(Math.random() * quotes.length);
  
    //Getting thhe quotes and the author of the quote
    quote.innerText = quotes[random_quotes].quote;
    person.innerText = quotes[random_quotes].person;
 })
