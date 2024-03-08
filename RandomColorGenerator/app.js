const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * colors.length); // Use 4 instead of 3 for the maximum index
    document.body.style.backgroundColor = colors[randomNumber]; // Set backgroundColor property
    color.textContent = colors[randomNumber]


});
