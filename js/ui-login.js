"use strict"

const generateLoginHtml = function() {
    mainElement.innerHTML = '<div class="container login-container">'+
    '            <h2>Login to your account</h2>'+
    '            <form id="loginForm" action="javascript:void(0);">'+
    '                <label for="loginName">Name</label>'+
    '                <input type="text" id="loginName" placeholder="Name" required>'+
    '                <label for="loginPassword">Password</label>'+
    '                <input type="password" id="loginPassword" placeholder="Password" required>'+
    '                <button id="loginSubmit">Login</button>'+
    '            </form>'+
    '        </div>'

    attachLoginListeners()
    bankApp.activeTab = activeTabs.LOGIN
    updateHeader()
}

const attachLoginListeners = function() {
    document.getElementById("loginForm").onsubmit = login
}

const login = function() {
    let loginName = document.getElementById("loginName")
    let loginPassword = document.getElementById("loginPassword")

    alertErrorCatcher(() => bankApp.login(loginName.value, loginPassword.value))

    customAlert("Successfully logged in.", "#070")
    generateHomeHtml()
}

const logout = function() {
    bankApp.logout()

    customAlert("Successfully logged out.", "#070")
    generateHomeHtml()
}