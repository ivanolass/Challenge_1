import {Selector} from 'testcafe'

//elemets
class CartPage{
    constructor (){
        this.continueshop = Selector('#continue-shopping')
        this.checkout = Selector('#checkout')
    }
    
}
export default new CartPage()