import { loginLocators } from "../Login-AIML/LoginLocator";
//import { profileLocators } from "./ProfileLocators";
import { profileInformation, profileFields, profileLocators } from "./ProfileLocators";

class profilePage{
    

    editInfo(){
        cy.get(loginLocators.userIcon).click()
        cy.get(profileLocators.personInfo).click()
        cy.get(profileLocators.changeBtn).click()

        profileFields.forEach(field => {
            cy.get(field.locator).clear();
            cy.get(field.locator).type(field.value);
          });
        cy.get(profileLocators.saveBtn).click()
       /* cy.get(profileLocators.hchField).clear().type(profileInformation.hch)
        cy.get(profileLocators.anunField).clear().type(profileInformation.anun)
        cy.get(profileLocators.azganunField).clear().type(profileInformation.azganun)
        cy.get(profileLocators.hayranunField).clear()//.type(profileInformation.hayranun)
        cy.get(profileLocators.pashtonField).clear().type(profileInformation.pashton)
        cy.get(profileLocators.bajinField).clear().type(profileInformation.bajin)
        cy.get(profileLocators.emailField).clear().type(profileInformation.email)
        cy.get(profileLocators.phoneField).clear().type(profileInformation.phone) */
        //cy.get(profileLocators.errorMessage).should('exist')

    }

    repeatHCH(){
        cy.get(loginLocators.userIcon).click()
        cy.get(profileLocators.personInfo).click()
        cy.get(profileLocators.changeBtn).click()
        cy.get(profileLocators.hchField).clear().type(profileInformation.repeatHCH)
        cy.get(profileLocators.saveBtn).click()
        cy.get(profileLocators.errorMessage).should('exist')

    }

    repeatEmail(){
        cy.get(loginLocators.userIcon).click()
        cy.get(profileLocators.personInfo).click()
        cy.get(profileLocators.changeBtn).click()
        cy.get(profileLocators.emailField).clear().type(profileInformation.repeatEmail)
        cy.get(profileLocators.saveBtn).click()
        cy.get(profileLocators.errorMessage).should('exist')

    }


}

export default profilePage