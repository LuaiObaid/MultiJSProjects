const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // Your functions and event listeners
  function display() {
    const randomIndex = generateRandom();
    const randomReview = reviews[randomIndex];
 
    img.src = randomReview.img;
    author.textContent = randomReview.name;
    job.textContent = randomReview.job;
    info.textContent = randomReview.text;
 }
 
 function generateRandom() {
   return Math.floor(Math.random() * reviews.length);
 }
 
 randomBtn.addEventListener('click', display);
 
 display(); // Display a random review when the page loads
 let currentIndex = 0; // Initialize the index to 0
 
 function displayReviws(index) {
   
   const randomReview = reviews[index];
 
   img.src = randomReview.img;
   author.textContent = randomReview.name;
   job.textContent = randomReview.job;
   info.textContent = randomReview.text;
 }
 
 function showPrev(){
   currentIndex--;
   if(currentIndex < 0 ){
    currentIndex = reviews.length - 1;
   }
      displayReviws(currentIndex)
 }
 
 function showNext(){
  currentIndex++;
  if( currentIndex > reviews.length -1 ){
    currentIndex = 0;
   }
   displayReviws(currentIndex)
 }
 
 prevBtn.addEventListener('click', showPrev)
 nextBtn.addEventListener('click', showNext)
});



