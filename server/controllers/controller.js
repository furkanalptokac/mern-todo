const Todo = require('../models/model.js');

exports.getAllTodos = (req, res) => {
    Todo.find()
        .then(todos => {
            res.send(todos);
        }).catch(err => {
            res.status(500)
                .send({
                    message: err.message || "Hata"
                });
        });
};

exports.postTodo = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Todo gir kardes."
        });
    }

    const todo = new Todo({
        task: req.body.task
    });

    todo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500)
                .send({
                    message: err.message || "Hata"
                });
        });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: id + " id todo not found."
                });
            } else res.send(data);
        }).catch(err => {
            res.status(500)
                .send({
                    message: id + "id todo error."
                });
        });
};

exports.deleteById = (req, res) => {
    Todo.findOneAndDelete({
        "_id": req.params.id
    })
    .then(data => 
        res.send('Deleted.')
    ).catch(err => {
        res.status(500)
            .send({
                message: id + "id delete todo error."
            });
    });
};

exports.updateById = (req, res) => {
    const id = req.params.id;
    
    if (!req.body) {
        return res.status(400).send({
            message: 'Data bos xd'
        });
    }

    Todo.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'bulunamadi.'
                });
            } else res.send({
                message: 'updated successfully.'
            });
        }).catch(err => {
            res.status(500).send({
                message: 'error'
            });
        });
}