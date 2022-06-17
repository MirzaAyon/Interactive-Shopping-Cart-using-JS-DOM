function updateProduchnumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {

        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
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