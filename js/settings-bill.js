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

var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var radioSettingsAddBtn = document.querySelector(".radioSettingsAddBtn");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
//var totalCostElem = document.querySelector(".addToBillBtn");
var updateSettings = document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

var callTotal = 0;
var smsTotal = 0;
var totals = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;
        if (billItemTypeWithSettings === "call") {
            callTotal += callCost;
        }
        else if (billItemTypeWithSettings === "sms") {
            smsTotal += smsCost;
        }
        callTotalSettings.innerHTML = callTotal.toFixed(2);
        smsTotalSettings.innerHTML = smsTotal.toFixed(2);
        totals = callTotal + smsTotal;
        totalSettings.innerHTML = totals.toFixed(2);



        if (totals >= criticalLevel) {
            totalSettings.classList.add("danger");
        }

        else if (totals >= warningLevel) {
            totalSettings.classList.remove("warning");
            totalSettings.classList.add("warning");
        } 

        if (totals >= criticalLevel) {
            radioSettingsAddBtn.disabled = true;
        }
        if (totalSettings < warningLevel) {

            totalSettings.classList.remove("warning")
        }
    }

}


function Settings() {

    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = warningLevelSetting.value;
    criticalLevel = criticalLevelSetting.value;



    callCostSetting.innerHTML = callTotal.toFixed(2);
    smsCostSetting.innerHTML = smsTotal.toFixed(2);
    totals = callTotal + smsTotal;
    totalSettings.innerHTML = totals.toFixed(2);

    if (totals < criticalLevel) {
        radioSettingsAddBtn.disabled = false;
    }
    if (totals >= criticalLevel) {
        radioSettingsAddBtn.disabled = true;
    }


    if (totals >= criticalLevel) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");

    }
    if (totals >= warningLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (totalSettings < warningLevel) {
        totalSettings.classList.remove("danger")
        totalSettings.classList.remove("warning")
    }
    if (criticalLevel < totalSettings) {
        totalSettings.classList.remove("warning")
        totalSettings.classList.remove("danger")
    }

    // else {
    //     totalSettings.classList.remove("warning")
    //     totalSettings.classList.remove("danger")
    // }

}

radioSettingsAddBtn.addEventListener('click', radioBillTotal);
updateSettings.addEventListener('click', Settings);