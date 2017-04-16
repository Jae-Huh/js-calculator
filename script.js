var display = document.getElementById('display')
var buttons = document.getElementById('buttons')
var operation = document.getElementsByClassName('operation')

var clear = document.getElementById('clear')

var currNumStr = ''
var prevNum = 0
var currNum = 0
var operSign = undefined


buttons.addEventListener('click', function(event) {
  if (event.target.classList.contains('num')) {
    clickedNumber(event.target)
  }

  if (event.target.classList.contains('operation')) {
    // Clicked a op
  }

  if (event.target.id === 'clear') {
    // Clicked a clear
  }

})


function clickedNumber(el) {
  // displays 0 in front of d.p. when current number string is empty
  if (el.textContent === '.' && currNumStr === '') {
    currNumStr = '0'
  }
  currNumStr += el.textContent
  display.innerHTML = currNumStr
  currNum = parseFloat(currNumStr)
  if (el.textContent === '%') {
    currNum = parseFloat(currNumStr)/100
    display.innerHTML = currNum
  }
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
  })
}

// clears window
clear.addEventListener('click', function() {
  display.innerHTML = 0;
  currNumStr = ''
  prevNum = 0
  currNum = 0
  operSign = undefined
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
  } else if (operation === '=') {
    return prevNum
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
