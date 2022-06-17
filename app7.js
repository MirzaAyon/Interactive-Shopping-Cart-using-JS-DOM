function updateCasenumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {

        caseInput.value = parseInt(caseNumber) - 1;
    }
    //update case total
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59;

}


document.getElementById('case-plus').addEventListener('click', function () {


    updateCasenumber(true);

})


document.getElementById('case-minus').addEventListener('click', function () {



    updateCasenumber(false);
})