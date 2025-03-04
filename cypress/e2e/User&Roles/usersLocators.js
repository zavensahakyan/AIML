import { faker } from "@faker-js/faker";

const addUserLocators ={
    userRoleSystem: 'div.dashboard-grid>div:nth-child(9)',
    addUser: 'button[class = "create-user-button"]',
    newHCH: 'input[name = "socialNumber"]',
    newUsername: 'input[name = "username"]',
    newAnun: 'input[name = "firstName"]',
    newAzganun: 'input[name = "lastName"]',
    newHayranun: 'input[name = "middleName"]',
    newBajin: 'input[name = "department"]',
    newPashton: 'input[name = "position"]',
    newEmail: 'input[name = "email"]',
    newPhone: 'input[name = "phoneNumber"]',
    roleAdmin: 'input[value = "ADMIN"]',
    roleOpMngEdit: 'input[value = "OP_MNG_ADMIN"]',
    roleOpMngView: 'input[value = "OP_MNG_VIEWER"]',
    roleObjMngEdit: 'input[value = "OBJ_MNG_ADMIN"]',
    roleObjMngView: 'input[value = "OBJ_MNG_VIEWER"]',
    roleDataEdit: 'input[value = "DATA_ENG_ADMIN"]',
    roleDataView: 'input[value = "DATA_ENG_VIEWER"]',
    createBtn: 'button[type = "submit"]',
    cancellBtn: 'button[class= "user-cancel-button"]',
    userAddedMsg: 'div.success-message',
    repeatMsg: 'div.user-api-error-message'
}

const newUserInfo = {
    newHCH: Cypress._.random(1000000000, 9999999999),
    newUsername: faker.internet.userName().replace(/[^a-zA-Z]/g, ''),
    newAnun: "TestAnun",
    newAzganun: "TestAzganun",
    newHayranun: "TestHayranun",
    newBajin: "TestBajin",
    newPashton: "TestPashton",
    newEmail:  `user${Date.now().toString().slice(-7)}@example.com`, //`user${Date.now()}@example.com`, //faker.internet.email(),
    newPhone: '+3741122331111'

}

const newUserInputFields = [
    { locator: addUserLocators.newHCH, value: newUserInfo.newHCH },
    { locator: addUserLocators.newUsername, value: newUserInfo.newUsername },
    { locator: addUserLocators.newAnun, value: newUserInfo.newAnun },
    { locator: addUserLocators.newAzganun, value: newUserInfo.newAzganun },
    { locator: addUserLocators.newHayranun, value: newUserInfo.newHayranun },
    { locator: addUserLocators.newBajin, value: newUserInfo.newBajin },
    { locator: addUserLocators.newPashton, value: newUserInfo.newPashton },
    { locator: addUserLocators.newEmail, value: newUserInfo.newEmail },
    { locator: addUserLocators.newPhone, value: newUserInfo.newPhone }

]


const newUserWrongEmail = [
    { locator: addUserLocators.newHCH, value: newUserInfo.newHCH },
    { locator: addUserLocators.newUsername, value: newUserInfo.newUsername },
    { locator: addUserLocators.newAnun, value: newUserInfo.newAnun },
    { locator: addUserLocators.newAzganun, value: newUserInfo.newAzganun },
    { locator: addUserLocators.newHayranun, value: newUserInfo.newHayranun },
    { locator: addUserLocators.newBajin, value: newUserInfo.newBajin },
    { locator: addUserLocators.newPashton, value: newUserInfo.newPashton },
    //{ locator: addUserLocators.newEmail, value: newUserInfo.newEmail },
    { locator: addUserLocators.newPhone, value: newUserInfo.newPhone }

]

const newUserWrongHCH = [
   // { locator: addUserLocators.newHCH, value: newUserInfo.newHCH },
    { locator: addUserLocators.newUsername, value: newUserInfo.newUsername },
    { locator: addUserLocators.newAnun, value: newUserInfo.newAnun },
    { locator: addUserLocators.newAzganun, value: newUserInfo.newAzganun },
    { locator: addUserLocators.newHayranun, value: newUserInfo.newHayranun },
    { locator: addUserLocators.newBajin, value: newUserInfo.newBajin },
    { locator: addUserLocators.newPashton, value: newUserInfo.newPashton },
    { locator: addUserLocators.newEmail, value: newUserInfo.newEmail },
    { locator: addUserLocators.newPhone, value: newUserInfo.newPhone }

]

