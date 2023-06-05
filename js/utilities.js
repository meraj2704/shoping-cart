// update prices
function updatePrice(price, quantity, priceId) {
    const totalPrice = document.getElementById(priceId);
    const newPrice = price * quantity;
    totalPrice.innerText = newPrice;

}

//update total prices
function totalPrices() {
    const phoneTotalPrice = document.getElementById('phone-total');
    const phoneTotalString = phoneTotalPrice.innerText;
    const phoneTotal = parseFloat(phoneTotalString);
    const caseTotalPrice = document.getElementById('case-total');
    const caseTotalString = caseTotalPrice.innerText;
    const caseTotal = parseFloat(caseTotalString);


    const totalPrices = phoneTotal + caseTotal;
    const taxString = (totalPrices*0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const taxhtml = document.getElementById('tax-amount');
    taxhtml.innerText = (totalPrices*0.1).toFixed(2);
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalPrices;
    const newTotalPrices =totalPrices + tax;
    const total = document.getElementById('final-total');
    total.innerText = newTotalPrices;
}