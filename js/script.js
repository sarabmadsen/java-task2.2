//Lesson Task 2 Question
/*Add a click event to the button that disables the button and starts a counter.

Count to 7 and update span.count with the value of the count.

Once 7 is reached stop the count and enable the button.*/

const button = document.querySelector("button");
const countContainer = document.querySelector(".count");
let counter = 0;

button.onclick = function() {
    event.target.disabled = true;

    counter = 0;

    const intervalId = setInterval(function () {
        counter ++;
        countContainer.innerHTML = counter;

        if(counter === 7) {
            clearInterval(intervalId);
            button.disabled = false;
        }
    },1000);
};