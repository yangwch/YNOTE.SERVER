module.exports = {
  mongodb: 'mongodb://yang:yang@localhost:27017/ynote',
  // 正则配置
  match: {
    user: {
      username: /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/,
      email: /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
    }
  }
}