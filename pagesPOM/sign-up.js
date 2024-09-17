const{expect}=require('@playwright/test');
exports.SignUp=class SignUp{
    constructor(page){
        this.page=page;
        this.heading=page.getByRole('heading',{name:'Sign up to get started!'});
        // this.herobanner=page.getByAltText('A child hugging a woman with severe alopecia areata after hair regrowth').nth(1);
        this.informationCheckbox=page.getByText('Information about LITFULO and alopecia areata');
        this.copaysavingscardCheckbox=page.getByText('Copay Savings Card').nth(1);
        this.bothCheckbox=page.getByText('Both');
    }
    async goto(){
        await this.page.goto('https://litfulocomritlecitinibus-main-live.web.pfizer/savings-and-support/sign-up',{timeout:3000});
    }
    async chooseinformationCheckbox(){
        await this.informationCheckbox.click();
    }
    async scrollcopaysavingscardCheckbox(){
        await this.heading.hover();
        // await this.herobanner.hover();
        await this.page.mouse.wheel(0,15);
        await this.copaysavingscardCheckbox.click();
    }
    async choosecopaysavingscardCheckbox(){
        await this.copaysavingscardCheckbox.click();
    }
    async choosebothCheckbox(){
        await this.bothCheckbox.click();
    }
}
exports.access=class access{
    constructor(page){
        this.page=page;
        this.accountbutton=page.getByTestId('idp1');
        this.userName=page.getByTestId('username');
        this.passWord=page.getByTestId('password');
        this.acceptandconnect=page.getByTestId('submit_button');
    }
    async clickaccountbutton(){
        await this.accountbutton.click();
    }
    async login(username,password ){
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.acceptandconnect.click();
    }
}