describe('calculate-bill function' , function(){
    it('should return R2.75 when call is entered in the text box. ' , function(){
       var ongie = calculateBtnClicked();
        assert.equal(ongie.billsMade("call"), "R2.75");
    });

    it('should return R0.75 when sms is entered in the text box. ' , function(){
        var ongie = calculateBtnClicked();
         assert.equal(ongie.billsMade("sms"), "R0.75");
     });

     it('should return 0 when the string entered is invalid. ' , function(){
        var ongie = calculateBtnClicked();
         assert.equal(ongie.billsMade(), "R0.00");
     });
     
    //  it('should return the total phone bill is equal or greater than 20 . ' , function(){
    //     var ongie = calculateBtnClicked();
    //     ongie.billsMade("sms")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("call")
    //     ongie.billsMade("sms")

    //      assert.equal(ongie.billsMade(), 'R20.75');
    //  });
     
});