const price = document.getElementById('main_price')
// memory area
const memory1 = document.getElementById('EightGB');
const memory2 = document.getElementById('sixtenGB');

// storage area

const storage1 = document.getElementById('storageFrist')
const storage2 = document.getElementById('storageSecond')
const storage3 = document.getElementById('storageThard')

// delevery cost 
const freeDelivery = document.getElementById('deliveryFree')
const paidDelivery = document.getElementById('fastCostlyDelivery')


// total
const total = document.getElementById('Total')
// memory field
const memoryField = document.getElementById("extra_memory_cost");
// storage Field
const storageField = document.getElementById("changeStoragePrice")
// storage Field
const shippingField = document.getElementById("shippingCost")
// memory button clik
memory1.addEventListener('click', function(){
    memoryField.innerText = '0';
    updateTotal()
})

memory2.addEventListener('click', function(){
    memoryField.innerText = '180';
    updateTotal()
})
// defrent stroage button click
storage1.addEventListener('click', function(){
    storageField.innerText = '0';
    updateTotal()
})
storage2.addEventListener('click', function(){
    storageField.innerText = '100';
    updateTotal()
})
storage3.addEventListener('click', function(){
    storageField.innerText = '180';
    updateTotal()
})

// shipping button click price changer


freeDelivery.addEventListener('click', function(){
    shippingField.innerText = '0';
    updateTotal()
});

paidDelivery.addEventListener('click', function(){
    shippingField.innerText = '20';
    updateTotal()
})

// update total

function updateTotal() {
    const moneyChange = Number(memoryField.innerText);
    const storageChange = Number(storageField.innerText);
    const shippingChange = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = moneyChange + productPrice + storageChange + shippingChange;
    total.innerText = grandTotal;

    
}