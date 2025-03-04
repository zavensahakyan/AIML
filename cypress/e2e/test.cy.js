import loginPage from "./Login-AIML/Login";
import profilePage from "./Profile/ProfileActions";
import userrolePage from "./User&Roles/usersActions";
import { dataRegion, productData } from "./BI/BI-Actions"; 
import {executeModels, globalExecute} from "./ML-AI/ML-Actions";

describe('"ProfilePage" and "User and Role Management" ', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //Login
        const LoginPage = new loginPage();
        LoginPage.open()
        LoginPage.invalidLogin()
        LoginPage.login()
      });

    it('Edit Profile Info', () => {

        const ProfilePage = new profilePage();
        ProfilePage.editInfo()

    });

    it('Edit Profile Krknvox HCH', () => {

        const ProfilePage = new profilePage();
        ProfilePage.repeatHCH()
    });

    it('Edit Profile Krknvox Email', () => {

        const ProfilePage = new profilePage();
        ProfilePage.repeatEmail()
    });


    //USER & ROLES
    it('Krknvox Email', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.addRepeatEmail()
        
    });

    it('Krknvox HCH', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.addRepeatHCH()
        
    });

    it('Krknvox Username', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.addRepeatUsername()
        
    });

    it('Add User', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.newUser()
        
    });
    // EDIT USER
    it('Edit User', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.editUser()

    });

    it('Edit User with Repeat Email', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.editRepeatEmail()

    });

    it('Edit User with Repeat HCH', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.editRepeatHCH()

    });


    it('Delete User', () => {

        const UserRolePage = new userrolePage();
        UserRolePage.open()
        UserRolePage.deleteUser()

    });


});

describe('Sales Data by Regions', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //Login
        const LoginPage = new loginPage();
        LoginPage.open()
        LoginPage.invalidLogin()
        LoginPage.login()
      });

    it('Filter by Value', () => {
        const DataRegion = new dataRegion
        DataRegion.open()
        DataRegion.filterValue()
 
    });

    it('Filter by TIN & ATG', () => {
        const DataRegion = new dataRegion
        DataRegion.open()
        DataRegion.tinAtg()
 
    });

    it('Filter by Brand & SubCategory', () => {
        const DataRegion = new dataRegion
        DataRegion.open()
        DataRegion.brandSubcategory()
 
    });

    /*it('Filter by Anvanum', () => {
        const DataRegion = new dataRegion
        DataRegion.open()
        DataRegion.filterAnvanum()
 
    });*/

});

describe('Product Sales Summary Data', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //Login
        const LoginPage = new loginPage();
        LoginPage.open()
        LoginPage.invalidLogin()
        LoginPage.login()
      });

    it('Filter by Value', () => {
        const ProductData = new productData();
        ProductData.open()
        ProductData.filterValue()
 
    });

    it('Filter by TIN & CRN', () => {
        const ProductData = new productData();
        ProductData.open()
        ProductData.tinCrn()
 
    });
    
    it('Filter by Brand & SubCategory', () => {
        const ProductData = new productData();
        ProductData.open()
        ProductData.brandSubcategory()
 
    });

    it('Filter by Anvanum', () => {
        const ProductData = new productData();
        ProductData.open()
        ProductData.filterAnvanum()
 
    });
    
});

describe.only('ML/AI Execution', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //Login
        const LoginPage = new loginPage();
        LoginPage.open()
        LoginPage.invalidLogin()
        LoginPage.login()
      });

    it('Complex Tax Inspection Model', () => {
        const ExecuteModels = new executeModels();
        ExecuteModels.open()
        ExecuteModels.taxInspectionModel()
 
    });

    
    it('Taxpayer Clustering and Outlier Detection Model', () => {
        const ExecuteModels = new executeModels();
        ExecuteModels.open()
        ExecuteModels.clusteringModel()
 
    });

    it('Product Tracing Model', () => {
        const ExecuteModels = new executeModels();
        ExecuteModels.open()
        ExecuteModels.tracingModel()
 
    });

    it('Product Tracing Model', () => {
        const ExecuteModels = new executeModels();
        ExecuteModels.open()
        ExecuteModels.anomalyModel()
 
    });

    it('Global Execution ', () => {
        const GlobalExecute = new globalExecute();
        GlobalExecute.open()
        GlobalExecute.globalExecution()
 
    });
    

    
});