
// here we are going to work for case number incrase
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseId = document.getElementById('case-number-field');
    const numberOfCaseString = caseId.value;
    const prevCaseNumber = parseInt(numberOfCaseString);
    const newCaseNumber = prevCaseNumber + 1;
    caseId.value = newCaseNumber;
    updatePrice(59, newCaseNumber, 'case-total');
    totalPrices();

})

// here we are going to work with for case number decrase
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseId = document.getElementById('case-number-field');
    const numberOfCaseString = caseId.value;
    const prevCaseNumber = parseInt(numberOfCaseString);
    if(prevCaseNumber>0)
    {
        const newCaseNumber = prevCaseNumber - 1;
        caseId.value = newCaseNumber;
        updatePrice(59, newCaseNumber, 'case-total');
        totalPrices();

    }
    else{
        alert("Your value already 0");
    }
})