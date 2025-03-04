const profileLocators = {
    personInfo: 'div:nth-child(3)>div>button:nth-child(1)',
    changeBtn: 'button.btn',
    hchField: 'div.profile-section > div:nth-child(2) > div:nth-child(1) > input',
    anunField: 'div.profile-section > div:nth-child(2) > div:nth-child(2) > input',
    azganunField: 'div.profile-section > div:nth-child(2) > div:nth-child(3) > input',
    hayranunField: 'div.profile-section > div:nth-child(2) > div:nth-child(4) > input',
    pashtonField: 'div.profile-section > div:nth-child(2) > div:nth-child(5) > input',
    bajinField: 'div.profile-section > div:nth-child(2) > div:nth-child(6) > input',
    emailField: 'div.profile-page > div:nth-child(3) > div > div:nth-child(1) > input',
    phoneField: 'div.profile-page > div:nth-child(3) > div > div:nth-child(2) > input',
    saveBtn: 'div.profile-footer>button:nth-child(1)',
    cancelBtn: 'div.profile-footer>button:nth-child(1)',
    errorMessage: 'div.error-message'
}

const profileInformation = {
    hch: '12345678',
    anun: "Arev",
    azganun: 'Khachatryan',
    hayranun: '',
    pashton: 'testpashton',
    bajin: 'testbajin',
    email: 'test@daniam.am',
    phone: '011111111111',
    repeatHCH: '0303030303',
    repeatEmail: 'zaven.sahakyan@daniam.am'
}

const profileFields = [
    { locator: profileLocators.hchField, value: profileInformation.hch },
    { locator: profileLocators.anunField, value: profileInformation.anun },
    { locator: profileLocators.azganunField, value: profileInformation.azganun },
    //{ locator: profileLocators.hayranunField, value: profileInformation.hayranun },
    { locator: profileLocators.pashtonField, value: profileInformation.pashton },
    { locator: profileLocators.bajinField, value: profileInformation.bajin },
    { locator: profileLocators.emailField, value: profileInformation.email },
    { locator: profileLocators.phoneField, value: profileInformation.phone },

]

export{profileLocators, profileInformation, profileFields};