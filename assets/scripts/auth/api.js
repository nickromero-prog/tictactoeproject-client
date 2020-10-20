'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST'
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST'
  })
}

const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
