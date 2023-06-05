
// here we work for just incrase phone number 
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneId = document.getElementById('phone-number-field');
    const numberOfPhoneString = phoneId.value;
    const prevPhoneNumber = parseInt(numberOfPhoneString);
    const newPhoneNumber = prevPhoneNumber + 1;
    phoneId.value = newPhoneNumber;
    updatePrice(1219, newPhoneNumber, 'phone-total');
    totalPrices();
})
//here we work for decrase phone number but we cant decrase more than 0
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneId = document.getElementById('phone-number-field');
    const numberOfPhoneString = phoneId.value;
    const prevPhoneNumber = parseInt(numberOfPhoneString);
    if(prevPhoneNumber>0)
    {
        const newPhoneNumber = prevPhoneNumber - 1;
        phoneId.value = newPhoneNumber;
        updatePrice(1219, newPhoneNumber, 'phone-total');
        totalPrices();

    }
    else
    {
        alert("Your value already 0");
    }
})
