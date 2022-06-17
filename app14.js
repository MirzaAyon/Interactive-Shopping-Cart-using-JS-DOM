function updateProduchnumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let caseNumber = productInput.value;
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
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
}
//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {


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