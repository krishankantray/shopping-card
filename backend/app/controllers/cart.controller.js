const db = require("../models");
const User = db.user;
const Cart = db.cart;
const CartItem = db.cartItem;

exports.getCartItems = (req, res) => {
    Cart.findOne({where: {userId: req.userId}}).then(_user=>{
        Item.findAll({ include: {model: cartItem} }).then(item => {
            res.status(200).send(item);
        })
    }).catch(err=>{
        res.status(500).send(err.message);
    })
};

exports.addCartItems = (req, res) => {
    Cart.findOne({where: {userId: req.userId}}).then(_user=>{
        CartItem.bulkCreate(req.body).then(item => {
            res.status(200).send(item);
        })
    }).catch(err=>{
        res.status(500).send(err.message);
    })
};