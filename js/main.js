var one = "You miss 100% of the shots you don't take.\" --Wayne Gretzy"; // --Wayne Gretzy
var two = "It's not what happens to you, but how you react to it that matters.\"  --Epictetus"; // -- Epictetus
var three = "Resentment is like drinking poison and waiting for your enemies to die.\"  --Nelson Mandela"; // --Nelson Mandela
var four = "The best revenge is massive success.\"  --Frank Sinatra" ; // --Frank Sinatra

function randomQuotes() {
    var userNames = 
    [one , two ,three , four];
    var num = Math.floor(Math.random() * userNames.length);
    document.getElementById('quotes').innerHTML ="\""+ userNames[num];
}
