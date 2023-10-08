var message = document.getElementById("message");

var prediction = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

function shake8Ball(x) {
  x.classList.toggle("activated");
  
  setTimeout(function() {
    x.classList.toggle("reveal");
    var random = Math.floor(Math.random() * prediction.length);
    document.getElementById("message").innerHTML = prediction[random];
  }, 3000);

  
}