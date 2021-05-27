import {Selector} from 'testcafe'

//elemets
class OverviewPage{
    constructor (){
        this.Cancel = Selector('#cancel')
        this.Finish = Selector('#finish')
    }
}
export default new OverviewPage()