var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

var bill = calculateBtnClicked();
calculateBtn.addEventListener("click", function(){
bill.billsMade();
billTotalElement.innerHTML = bill.billsMade()
});

var roundedBillTotal = billTotalElement;

if (billTotal.criticalLevel){
    billTotalElement.classList.add("danger");
    billTotalElement.classList.remove("warning");

}
else if (billTotal.warningLevel){
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");

}else{
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");

}
billTotalElement.innerHTML = roundedBillTotal;

calculateBtn.addEventListener('click', calculateBtnClicked);