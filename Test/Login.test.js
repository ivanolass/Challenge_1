import LoginPage from'../pages/LoginPage'
import ProductPage from'../Pages/ProductPage'
import { URLS,CREDENTIALS,MESSAGE} from'../Data/Constants' 

fixture('Challenge1 Test')
    .page(URLS.LOGPAGE)

    test('1.- Log in with a valid user', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')

    })

    test('2.- Log in with a invalid user', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.INV_USER.USERNAME,CREDENTIALS.INV_USER.PASSWD)
        
        await t.expect(LoginPage.Loginerromsg.innerText).eql(MESSAGE.E_MESSAGE.UNAME_ERROR)

    })

    test('3.- Log in Log out', async t => {
        await LoginPage.Loginuserform(CREDENTIALS.VA_USER.USERNAME,CREDENTIALS.VA_USER.PASSWD)

        await t.expect(ProductPage.Maintitle.innerText).eql('PRODUCTS')
        
        await t.    
            click(ProductPage.Openmenu)
            .click(ProductPage.Logout)
        t.expect(LoginPage.LoginButton.exists)
    })

    