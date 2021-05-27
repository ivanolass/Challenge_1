import LoginPage from '../Pages/LoginPage'
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import ConfOrdPage from '../Pages/ConfOrdPage'
import OverviewPage from '../Pages/OverviewPage'
import ProductPage from '../Pages/ProductPage'
import { URLS,CREDENTIALS,MESSAGE } from '../Data/Constants' 

fixture('Challenge1 Test')
    .page(URLS.LOGPAGE)

    test('4.- Navigate Shooping cart', async t => {

        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        await t.click(ProductPage.Shopcart)       
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')

    })

    test('5.- Add single item to the Shoping cart', async t => {
        
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        await t.click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.click(ProductPage.Shopcart)       
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')
        await t.expect(ProductPage.Backpacktag.innerText).contains('Sauce Labs Backpack')

    })

    test('6.- Add multiple items to the Shoping cart', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')

        await t.
            click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.
            click(ProductPage.Bikelight)
        await t.expect(ProductPage.CartQant.innerText).eql('2')
        await t.
            click(ProductPage.Boltshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('3')
        await t.
            click(ProductPage.Fjacket)
        await t.expect(ProductPage.CartQant.innerText).eql('4')

        await t.click(ProductPage.Shopcart)       
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')

        await t.expect(ProductPage.Backpacktag.innerText).contains('Sauce Labs Backpack')
        await t.expect(ProductPage.Bikelighttag.innerText).contains('Sauce Labs Bike Light')
        await t.expect(ProductPage.Boltshirttag.innerText).contains('Sauce Labs Bolt T-Shirt')
        await t.expect(ProductPage.Fjackettag.innerText).contains('Sauce Labs Fleece Jacket')

    })

    test('7- Continue with missing mail information', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        await t.
            click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.
            click(ProductPage.Bikelight)
        await t.expect(ProductPage.CartQant.innerText).eql('2')
        await t.
            click(ProductPage.Boltshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('3')
        await t.
            click(ProductPage.Fjacket)
        await t.expect(ProductPage.CartQant.innerText).eql('4')

        await t.
        click(ProductPage.Shopcart)
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')        
        .click(CartPage.checkout)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: YOUR INFORMATION')    
        
        await t.
        typeText(CheckoutPage.Fname,"Juan",{paste:true})
        .typeText(CheckoutPage.Lname,"Perez",{paste:true})
        .click(CheckoutPage.Continue)
        await t.expect(CheckoutPage.Errormessage.innerText).eql(MESSAGE.E_MESSAGE.ZIP_ERROR)

    })

    test('8.- Fill users information', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        t.expect(ProductPage.Maintitle.exist).ok
        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')

        await t.
            click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.
            click(ProductPage.Bikelight)
        await t.expect(ProductPage.CartQant.innerText).eql('2')
        await t.
            click(ProductPage.Boltshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('3')
        await t.
            click(ProductPage.Fjacket)
        await t.expect(ProductPage.CartQant.innerText).eql('4')

        await t.
        click(ProductPage.Shopcart)
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')          
        .click(CartPage.checkout)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: YOUR INFORMATION')    
        
        await t.
        typeText(CheckoutPage.Fname,"Juan",{paste:true})
        .typeText(CheckoutPage.Lname,"Perez",{paste:true})
        .typeText(CheckoutPage.Zcode,"45541",{paste:true})
        .click(CheckoutPage.Continue)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: OVERVIEW')

    })

    test('9.- Final order items', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        t.expect(ProductPage.Maintitle.exist).ok
        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        await t.
            click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.
            click(ProductPage.Bikelight)
        await t.expect(ProductPage.CartQant.innerText).eql('2')
        await t.
            click(ProductPage.Boltshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('3')
        await t.
            click(ProductPage.Fjacket)
        await t.expect(ProductPage.CartQant.innerText).eql('4')
        await t.
            click(ProductPage.Onesieshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('5')

        await t.
        click(ProductPage.Shopcart)
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')          
        .click(CartPage.checkout)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: YOUR INFORMATION')    
        
        await t.
        typeText(CheckoutPage.Fname,"Juan",{paste:true})
        .typeText(CheckoutPage.Lname,"Perez",{paste:true})
        .typeText(CheckoutPage.Zcode,"45541",{paste:true})
        .click(CheckoutPage.Continue)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: OVERVIEW')

        await t.expect(ProductPage.Backpacktag.innerText).contains('Sauce Labs Backpack')
        await t.expect(ProductPage.Bikelighttag.innerText).contains('Sauce Labs Bike Light')
        await t.expect(ProductPage.Boltshirttag.innerText).contains('Sauce Labs Bolt T-Shirt')
        await t.expect(ProductPage.Fjackettag.innerText).contains('Sauce Labs Fleece Jacket')
        await t.expect(ProductPage.Onesieshirttag.innerText).contains('Sauce Labs Onesie')

        await t.
        click(OverviewPage.Finish)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: COMPLETE!')
        await t.expect(ConfOrdPage.Orderinformation.innerText).eql(MESSAGE.SUC_MESSAGE.ORD_SUCCESS)


    })

    test('10.- Complete the order', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        await t.
            click(ProductPage.Backpack)
        await t.expect(ProductPage.CartQant.innerText).eql('1')
        await t.
            click(ProductPage.Bikelight)
        await t.expect(ProductPage.CartQant.innerText).eql('2')
        await t.
            click(ProductPage.Boltshirt)
        await t.expect(ProductPage.CartQant.innerText).eql('3')
        await t.
            click(ProductPage.Fjacket)
        await t.expect(ProductPage.CartQant.innerText).eql('4')

        await t.
        click(ProductPage.Shopcart)
        await t.expect(ProductPage.Maintitle.innerText).eql('YOUR CART')          
        .click(CartPage.checkout)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: YOUR INFORMATION')    
        
        await t.
        typeText(CheckoutPage.Fname,"Juan",{paste:true})
        .typeText(CheckoutPage.Lname,"Perez",{paste:true})
        .typeText(CheckoutPage.Zcode,"45541",{paste:true})
        .click(CheckoutPage.Continue)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: OVERVIEW')

        await t.
        click(OverviewPage.Finish)
        await t.expect(ProductPage.Maintitle.innerText).eql('CHECKOUT: COMPLETE!')
        await t.expect(ConfOrdPage.Orderinformation.innerText).eql(MESSAGE.SUC_MESSAGE.ORD_SUCCESS)


    })