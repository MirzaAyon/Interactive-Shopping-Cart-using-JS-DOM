function updateProduchnumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let caseNumber = productInput.value; //value repeat hoise tai const na diye let kore dilam
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {

        caseNumber = parseInt(caseNumber) - 1;
    }
    productInput.value = caseNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = caseNumber * price;

}
//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    // console.log('phone plus clicked');

    updateProduchnumber('phone', 1229, true)

})
document.getElementById('phone-minus').addEventListener('click', function () {


    updateProduchnumber('phone', 1229, false)

})

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {


    updateProduchnumber('case', 59, true);

})


document.getElementById('case-minus').addEventListener('click', function () {



    updateProduchnumber('case', 59, false);
})
//but ekhn bartese 2nd ta, click kortesi 1st tae