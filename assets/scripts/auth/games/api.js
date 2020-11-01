const config = require('./../../config')
const store = require('./../../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'POST'
  })
}

const changeGame = function (index, currentPlayer, isOver) {
  return $.ajax({
    url: config.apiUrl + '/games/:id' + store.game._id,
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: isOver // boolean you need to set
      }
    }
  })
}

const indexGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'GET'
  })
}

module.exports = {
  newGame,
  changeGame,
  indexGames
}
