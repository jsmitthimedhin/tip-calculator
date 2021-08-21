const amount = document.getElementById('amount');
const percentTip = document.getElementById('percent-tip');
const total = document.getElementById('total');
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
    let totalAmt = amount.value*(percentTip.value/100);
    if(checkNumberRange()) {
        total.value = totalAmt;
    } else {
        alert("Please input numbers greater than zero only. The tip percentage can only range between 1-100");
    }
}


form.addEventListener('submit', calculateTip);

