function typeEffect(element, text, speed = 50) {
    // create a counter to iterate over the characters in `text`
    let i = 0;
    
    // create a function that executes every `speed` microseconds
    const timer = setInterval(() => {
        // while the counter is less than the length of the `text` string
        if (i < text.length) {
            // update the contents of the HTML `element` by adding the next character in the `text` string to it
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            // when finished, stop the loop
            clearInterval(timer);
        }
    }, speed);
}

function shrekify(){
    let shrekifyButton = document.getElementById("shrekify");
    document.getElementById("shrekPic").classList.toggle("hidden");
    document.getElementById("shrekPic").classList.toggle("falling");
    if (shrekifyButton.innerHTML.includes("Un")){
        shrekifyButton.innerHTML = "Shrekify";
    } else{
        shrekifyButton.innerHTML = "Unshrekify";
    }
}

function getFortune() {
    // create a list of random fortunes
    const fortunes = [
        "A pleasant surprise is waiting for you.",
        "Adventure awaits you around the next corner.",
        "Your hard work will pay off today.",
        "You will find a hidden treasure today.",
        "Your creativity will shine bright today."
    ];
    
    // select a random value from the `fortunes` array
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    // post an alert that displays the random fortune
    alert(fortunes[randomIndex]);
}

window.addEventListener("load", function(){
    typeEffect(document.getElementById("title"), "WELCOME TO MY SWAMP");
});