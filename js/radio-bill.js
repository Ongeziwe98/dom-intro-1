// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var  billItemTypeRadio= document.querySelector("billItemTypeRadio");
var radioBillAddBtn= document.querySelector("radioBillAddBtn");
var callTotalTwo= document.querySelector("callTotalTwo");
var totalTwo= document.querySelector("totalTwo");



var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}