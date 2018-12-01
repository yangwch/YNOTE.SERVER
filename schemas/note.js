let mongoose = require('mongoose')
var Schema = mongoose.Schema
let noteSchema = new Schema({
  id: Schema.Types.ObjectId,
  // 用户名
  username: {
    type: String,
    select: true
  },
  // 标题
  title: {type: String},
  // 内容
  content: {type: String},
  // 保存位置
  x: Number,
  y: Number,
  w: Number,
  h: Number,
  z: Number,
  style: Map,
  // 主题
  theme: String,
  // 是否隐藏，默认false
  hide: {
    type: Boolean,
    default: false
  },
  // 是否已删除
  deleted: {
    type: Boolean,
    default: false,
    select: true
  },
  // 创建时间
  createdTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = noteSchema