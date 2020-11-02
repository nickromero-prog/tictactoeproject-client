const config = require('./../../config')
const store = require('./../../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'POST'
  })
}

const showGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'GET'
  })
}

const changeGame = function (index, currentPlayer, isOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: { Authorization: 'Bearer ' + store.user.token },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: isOver
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
  indexGames,
  showGame
}
