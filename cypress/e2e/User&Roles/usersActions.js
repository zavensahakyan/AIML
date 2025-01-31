import { newUserInfo, userLocators } from "./usersLocators";

class userrolePage{
    open(){
        cy.get(userLocators.userRoleSystem).click()
    }
    
    newUser(){
        cy.get(userLocators.addUser).click()
        cy.get(userLocators.newHCH).type(newUserInfo.newHCH)
        cy.get(userLocators.newUsername).type(newUserInfo.newUsername)
        cy.get(userLocators.newAnun).type(newUserInfo.newAnun)
        cy.get(userLocators.newAzganun).type(newUserInfo.newAzganun)
        cy.get(userLocators.newHayranun).type(newUserInfo.newHayranun)
        cy.get(userLocators.newBajin).type(newUserInfo.newBajin)
        cy.get(userLocators.newPashton).type(newUserInfo.newPashton)
        cy.get(userLocators.newEmail).type(newUserInfo.newEmail)
        cy.get(userLocators.newPhone).type(newUserInfo.newPhone)
        cy.get(userLocators.roleAdmin).check({force:true})
        cy.get(userLocators.roleObjMngEdit).check({force:true})
        cy.get(userLocators.roleObjMngView).check({force:true})
        cy.get(userLocators.roleOpMngEdit).check({force:true})
        cy.get(userLocators.roleOpMngView).check({force:true})
        cy.get(userLocators.roleDataEdit).check({force:true})
        cy.get(userLocators.roleDataView).check({force:true})
        cy.get(userLocators.createBtn).click()
        cy.wait(2000)
        cy.get(userLocators.userAddedMsg).should('exist')
        // cy.get(userLocators.cancellBtn).click()

    }
    

}

export default userrolePage