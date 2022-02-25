const Post = require('./../modele/post')
const fs = require('fs')
exports.createPost = (req,res,next)=>{
    console.log("post test")
    const postObject = req.body
    const p = new Post({
        titre:req.body.titre,
        text: req.body.text,
        autor: req.body.autor,
        urlImage: req.body.urlImage
    })
    p.save()
        .then(() => res.status(201).json({message : 'ok'}))
        .catch(error => res.status(400).json({ error}))
}

exports.getPostId = (req,res,next)=>{
    console.log('get test id')
    Post.findOne({_id:req.params.id})
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}

exports.getAllPost = (req,res,next)=> {
    console.log('get all test')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}));
}

exports.deletePostId = (req,res,next)=>{
    console.log('get test id')
    Post.deleteOne({_id:req.params.id})
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}

exports.getPutId = (req,res,next)=>{
    console.log('get test id')
    console.log(req.body)
    Post.updateOne({_id:req.params.id},{
        titre:req.body.titre,
        text: req.body.text,
        autor: req.body.autor,
        urlImage: req.body.urlImage
    })
        .then(()=> res.status(200).json({message:"update"}))
        .catch(error => res.status(404).json({error}))
}