const HTTPCode = require('../config/constants');
const cartModel = require('../models/cart');

module.exports = class cartController{
    getAllCarts(req,res,next){
        cartModel.find({}).exec((e,data) => {
            if(e) {
                return next(e);
            }
            if(!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.send(HTTPCode.OK).send(data);
        })
    }

    getOneCart(req,res,next){
        const id = req.params.cartId;
        cartModel.findById(id).exec((e,data) => {
            if(e) {
                return next(e);
            }
            if(!data){
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send(data)
        })
    }

    createOneCart(req,res,next){
        cartModel.create(req.body, (err, data) => {
            if (err) {
                return next(err);
            }
            return res.status(HTTPCode.CREATED).send(data);
        })
    }

    updateOneCart(req,res,next){
        const id = req.params.cartId;
        const newValue = req.body;
        cateModel.findByIdAndUpdate(id,newValue,(e,data) => {
            if(e){
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.sendStatus(HTTPCode.NO_CONTENT);
        })
    }

    deleteOneCart(req,res,next){
        const id = req.params.cartId;
        cartModel.findByIdAndRemove(id,(e,data) => {
            if(e){
                return next(e);
            }
            if(!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.NO_CONTENT).send(data);
        })
    }

}
