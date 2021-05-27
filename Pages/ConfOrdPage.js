import {Selector} from 'testcafe'

//elemets
class ConfOrdPage{
    constructor (){
       this.Backhome = Selector('#back-to-products')
       this.Orderinformation = Selector('h2.complete-header')
    }
}
export default new ConfOrdPage()