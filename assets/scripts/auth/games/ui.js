const store = require('./../../store')

const newGameSuccess = function (response) { // response is the response from the api
  store.game = response.game // store empty game(json) in the store file
}

module.exports = {
  newGameSuccess
}
