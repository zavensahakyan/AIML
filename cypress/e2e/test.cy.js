import loginPage from "./Login-AIML/Login";
import profilePage from "./Profile/ProfileActions";
import userrolePage from "./User&Roles/usersActions";


describe('', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //Login
        const LoginPage = new loginPage();
        LoginPage.open()
        LoginPage.login()
      });

    it('Edit Personal Info', () => {

        const ProfilePage = new profilePage();
        ProfilePage.editInfo()

    });

    it('User & Role', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.newUser()

    });  

});