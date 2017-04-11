var display = document.getElementById('display')
var numButtons = document.getElementsByClassName('num')
var operation = document.getElementsByClassName('operation')
var add = document.getElementById('add')
var subtract = document.getElementById('subtract')
var multiply = document.getElementById('multiply')
var divide = document.getElementById('divide')

var equality = document.getElementById('equality')
var percentage = document.getElementById('percentage')
var clear = document.getElementById('clear')

var currNumStr = ''
var prevNum = 0
var currNum = 0
var operSign


// displays numbers in the display window
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(event) {
    currNumStr += event.target.textContent
    display.innerHTML = currNumStr
    currNum = parseFloat(currNumStr)
  })
}

// number operation
for (var i = 0; i < operation.length; i++) {
  operation[i].addEventListener('click', function(event) {
    // if (currOp) { then do the sum, set answer as prevNum } else { set currNum as prevNum}
    // Empty currNum and save clicked Opoerate as currOp
    if (operSign) {
      prevNum = calculate(operSign, prevNum, currNum)
      display.innerHTML = prevNum
    } else {
      prevNum = currNum
    }
    currNum = 0
    currNumStr = ''
    operSign = event.target.textContent
    console.log(prevNum)
    console.log(currNum)
  })
}

// // show answer
// equality.addEventListener('click', function() {
//   display.innerHTML = prevNum
// })

// clears window
clear.addEventListener('click', function() {
  display.innerHTML = 0;
  currNumStr = ''
  prevNum = 0
  currNum = 0
})

function calculate(operation, prevNum, currNum) {
  if (operation === '+') {
    return prevNum + currNum
  } else if (operation === '-') {
    return prevNum - currNum
  } else if (operation === 'x') {
    return prevNum * currNum
  } else if (operation === '/') {
    return prevNum / currNum
  }
}

// (onCLick of number)
// Save number as currNum

// (onClick of Operator)
// Save currNum as prevNum
// Empty currNum
// Save Operator as Op

// (On 2nd Click of Number)
// Save clicked number as CurrNumber

// (On 2nd Oporate click)
// use Op to sum prevNum and CurrNum
// Save answer as prevNum
// empty CurrNum
// Save newly clicked Opoerate as Op

// (On 3rd Click of Number)
// Save clicked number as CurrNumber

// (On 3rd Operaote click)
// use Op to sum prevNum and CurrNum
// Save answer as prevNum
// Save newly clicked Opoerate as Op
// empty CurrNum
