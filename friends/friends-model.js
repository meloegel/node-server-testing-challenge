const db = require('../data/db-config')

module.exports = {
    getFriends,
    getFriend,
    addFriend,
    deleteFriend,
}

function getFriends() {
    return db('friends')
}

function getFriend(id) {
    return db('friends')
        .where({ id })
        .first()
}

function addFriend(friend) {
    return db('friends').insert(friend, 'id')
}


function deleteFriend(id) {
    return db('friends')
        .where({ id })
        .del(id)
}

