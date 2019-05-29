
var  billTypeText = document.querySelector(".billTypeText");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElemOne = document.querySelector(".callTotalOne");
var smsTotalElemOne = document.querySelector(".smsTotalOne");
var totalCostElemOne = document.querySelector(".totalOne");

var callsTotalOne = 0;
var smsTotalOne = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotalOne += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElemOne.innerHTML = callsTotalOne.toFixed(2);
    smsTotalElemOne.innerHTML = smsTotalOne.toFixed(2);
    var totalCost = callsTotalOne + smsTotalOne;
    totalCostElemOne.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElemOne.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElemOne.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);


