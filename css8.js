function updateCasenumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value; //value repeat hoise tai const na diye let kore dilam
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {

        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
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