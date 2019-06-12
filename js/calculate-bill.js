function calculateBtnClicked(){
    var billTotal = 0;

    function phoneBills(bills){
        if(bills  === "call"){
            billTotal += 2.75;
        }
       else if(bills  === "sms"){
            billTotal += 0.75;
        }
        return "R" + billTotal.toFixed(2)
    }

 
function criticalLevel(){
    return billTotal >= 30;
}

function warningLevel(){
    return billTotal >= 20;
}

return{
    billsMade: phoneBills,
    colorIndicator1: criticalLevel,
    colorIndicator2: warningLevel

}

}
























// var calculateBtnClicked= function(){

//     // this is scoped inside the ShoppingBasket function
//     var fruitsBought = {};

//     var buyFruit = function(fruitName){
//         if (fruitsBought[fruitName] === undefined){
//             fruitsBought[fruitName] = 0;
//         }
//         fruitsBought[fruitName] += 1;
//     };

//     var checkFruit = function(fruitName){
//         return "You have " + fruitsBought[fruitName] + " " + fruitName + "(s) in your basket.";
//     }

//     return {
//         buy : buyFruit,
//         check : checkFruit
//     }
// }














// function calculateBtnClicked() {
//     var billString = billStringField.value;
//     var billItems = billString.split(",");
//     var billTotal = 0;
//     for (var i = 0; i < billItems.length; i++) {
//         var billItem = billItems[i].trim();
//         if (billItem === "call") {
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms") {
//             billTotal += 0.75;
//         }
//     }
//     var roundedBillTotal = billTotal.toFixed(2);


























    
//     if (billTotal >= 30){
//         billTotalElement.classList.add("danger");
//         billTotalElement.classList.remove("warning");

//     }
//     else if (billTotal >= 20){
//         billTotalElement.classList.add("warning");
//         billTotalElement.classList.remove("danger");

//     }else{
//         billTotalElement.classList.remove("warning");
//         billTotalElement.classList.remove("danger");

//     }
//     billTotalElement.innerHTML = roundedBillTotal;
// }
    calculateBtn.addEventListener('click', calculateBtnClicked);

