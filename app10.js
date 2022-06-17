function updateCasenumber(product, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
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
//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    // console.log('phone plus clicked');

    updateCasenumber('phone', true)
    //kintu ekhn phone er plus e click korle chachisg er ta bartese
})

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {


    updateCasenumber('case', true);

})


document.getElementById('case-minus').addEventListener('click', function () {



    updateCasenumber('case', false);
})
//but ekhn bartese 2nd ta, click kortesi 1st tae