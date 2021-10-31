const db = require("../models");
const User = db.user;
const Item = db.item;

exports.allItems = (req, res) => {
    User.findOne({where: {id: req.userId}}).then(_user=>{
        Item.findAll().then(item => {
            res.status(200).send(item);
        })
    }).catch(err=>{
        res.status(500).send(err.message);
    })
};

exports.addItems = (req, res) => {
    console.log("USER ID: ", req.userId);
    User.findOne({where: {id: req.userId}}).then(_user=>{
        const body = req.body;
        Item.bulkCreate(body).then(item => {
            res.status(200).send({message: "Inserted successfully"});
        })
    }).catch(err=>{
        res.status(500).send(err.message);
    })
};