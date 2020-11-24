const hexElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function getRandomColor() {
    let hexColor = "#";
    for (let i=0; i<6; i++) {
        let randomNumber = Math.floor(Math.random() * hexElements.length);
        hexColor += hexElements[randomNumber];
    }
    return hexColor;
}