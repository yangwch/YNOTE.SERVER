var express = require('express');
var router = express.Router();
let User = require('./../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册
router.post('/reg', (req, res) => {
  let params = req.body
  let {username, password, name, email, sex} = params
  if (!username || !password || !name || !email) {
    res.send({
      error: '缺少必填项'
    })
  } else {
    let user = new User({
      username,
      password,
      name,
      email,
      sex
    })
    // 保存用户
    user.save((err, result) => {
      if (err) {
        res.send({err})
      } else {
        res.send(result)
      }
    })
  }
  
})

module.exports = router;
