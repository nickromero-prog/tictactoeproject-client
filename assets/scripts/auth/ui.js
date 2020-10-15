'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  $('#message').text('Your token is ' + response.user.token)
  store.user = response.user
}

const signInFailure = function(error) {
  $('#message').text('Sign in failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
