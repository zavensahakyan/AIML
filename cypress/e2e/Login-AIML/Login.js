import {loginLocators, loginInformation} from "./LoginLocator";

class loginPage{
    open(){
        cy.visit("http://dmas.daniam.am/login")
    }

    invalidLogin(){
        cy.get(loginLocators.username).type(loginInformation.invalidUser)
        cy.get(loginLocators.password).type(loginInformation.invalidPassword)
        cy.get(loginLocators.loginButton).click()
     //   cy.wait(2000);
        cy.get(loginLocators.loginError).should('exist')
        cy.get(loginLocators.username).clear()
        cy.get(loginLocators.password).clear()

    }

    login(){
        cy.get(loginLocators.username).type(loginInformation.username)
        cy.get(loginLocators.password).type(loginInformation.password)
        cy.get(loginLocators.loginButton).click()
        cy.wait(2000);
        cy.get(loginLocators.userIcon).should('exist')

    }

}
export default loginPage