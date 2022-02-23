const express = require('express')
const router = express.Router()
const postController = require('./../controllers/test')

console.log("test route")
router.post('/',postController.createPost)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)

module.exports = router
