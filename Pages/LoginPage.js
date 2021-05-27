import {Selector, t} from 'testcafe'

    //elemets
class LoginPage{
    constructor (){
        this.LoginButton = Selector('#login-button')
        this.Passwordfield = Selector('#password')
        this.UserNamefield = Selector('#user-name')
        this.Loginerromsg = Selector('h3:nth-child(1)')
    }
        //login function
    async Loginuserform(username, password){
        await t.typeText(this.UserNamefield, username, {paste:true})        
        await t.typeText(this.Passwordfield, password, {paste:true})
        await t.click(this.LoginButton)
    }

}
export default new LoginPage()