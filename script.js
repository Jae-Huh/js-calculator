var numButtons = document.getElementsByClassName('num')
var equality = document.getElementById('equality')
var display = document.getElementById('display')
var currNumStr = ""
var currNum = 0


//displays numbers and
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(event) {
    currNumStr += event.target.textContent
    display.innerHTML = currNumStr
    currNum = parseFloat(currNumStr)

  })
}

// //testing button functionality
// equality.addEventListener('click', function() {
//   display.innerHTML = numSentence
// })
