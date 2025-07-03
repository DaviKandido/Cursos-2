const models = require("../models")

// era padrão que o user_id sempre fosse 1, alterei para ser dinamico
function save (req, res) {
   const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.body.user_id
   }

   models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Created Post successfully!",
            post: {
                   id: result.id, 
                   ...post
                }
        })
   }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
   })
}

function index(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.send(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}


function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message: "Post not found!"
           })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}

function update(req,res){
    const id = req.params.id;
    const updatePost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.body.user_id
    }

    models.Post.update(updatePost, {
        where: {
            id: id,
            userId: updatePost.userId
        }
    }).then(result => {
        res.status(200).json({
            menssage: "Updated Post successfully!",
            post: {
                    id: Number(id),
                    ...updatePost
                  }
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}

function destroy(req, res){
    const id = req.params.id;
    const userId = req.params.user_id

    models.Post.destroy({
        where: {
            id: id,
            userId: userId
        }
    }).then(result => {
        res.status(200).json({
            message: "Deleted Post successfully!"
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}