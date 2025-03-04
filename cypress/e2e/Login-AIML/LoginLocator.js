const loginLocators = {
    username: "input#username",
    password: "input#password",
    loginButton: "button[type=\"submit\"]",
    userIcon: "div.navbar-right-section>div:nth-child(3)",
    loginError: 'div[role = \'alert\']'
}

const loginInformation = {
    username: "akhach",
    password: "password12345",
    invalidUser: 'invalidUser',
    invalidPassword: 'invalidPassword'
}

export{loginLocators, loginInformation}