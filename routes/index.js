var express = require('express');
var router = express.Router();
let Avatar = require('../model/avatarModel')
let upload = require('../utils/multer')
/* GET home page. */

router.get('/', async function(req, res, next) {
  let avatar = await Avatar.find()
  res.render('index',{avatar});
});
router.post('/',upload.single('avatar'),async(req,res,next)=>{
  try {
    let data =new Avatar({
      username:req.body.username,
      avatar:req.file.filename
    })
    // console.log(req.file)
    await data.save()
    // res.redirect('/')
    res.send(req.file)
  } catch (error) {
    console.log(error)
  }
  
})

module.exports = router;
