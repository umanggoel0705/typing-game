let data = ['Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.',
    'No man burdens his mind with small matters unless he has some very good reason for doing so.',
    'There is nothing more deceptive than an obvious fact',
    'My name is Sherlock Holmes. It is my business to know what other people do not know.',
    'Dear God. What is it like in your funny little brains? It must be so boring.'];

let len = data.length;

let tapBtn1 = document.getElementById("btn1");

tapBtn1.addEventListener("click", displayQuote);

let index = 0;
let startTime;
let endTime;
function displayQuote() {
    index = Math.floor(Math.random() * len);
    document.getElementById("quote").innerHTML = data[index];
    startTime = new Date();
}

let tapBtn2 = document.getElementById("btn2");
tapBtn2.addEventListener("click", Submit);

function Submit() {
    endTime = new Date();
    let totalTime = (endTime - startTime) / 1000;
    let inpStr = document.getElementById("inp").value;
    if (inpStr == data[index]) {
        document.getElementById("finish").innerHTML = "Congratulations! Challenge completed in " + totalTime + " seconds.";
    }
    else{
        document.getElementById("finish").innerHTML = "Wrong answer!";
    }
}