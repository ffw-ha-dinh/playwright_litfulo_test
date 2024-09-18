const{test, expect}=require('@playwright/test');
const {SignUp}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/sign-up');
//const {access}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/sign-up');
const {copaysavingscardstep1}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/copaysavingscard');
const {copaysavingscardstep2}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/copaysavingscard');
const {copaysavingscardstep3}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/copaysavingscard');
const {copaysavingscardstep4}=require('/Users/dinhha/Documents/projects/playwright_litfulo_test/pagesPOM/copaysavingscard');
test('Sign up Copay', async({page})=>{
    const SignUpPage=new SignUp(page);
    await SignUpPage.goto();
    // const accessvpn=new access(page);
    // await accessvpn.clickaccountbutton();
    // await accessvpn.login('DINHT05','Tomtum@189');
    await SignUpPage.scrollcopaysavingscardCheckbox();
    await SignUpPage.choosecopaysavingscardCheckbox();
    const CopayStep1=new copaysavingscardstep1 (page);
    await CopayStep1.copaysavingscarFillForm('firstname1','lastname1','test1@gmail.com');
    //await expect (page.getByRole('heading',{name:"Please confirm that the patient or the patient's caregiver:"})).toBeVisible();
    await expect (page.getByText('Please confirm that the patient or the patient’s caregiver:')).toBeVisible();
    const CopayStep2=new copaysavingscardstep2 (page);
    await CopayStep2.choosenoCheckbox();
    await expect (page.getByText('We are sorry, but you are not eligible to receive a Copay Savings Card or LITFULO information. You must be 18 years of age or older and a resident of the U.S. or Puerto Rico to enroll.')).toBeVisible();
    await CopayStep2.chooseyesCheckbox();
    await expect (page.getByText('Please confirm if any of the following statements are true for the person signing up:')).toBeVisible();
    const CopayStep3=new copaysavingscardstep3 (page);
    await CopayStep3.chooseyesAtLeastOneOfTheseIsTrueCheckbox();
    await expect (page.getByText('We’re sorry. More information is needed before we can confirm your Copay Savings Card eligibility.')).toBeVisible();
    await CopayStep3.choosenoNoneOfTheseAreTrueCheckbox();
    await expect (page.getByText('LITFULO Copay Savings Program Consent')).toBeVisible();
    const CopayStep4=new copaysavingscardstep4 (page);
    await CopayStep4.choosebyCheckingThisBoxAndClicking();
    await CopayStep4.choosebyCheckingThisBoxIConfirm();
    // await CopayStep4.choosetextMe();
    await CopayStep4.chooseiWouldLike();
    // const CopayStep5=new copaysavingscardstep5 (page);
    // await CopayStep5.fillPhoneNumber(1234567890);
    await CopayStep4.clicksubmitButton();
    await expect (page.getByText('You’re all set!')).toBeVisible();

})









