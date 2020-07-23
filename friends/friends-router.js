const express = require('express')

const router = express.Router()

const Friends = require('./friends-model')

router.get('/', (req, res) => {
    Friends.getFriends()
        .then(friends => {
            res.status(200).json(friends)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting all friends' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Friends.getFriend(id)
        .then(friend => {
            if (friend) {
                res.status(200).json(friend)
            } else {
                res.status(404).json({ errorMessage: 'Could not find friend with that Id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting friend' })
        })
})

router.post('/', (req, res) => {
    const newFriend = req.body
    Friends.addFriend(newFriend)
        .then(friend => {
            res.status(201).json({ message: 'Welcome new friend' })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error adding friend' })
        })
})


router.delete('/:id', (req, res) => {
    const { id } = req.params
    Friends.deleteFriend(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: deleted })
            } else {
                res.status(404).json({ errorMessage: 'Could not find friend with that id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error deleting friend' })
        })
})

module.exports = router;