const{expect}=require('@playwright/test');
exports.copaysavingscardstep1=class copaysavingscardstep1{
    constructor (page){
        this.page=page;
        this.fristnameInput=page.getByTestId('firstName');
        this.lastnameInput=page.getByTestId('lastName');
        this.emailInput=page.getByTestId('email');
        this.continueToNextStepButton=page.getByRole('button',{name:'Continue To Next Step'});
    }
    async copaysavingscarFillForm(firstname,lastname,email){
        await this.fristnameInput.fill(firstname);
        await this.lastnameInput.fill(lastname);
        await this.emailInput.fill(email);
        await this.continueToNextStepButton.press('Enter');
    }
}
exports.copaysavingscardstep2=class copaysavingscardstep2{
        constructor(page){
            this.page=page;
            this.yesCheckbox=page.getByText('Yes',{exact:true});
            this.noCheckbox=page.getByText('No',{exact:true});
        }
        
        async chooseyesCheckbox(){
            await this.yesCheckbox.click();  
        }
        async choosenoCheckbox(){
            await this.noCheckbox.click();  
        }
}
exports.copaysavingscardstep3=class copaysavingscardstep3{
    constructor(page){
        this.page=page;
        this.yesAtLeastOneOfTheseIsTrueCheckbox=page.getByText('Yes, at least one of these is true');
        this.noNoneOfTheseAreTrueCheckbox=page.getByText('No, none of these are true');
    }
    async chooseyesAtLeastOneOfTheseIsTrueCheckbox(){
        await this.yesAtLeastOneOfTheseIsTrueCheckbox.click();
    }
    async choosenoNoneOfTheseAreTrueCheckbox(){
        await this.noNoneOfTheseAreTrueCheckbox.click();
    }
}
exports.copaysavingscardstep4=class copaysavingscardstep4{
    constructor(page){
        this.page=page;
        this.byCheckingThisBoxAndClicking=page.getByText('By checking this box and ');
        this.byCheckingThisBoxIConfirm=page.getByText('By checking this box, I');
        // this.textMe=page.getByText('Text me a Copay Savings Card');
        this.iWouldLike=page.getByText('I would like to be');
        this.submitButton=page.getByRole('button',{name:'Sign me up'});
    }
    async choosebyCheckingThisBoxAndClicking(){
        await this.byCheckingThisBoxAndClicking.click();
    }
    async choosebyCheckingThisBoxIConfirm(){
        await this.byCheckingThisBoxIConfirm.click();
    }
    // async choosetextMe(){
    //     await this.textMe.click();
    // }
    async chooseiWouldLike(){
        await this.iWouldLike.click();
    }
    async clicksubmitButton(){
        await this.submitButton.click();
    }
}
// exports.copaysavingscardstep5=class copaysavingscardstep5{
//     constructor(page){
//         this.page=page;
//         this.phoneNumber=page.getByTestID('phonenumber');
//     }
//     async fillPhoneNumber(phonenumber){
//         await this.phoneNumber.fill(phonenumber);
//     }
//}




