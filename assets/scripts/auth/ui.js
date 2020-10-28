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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
