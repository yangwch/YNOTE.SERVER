var express = require('express');
var router = express.Router();
let User = require('./../models/user')
let Note = require('./../models/note')
let {initNotes} = require('./../config')

/* 检查用户名是否已存在 */
router.post('/checkUserExists/:username', function(req, res, next) {
  let {username} = req.params
  User.find({username}, (err, docs) => {
    if (docs && docs.length) {
      res.send({
        err: '用户名已存在'
      })
    } else {
      res.send({
        res: '用户名可用'
      })
    }
  })
});

// 保存初始列表
const saveInitNotes = (username) => {
  let docs = [].concat(initNotes)
  docs = docs.map(item => { return Object.assign(item, {username}) })
  return Note.create(docs)
}

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
        saveInitNotes(username).then(notes => {
          res.send(result)
        })
      }
    })
  }
})

// 登录
router.post('/login', (req, res) => {
  let {username, password} = req.body || {}
  User.find({username, password}, (err, docs) => {
    if (docs && docs.length === 1) {
      let {uername, sex, name, email} = docs[0]
      // 设置 session
      req.session.user = {username, sex, name, email}
      res.send({
        res: '登录成功！'
      })
    } else {
      res.send({
        err: '用户名或密码错误'
      })
    }
  })
})

// 检查缓存
let checkSession = (req, res, msg = '未登录') => {
  if (req.session && req.session.user) {
    return req.session.user
  } else {
    res.send({err: msg})
  }
}

// 获取用户登录信息
router.get('/getLoginInfo', (req, res) => {
  let user = checkSession(req, res)
  if (user) {
    res.send({res: user})
  }
})
// 登出
router.get('/logout', (req, res) => {
  let user = checkSession(req, res, '已登出')
  if (user) {
    req.session = null
    res.send({res: '已登出'})
  }
})

module.exports = router;
