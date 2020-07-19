
//Constantes
const makeOperationButton = document.querySelector('#makeOperationButton');
const resetOperations = document.querySelector('#resetOperations');



eventListeners();

function eventListeners() {
    if(makeOperationButton){
        makeOperationButton.addEventListener('click', makeOperation);
    }
    if(resetOperations){
        resetOperations.addEventListener('click', deleteOperations);
    }
}

function alert(type, text) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        type: type,
        title: text
      })
}

function deleteOperations(e) {
    e.preventDefault();
    document.querySelector('#containerRuleOf3').reset();
}

function makeOperation(e) {
    e.preventDefault();
    const firstNumber = document.querySelector('#firstNumber').value;
    const secondNumber = document.querySelector('#secondNumber').value;
    const thirdNumber = document.querySelector('#thirdNumber').value;
    const result = document.querySelector('#result');

    if(firstNumber === '' || secondNumber === '' || thirdNumber === '') {
        alert('error', 'Todos los campos son obligatorios');
    } else {
        operationResult = secondNumber * thirdNumber / firstNumber;
        // console.log(operationResult);
        result.value = operationResult;

    }

}