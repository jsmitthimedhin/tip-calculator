const amount = document.getElementById('amount');
const percentTip = document.getElementById('percent-tip');
const tipAmount = document.getElementById('tip-amount');
const form = document.getElementById('form');

function checkNumberRange() {
    if(amount.value > 0) {
        if(percentTip.value > 0 && percentTip.value < 101) {
            return true;
        }
    }
    return false;
}

function calculateTip(e) {
    e.preventDefault();
    let calculatedTip = amount.value*(percentTip.value/100);
    if(checkNumberRange()) {
        tipAmount.value = calculatedTip;
    } else {
        alert("Please input numbers greater than zero only. The tip percentage can only range between 1-100");
    }
}


form.addEventListener('submit', calculateTip);

