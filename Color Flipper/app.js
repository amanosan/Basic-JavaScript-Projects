const colors = ['#bce6eb', '#9896f1', "#48466d", "#cad315", "#fd3a69"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// adding click event to the button
btn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * colors.length); 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})