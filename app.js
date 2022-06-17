// console.log('I am in a separate file')

document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('clicked'); 
    //etake event handler function bole

    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    console.log(caseNumber);
})