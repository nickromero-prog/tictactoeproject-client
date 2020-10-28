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
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
