import { addUserLocators, editUserLocators, deleteUser,  editUserInputFields,  newUserInputFields, 
    newUserSelectFields, newUserWrongEmail, newUserWrongHCH, newUserWrongUsername, editUserInfo } from "./usersLocators";

class userrolePage{
    open(){
        cy.get(addUserLocators.userRoleSystem).click()
    }
    
    addRepeatEmail(){
        
        cy.get(addUserLocators.addUser).click()
        //Krknvox email
        newUserWrongEmail.forEach(field => {
            cy.get(field.locator).type(field.value);
          });
        cy.get(addUserLocators.newEmail).type('zaven.sahakyan@daniam.am')
        newUserSelectFields.forEach(role => {
            cy.get(role).check({ force: true });
          });
        cy.get(addUserLocators.createBtn).click()
        cy.log('🔹 ASSERTION: Checking if the duplicate email message appears');
        cy.get(addUserLocators.repeatMsg).should('exist')
       /* newUserClearInput.forEach(field => {
            cy.get(field.locator).clear();
          }); */

    }

    addRepeatHCH(){
        
        cy.get(addUserLocators.addUser).click()
        //Krknvox HCH
        newUserWrongHCH.forEach(field => {
            cy.get(field.locator).type(field.value);
          });
        cy.get(addUserLocators.newHCH).type('0303030303')
        newUserSelectFields.forEach(role => {
          cy.get(role).check({ force: true });
        });
        cy.get(addUserLocators.createBtn).click()
        cy.log('🔹 ASSERTION: Checking if the duplicate HCH message appears');
        cy.get(addUserLocators.repeatMsg).should('exist')
       /* newUserClearInput.forEach(field => {
            cy.get(field.locator).clear();
          });       */
        
    }

    addRepeatUsername(){
       
        cy.get(addUserLocators.addUser).click()
        //Krknvox username
        newUserWrongUsername.forEach(field => {
            cy.get(field.locator).type(field.value);
          });
        cy.get(addUserLocators.newUsername).type('zavensahakyan')
        newUserSelectFields.forEach(role => {
          cy.get(role).check({ force: true });
        });
        cy.get(addUserLocators.createBtn).click()
        cy.log('🔹 ASSERTION: Checking if the duplicate Username message appears');
        cy.get(addUserLocators.repeatMsg).should('exist')
        /*newUserClearInput.forEach(field => {
            cy.get(field.locator).clear();
          });*/
    }

    newUser(){
        
        cy.get(addUserLocators.addUser).click()
        //ADD USER
        newUserInputFields.forEach(field => {
            cy.get(field.locator).type(field.value);
          });
        newUserSelectFields.forEach(role => {
            cy.get(role).check({ force: true });
          }); 
        cy.get(addUserLocators.createBtn).click()
        cy.wait(2000)
        cy.get(addUserLocators.userAddedMsg).should('exist')

    }
    
    editUser(){
        cy.get(addUserLocators.addUser).click()
        cy.get(addUserLocators.cancellBtn).click()
        cy.get(editUserLocators.editBtn).click()
        editUserInputFields.forEach(field => {
            cy.get(field.locator).clear().type(field.value);
          });
        //Edit User Roles
        cy.get(editUserLocators.clearRole).click()
        cy.get(editUserLocators.addRole).click()
        //cy.get(editUserLocators.Admin).click()
        //cy.get(editUserLocators.addMultiRole).click()
        cy.get(editUserLocators.OpMngEdit).click()
        cy.get(editUserLocators.addMultiRole).click()
        cy.get(editUserLocators.OpMngView).click()
        cy.get(editUserLocators.addMultiRole).click()
        cy.get(editUserLocators.ObjMngEdit).click()
        cy.get(editUserLocators.addMultiRole).click()
        cy.get(editUserLocators.ObjMngView).click()
        //cy.get(editUserLocators.addMultiRole).click()
        //cy.get(editUserLocators.DataEdit).click()
        //cy.get(editUserLocators.addMultiRole).click()
        //cy.get(editUserLocators.DataView).click()
        cy.get(editUserLocators.saveBtn).click()
    }

    editRepeatEmail(){  
      cy.get(editUserLocators.editBtn).click()
      cy.get(editUserLocators.editEmail).clear().type(editUserInfo.repeatEmail)
      cy.get(editUserLocators.repeatMsg).should('exist')
    }

    editRepeatHCH(){
      cy.get(editUserLocators.editBtn).click()
      cy.get(editUserLocators.editHCH).clear().type(editUserInfo.repeatHCH)
      cy.get(editUserLocators.repeatMsg).should('exist')
    }

    deleteUser(){
        cy.get(deleteUser.deleteBtn).click()
        cy.get(deleteUser.submitBtn).click()
        cy.wait(1000)
        cy.get(deleteUser.successMsg).should('exist')
        //cy.get(deleteUser.cancellBtn).click()
    }

}

export default userrolePage