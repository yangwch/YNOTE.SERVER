let mongoose = require('mongoose')
let NoteShema = require('./../schemas/note')
// 创建model，对应mongodb中的collection
let Note = mongoose.model('user_notes', NoteShema)

module.exports = Note