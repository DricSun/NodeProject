const express = require('express')
const router = express.Router()
const postController = require('./../controllers/controller')

console.log("test route")
router.post('/',postController.createPost)
router.delete('/:id',postController.deletePostId)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)
router.put('/:id', postController.getPutId)

module.exports = router
