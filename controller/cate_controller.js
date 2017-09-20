const HTTPCode = require('../config/constants');
const cateModel = require('../models/category');

module.exports = class CateController {
    getAllCategories(req, res, next) {
        cateModel.find({}).exec((e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND)
            }
            return res.status(HTTPCode.OK).send({item: data});
        })
    }

    getOneCategory(req, res, next) {
        const id = req.para
        cateModel.findById(id).exec((e, data) => {
            if (e) {
                return next(e)
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send({item: data})
        })
    }

    createOneCategory(req, res, next) {
        cateModel.create(req.body, (err, data) => {
            if (err) {
                return next(err);
            }
            return res.status(HTTPCode.CREATED).send({uri: `Categories/${data._id}`});
        })
    }
}
