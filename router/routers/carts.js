const Router = require('express');
const CartContorller = require('../../controller/cart_controller');

const router = Router();
const cartCtrl = new CartContorller();

router.get('/',cartCtrl.getAllCarts);
router.get('/:cateId',cartCtrl.getOneCart);
router.post('/', cartCtrl.createOneCart);
router.put('/:cateId', cartCtrl.updateOneCart);
router.delete('/:cateId',cartCtrl.deleteOneCart);

module.exports = router;