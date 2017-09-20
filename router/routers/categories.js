const Router = require('express');
const CategoryContorller = require('../../controller/cate_controller');

const router = Router();
const cateCtrl = new CategoryContorller();

router.get('/',cateCtrl.getAllCategories);
router.get('/:cateId',cateCtrl.getOneCategory);
router.post('/', cateCtrl.createOneCategory);
router.put('/:cateId', cateCtrl.updateOneCategory);

module.exports = router;