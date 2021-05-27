import {Selector} from 'testcafe'

//elemets
class CheckOutPage{
    constructor (){
       this.Fname = Selector('#first-name')
       this.Lname = Selector('#last-name')
       this.Zcode = Selector('#postal-code')
       this.Cancel = Selector('#cancel')
       this.Continue = Selector('#continue')
       this.Errormessage = Selector ('h3:nth-child(1)')
    }
}
export default new CheckOutPage()