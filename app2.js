// console.log('I am in a separate file')
//for plus
document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('clicked'); 
    //etake event handler function bole

    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1
    // console.log(caseNumber);
    //eke eke + hochee
})

//for minus
document.getElementById('case-minus').addEventListener('click', function () {
    //ei func take anonymous func bole


    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1;
})
//app3 te functional krbo

