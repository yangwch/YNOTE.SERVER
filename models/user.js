let mongoose = require('mongoose')
let UserShema = require('./../schemas/user')
// 创建model，对应mongodb中的collection
let User = mongoose.model('sys_user', UserShema)

module.exports = User