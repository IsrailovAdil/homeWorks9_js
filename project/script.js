let currentNum = 0;
let buffer = '0';
let prevOperator = null;

const screen = document.querySelector('#screen');


function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
    console.log(screen.innerText = buffer)
}



function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            currentNum = 0;
            prevOperator = null;
          let res= screen.innerText = buffer;
          res=0;
            break;
        case 'равно':
            if (prevOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            prevOperator = null;
            buffer = '' + currentNum;
            currentNum = 0;
            console.log(currentNum)
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.slice(0, -1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }
    const inBuffer = parseInt(buffer);

    if (currentNum === 0) {
        currentNum = inBuffer;
    } else {
        flushOperation(inBuffer);
    }

    prevOperator = symbol;
    buffer = '0';
}

function flushOperation(inBuffer) {
    if (prevOperator === '+') {
        currentNum += inBuffer;
    } else if (prevOperator === '-') {
        currentNum -= inBuffer;
    } else if (prevOperator === '×') {
        currentNum *= inBuffer;
    } else if (prevOperator === '÷') {
        currentNum /= inBuffer;
    }
}

function handleNumber(numString) {
    if (buffer === "0") {
        buffer = numString;
    } else {
        buffer += numString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        if (event.target.matches('button')) {
            buttonClick(event.target.innerText);
        }
    });
}

init();
