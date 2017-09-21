const Router = require('express');
const CartContorller = require('../../controller/cart_controller');

const router = Router();
const cartCtrl = new CartContorller();

router.get('/',cartCtrl.getAllCarts);
router.get('/:cartId',cartCtrl.getOneCart);
router.post('/', cartCtrl.createOneCart);
router.put('/:cartId', cartCtrl.updateOneCart);
router.delete('/:cartId',cartCtrl.deleteOneCart);

module.exports = router;