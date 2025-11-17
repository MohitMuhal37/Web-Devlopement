let defaultResult = 0;

currentResult = defaultResult;

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
        const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
        outputResult(currentResult, calcDescription);

}

function addNumbers(){
        const enterNumber = parseInt(userInput.value);
        const initialResult = currentResult;
        currentResult = currentResult + enterNumber;
        createAndWriteOutput('+', initialResult, enterNumber);
}

function subtract(){
        const enterNumber = parseInt(userInput.value);
        const initialResult = currentResult;
        currentResult = currentResult - enterNumber;
        createAndWriteOutput('-', initialResult, enterNumber);
}
function multiply(){
        const enterNumber = parseInt(userInput.value);
        const initialResult = currentResult;
        currentResult = currentResult * enterNumber;
        createAndWriteOutput('*', initialResult, enterNumber);
}
function divide(){
        const enterNumber = parseInt(userInput.value);
        const initialResult = currentResult;
        currentResult = currentResult / enterNumber;
        createAndWriteOutput('/', initialResult, enterNumber);
}
// currentResult = addNumbers(8, 7);

addBtn.addEventListener('click', addNumbers)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

