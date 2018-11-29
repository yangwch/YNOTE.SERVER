// note
var express = require('express');
var router = express.Router();
let Note = require('./../models/note')
// 检查缓存
let checkSession = (req) => {
  if (req.session && req.session.user) {
    return req.session.user
  } else {
    res.send({err: '未登录'})
  }
}
// 获取列表
router.post('/getNotes', (req, res) => {
  let user = checkSession(req)
  if (user) {
    let {username} = user
    Note.find({username, deleted: false}, (err, docs) => {
      res.send({res: docs})
    })
  }
})

// 添加一个
router.post('/addNote', (req, res) => {
  let user = checkSession(req)
  if (user) {
    let {username} = user
    let note = req.body
    // res.send(note)
    let data = Object.assign({}, note, {username})
    Note.create(data, (err, doc) => {
      if (err) {
        res.send({err: '创建失败'})
      } else {
        res.send({res: doc})
      }
    })
  }
})

// 更新一条
router.post('/updNote/:id', (req, res) => {
  let user = checkSession(req)
  let {id} = req.params
  if (user) {
    let {username} = user
    let note = req.body
    Note.findOneAndUpdate({_id: id, username}, note, (err, doc) => {
      if (err) {
        console.log('update note err:', err)
        res.send({err: '更新失败'})
      } else {
        res.send({res: '更新完成'})
      }
    })
  }
})

// 删除
router.delete('/delNote/:id', (req, res) => {
  let user = checkSession(req)
  let {id} = req.params
  if (user && id) {
    let {username} = user
    Note.findOneAndUpdate({_id: id, username}, {deleted: true}, (err, doc) => {
      if (err) {
        console.log('delete note err:', err)
        res.send({err: '删除失败，未找到'})
      } else {
        res.send({res: '删除成功'})
      }
    })
  }
})
module.exports = router