const newUserWrongUsername = [
     { locator: addUserLocators.newHCH, value: newUserInfo.newHCH },
     //{ locator: addUserLocators.newUsername, value: newUserInfo.newUsername },
     { locator: addUserLocators.newAnun, value: newUserInfo.newAnun },
     { locator: addUserLocators.newAzganun, value: newUserInfo.newAzganun },
     { locator: addUserLocators.newHayranun, value: newUserInfo.newHayranun },
     { locator: addUserLocators.newBajin, value: newUserInfo.newBajin },
     { locator: addUserLocators.newPashton, value: newUserInfo.newPashton },
     { locator: addUserLocators.newEmail, value: newUserInfo.newEmail },
     { locator: addUserLocators.newPhone, value: newUserInfo.newPhone }
 
 ]

const newUserSelectFields = [
    addUserLocators.roleAdmin,
    addUserLocators.roleObjMngEdit,
    addUserLocators.roleObjMngView,
    addUserLocators.roleDataView,
    addUserLocators.roleOpMngEdit,
    addUserLocators.roleOpMngView,
    addUserLocators.roleDataEdit,
    addUserLocators.roleDataView,

]

//EDIT USER
const editUserLocators = {
    editBtn: 'tr:nth-child(1) > td:nth-child(6) > button:nth-child(1)',
    viewBtn: 'tr:nth-child(1) > td:nth-child(6) > button:nth-child(2)',
    deleteBtn: 'tr:nth-child(1) > td:nth-child(6) > button:nth-child(3)',
    editHCH: 'div.profile-page>div:nth-child(2)>div>div:nth-child(1)>input',
    editAnun: 'div.profile-page>div:nth-child(2)>div>div:nth-child(2)>input',
    editAzganun: 'div.profile-page>div:nth-child(2)>div>div:nth-child(3)>input',
    editHayranun: 'div.profile-page>div:nth-child(2)>div>div:nth-child(4)>input',
    editPashton: 'div.profile-page>div:nth-child(2)>div>div:nth-child(5)>input',
    editBajin: 'div.profile-page>div:nth-child(2)>div>div:nth-child(6)>input',
    clearRole: 'div.custom-select__indicator.custom-select__clear-indicator.css-1xc3v61-indicatorContainer > svg',
    addRole: 'div:nth-child(8)>div>div>div:nth-child(2)>div',
    addMultiRole: 'div:nth-child(8)>div>div>div:nth-child(2)>div:nth-child(3)',
    Admin: '#react-select-2-option-0',
    OpMngEdit: '#react-select-2-option-1',
    OpMngView:'#react-select-2-option-2',
    ObjMngEdit:'#react-select-2-option-3',
    ObjMngView:'#react-select-2-option-4',
    DataEdit:'#react-select-2-option-5',
    DataView:'#react-select-2-option-6',
    editEmail: 'div.profile-page>div:nth-child(3)>div>div:nth-child(1)>input',
    editPhone: 'div.profile-page>div:nth-child(3)>div>div:nth-child(2)>input',
    saveBtn: 'button.btn',
    repeatMsg: 'div.error-message'
}

const editUserInfo = {
    editHCH: Cypress._.random(1000000000, 9999999999),
    editAnun: "TestAnun1",
    editAzganun: "TestAzganun1",
    editHayranun: "TestHayranun1",
    editBajin: "TestBajin1",
    editPashton: "TestPashton1",
    editEmail: `user${Date.now()}@example.com`, //faker.internet.email()
    editPhone: '+374000555666',
    repeatEmail: 'zaven.sahakyan@daniam.am',
    repeatHCH: '0303030303'
    

}

const editUserInputFields = [
    { locator: editUserLocators.editHCH, value: editUserInfo.editHCH },
    { locator: editUserLocators.editAnun, value: editUserInfo.editAnun },
    { locator: editUserLocators.editAzganun, value: editUserInfo.editAzganun },
    { locator: editUserLocators.editHayranun, value: editUserInfo.editHayranun },
    { locator: editUserLocators.editBajin, value: editUserInfo.editBajin },
    { locator: editUserLocators.editPashton, value: editUserInfo.editPashton },
    { locator: editUserLocators.editEmail, value: editUserInfo.editEmail },
    { locator: editUserLocators.editPhone, value: editUserInfo.editPhone },
]

//DELETE USER
const deleteUser = {
    deleteBtn: 'tr:nth-child(1) > td:nth-child(6) > button:nth-child(3)',
    cancellBtn: 'div[role = "presentation"]>div>div:nth-child(3)>button:nth-child(1)',
    submitBtn: 'div[role = "presentation"]>div>div:nth-child(3)>button:nth-child(2)',
    successMsg: 'div.success-message'
}

export{newUserInputFields, newUserSelectFields, addUserLocators, editUserLocators, 
    deleteUser, editUserInputFields, newUserWrongEmail, newUserWrongHCH, newUserWrongUsername, editUserInfo};