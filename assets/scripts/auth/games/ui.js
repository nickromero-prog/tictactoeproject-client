const store = require('./../../store')
// response is the response from the api

const newGameSuccess = function (response) {
  // store empty game(json) in the store file
  store.game = response.game
}

let totalGames
const indexGamesSuccess = function (response) {
  totalGames = response.games.length
  $('#message').text('You have played ' + totalGames)
}

module.exports = {
  newGameSuccess,
  indexGamesSuccess
}
