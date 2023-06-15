const router = require('express').Router();
const userControl=require('../controllers/userControl')

router.post('/',userControl.post)
router.get('/',userControl.get)
router.get('/:id',userControl.getOne)
router.patch('/:id',userControl.patch)
router.delete('/:id',userControl.delete)

module.exports=router;