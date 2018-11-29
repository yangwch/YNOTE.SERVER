let mongoose = require('mongoose')
let {match} = require('./../config')
var Schema = mongoose.Schema
let userSchema = new Schema({
  // 用户名,名称,密码
  username: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => {
        // 字母开头，字母数字下划线，长度3-15
        return match.user.username.test(v)
      },
      message: props => `用户名格式不正确`
    }
  },
  // 邮箱
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => {
        return match.user.email.test(v)
      },
      message: props => `邮箱格式不正确`
    }
  },
  // 姓名
  name: {type: String, required: true, max: 30},
  // 性别
  sex: {
    type: String,
    enum: ['男', '女', '保密', ''],
    default: '保密'
  },
  // 密码
  password: {
    type: String,
    required: true
  },
  // 创建时间
  createdTime: {
    type: Date,
    default: Date.now
  },
  // 是否可用
  enabled: {
    type: Boolean,
    default: true,
    select: true
  }
})

/**
 * 检查用户名是否重复
 * @param {String} username 检查的用户名
 * @param {Function} cb 回调方法(err, user)
 */
// userSchema.statics.methods.checkUsernameExists = (username, cb) => {
//   return this.find({username: username}, cb)
// }
module.exports = userSchema