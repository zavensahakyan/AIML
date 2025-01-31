const userLocators ={
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
    userAddedMsg: 'div.success-message'
}

const newUserInfo = {
    newHCH: "01010203",
    newUsername: 'testusername',
    newAnun: "TestAnun",
    newAzganun: "TestAzganun",
    newHayranun: "TestHayranun",
    newBajin: "TestBajin",
    newPashton: "TestPashton",
    newEmail: "testtest@example.com",
    newPhone: '+3741122331111'

}

export{userLocators, newUserInfo};