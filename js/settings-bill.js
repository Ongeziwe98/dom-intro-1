// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
// var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// var settingTotalAddBtn = document.querySelector(".settingBillAddBtn");
// var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
// var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
// var callTotalSettings =  document.querySelector(".callTotalTwo");
// var smsTotalSettings =  document.querySelector(".smsTotalTwo");
// var TotalElem =  document.querySelector(".totalTwo");
// var totalCostElem = document.querySelector(".addToBillBtn"); 
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalElem =  document.querySelector(".callTotalTwo");
var smsTotalElem =  document.querySelector(".smsTotalTwo");
var TotalElem =  document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var total = 0;


function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        if (billItemType === "call") {
            callsTotal += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal += 0.75;
        }

        callsTotalElem.innerHTML = callsTotal.toFixed(2);
        smsTotalElem.innerHTML = smsTotal.toFixed(2);
        var total = callsTotal + smsTotal;
        TotalElem.innerHTML = total.toFixed(2);

        radioTotalAddBtn.addEventListener('click', radioBillTotal);



        // function settingBillTotal() {
        //     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        //     if (checkedRadioBtn) {
        //         var billItemType = checkedRadioBtn.value
        //         if (billItemType === "call") {
        //             callsTotal += 2.75
        //         }
        //         else if (billItemType === "sms") {
        //             smsTotal += 0.75;
        //         }
        
        //         callsTotalElem.innerHTML = callsTotal.toFixed(2);
        //         smsTotalElem.innerHTML = smsTotal.toFixed(2);
        //         var total = callsTotal + smsTotal;
        //         TotalElem.innerHTML = total.toFixed(2);
        
        //         radioTotalAddBtn.addEventListener('click', radioBillTotal);
