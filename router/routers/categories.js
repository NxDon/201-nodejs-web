const Router = require('express');
const CategoryContorller = require('../../controller/cate_controller');

const router = Router();
const cateCtrl = new CategoryContorller();

router.get('/',cateCtrl.getAllCategories);

module.exports = router;