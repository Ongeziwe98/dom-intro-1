// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalElem =  document.querySelector(".callTotalTwo");
var smsTotalElem =  document.querySelector(".smsTotalTwo");
var TotalElem =  document.querySelector(".totalTwo");
//var totalCostElem = document.querySelector(".addToBillBtn");

var callsTotal = 0;
var smsTotals = 0;
var total = 0;

function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        if (billItemType === "call") {
            callsTotal += 2.75
        }
        else if (billItemType === "sms") {
            smsTotals += 0.75;
        }

        callsTotalElem.innerHTML = callsTotal.toFixed(2);
        smsTotalElem.innerHTML = smsTotals.toFixed(2);
        var total = callsTotal + smsTotals;
        TotalElem.innerHTML = total.toFixed(2);

        if (total >= 50) {
            TotalElem.classList.add("danger");
        }
        else if (total >= 30) {
            TotalElem.classList.add("warning");
        }
    }
}
radioTotalAddBtn.addEventListener('click', radioBillTotal);