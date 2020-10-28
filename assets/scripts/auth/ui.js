'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text(response.user.email + 'signed up successfully')
}

const signUpFailure = function () {
  $('#message').text('Sign up unsuccesful, try again')
}

const signInSuccess = function (response) {
  $('#message').text('You are signed in as ' + response.user.email)
  store.user = response.user // log the user response data in store on a new key called 'user'
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-form').show()
  $('#reset-form').show()
  $('#change-password-form').show()
}

const signInFailure = function () {
  $('#message').text('Oh no something went wrong, try again or sign-up!')
}

const changePasswordSuccess = function () {
  $('#message').text('You changed your password! But can you remember it? We shall see')
}

const changePasswordFailure = function () {
  $('#message').text('Woops we could not change your password! Try again!')
}

const signOutSuccess = function (response) {
  $('#message').text('You are signed out! See you later!')
  store.user = null // reset the user to nothing and erase token
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
  $('#reset-form').hide()
  $('#change-password-form').hide()
}

const signOutFailure = function () {
  $('#message').text('Woops we could not sign you out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
