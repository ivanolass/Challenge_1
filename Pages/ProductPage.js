import {Selector} from 'testcafe'

class ProductPage{
    constructor (){
        //Peoducts
        this.Backpack = Selector('#add-to-cart-sauce-labs-backpack')
        this.Backpacktag = Selector('#item_4_title_link')
        this.Bikelight = Selector('#add-to-cart-sauce-labs-bike-light')
        this.Bikelighttag = Selector('#item_0_title_link')
        this.Boltshirt = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.Boltshirttag = Selector('#item_1_title_link')
        this.Fjacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')
        this.Fjackettag = Selector('#item_5_title_link')
        this.Onesieshirt = Selector('#add-to-cart-sauce-labs-onesie')
        this.Onesieshirttag = Selector('#item_2_title_link')
        
        //Main Menu
        this.Allitems = Selector('#inventory_sidebar_link') 
        this.About = Selector('#about_sidebar_link')   
        this.Logout = Selector('#logout_sidebar_link')
        this.Resetapp = Selector('#reset_sidebar_link')
        this.Openmenu = Selector('#react-burger-menu-btn')
        this.Closemenu = Selector('#react-burger-cross-btn')
        this.Shopcart = Selector('a.shopping_cart_link')
        this.CartQant = Selector('span.shopping_cart_badge')
        this.Maintitle = Selector('span.title')
        this.filter = Selector ('select.product_sort_container')
        
    }
}
export default new ProductPage()
