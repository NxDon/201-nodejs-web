
var Router = require('express');
var ItemController = require('../../controller/item-controller');

const router = Router();
const itemCtrl = new ItemController();

router.get('/', itemCtrl.getAll);
router.get('/:itemId', itemCtrl.getOneItem);
router.post('/',itemCtrl.createItem);
router.delete('/:itemId', itemCtrl.deleteItem);
router.put('/:itemId', itemCtrl.updateItem);

module.exports=router;