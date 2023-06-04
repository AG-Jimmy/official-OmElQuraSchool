const router = require('express').Router();
const bestStudentControl= require('../controllers/bestStudentControl')


router.post('/',bestStudentControl.post)
router.get('/',bestStudentControl.get)
router.patch('/:id',bestStudentControl.patch)
router.delete('/:id',bestStudentControl.delete)


module.exports=router