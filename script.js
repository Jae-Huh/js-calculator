var display = document.getElementById('display')
var buttons = document.getElementById('buttons')
// var operation = document.getElementsByClassName('operation')

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
    clickedOperation(event.target)
  }
  if (event.target.id === 'clear') {
    clickedClear()
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


function clickedOperation(el) {
  if (operSign) {
    prevNum = calculate(operSign, prevNum, currNum)
    display.innerHTML = prevNum
  } else {
    prevNum = currNum
  }
  currNum = 0
  currNumStr = ''
  operSign = el.textContent
}


function clickedClear() {
  display.innerHTML = 0;
  currNumStr = ''
  prevNum = 0
  currNum = 0
  operSign = undefined
}


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
