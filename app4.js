function updateCasenumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing) {
        caseInput.value = parseInt(caseNumber) + 1;
    } else {
        caseInput.value = parseInt(caseNumber) - 1;
    }

}


document.getElementById('case-plus').addEventListener('click', function () {


    updateCasenumber(true);

})


document.getElementById('case-minus').addEventListener('click', function () {



    updateCasenumber(false);
})