const amount = document.querySelector('#amount')
const tip = document.querySelector('#tip')
const tax = document.querySelector('#tax')
const switches = document.querySelector('#flexSwitchCheckDefault')
const switchText = document.querySelector('#switchText')

const percentTip = document.getElementById('percent-tip');

const totalAmount = document.querySelector('#total')


const form = document.getElementById('form');

const button = document.querySelector('button')


switches.addEventListener('click', (e) => {
    
    if(!switches.checked){
        switchText.innerHTML = 'Exclude Tax'    
        tax.disabled = true
    }
    else{
        switchText.innerHTML = 'Include Tax'    
        tax.disabled = false
    }
        
})

function checkValues(amount, tax, tip) {
    if(amount > 0 && tax >= 0 && tip >= 0)
        return true
    return false
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount.value).toFixed(2)
    const amountTax = parseFloat(tax.value * 0.01).toFixed(2)
    const tipAmount = parseFloat(tip.value * 0.01).toFixed(2)
    let total = 0;

    if(!switches.checked && checkValues(amountValue, amountTax, tipAmount)){
        total = amountValue * tipAmount
    }else if(switches.checked && checkValues(amountValue, amountTax, tipAmount)){
        total = ((amountValue + (amountValue * amountTax)) * tipAmount)
    }
    
    totalAmount.innerHTML = total.toFixed(2)

    // const amountTax = parseInt(tax.value)
    // let taxAmount = parseInt((amount.value * (tax.value * 0.01)))
    // let total = parseInt(amount.value + taxAmount)
    // totalAmount.innerHTML = parseInt(total)

    
        
})





