var numButtons = document.getElementsByClassName('num')
var equality = document.getElementById('equality')
var display = document.getElementById('display')
var numSentence = [];

//displays numbers and
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(event) {
    display.innerHTML = event.target.textContent
    numSentence.push(event.target.textContent)
  })
}

// //testing button functionality
// equality.addEventListener('click', function() {
//   display.innerHTML = numSentence
// })
