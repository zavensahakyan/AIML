import {loginLocators, loginInformation} from "./LoginLocator";

class loginPage{
    open(){
        cy.visit("http://192.168.150.222:3000/login")
    }

    login() {
        cy.get(loginLocators.username).type(loginInformation.username)
        cy.get(loginLocators.password).type(loginInformation.password)
        cy.get(loginLocators.loginButton).click()
        cy.wait(2000);
        cy.get(loginLocators.userIcon).should('exist')

    }

}
export default loginPage