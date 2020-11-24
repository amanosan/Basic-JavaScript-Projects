let counter = 0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        // changing the value of the counter
        if(styles.contains('decrease')) {
            counter--;
        }
        else if(styles.contains('increase')) {
            counter++;
        }
        else if(styles.contains('reset')) {
            counter = 0;
        }

        // changing the color of the counter according to sign
        if(counter > 0 ) {
            value.style.color = "#1fab89";
        }
        else if(counter < 0) {
            value.style.color = "#ff165d";
        } 
        else {
            value.style.color = "#222222";
        }
        // displaying the counter 
        value.textContent = counter;
    })
})