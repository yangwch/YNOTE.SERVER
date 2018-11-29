module.exports = {
  mongodb: 'mongodb://yang:yang@localhost:27017/ynote',
  // 正则配置
  match: {
    user: {
      username: /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/,
      email: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
      // email /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
    }
  },
  // 初始列表
  initNotes: [
    {
      w: 200,
      h: 300,
      x: 200,
      y: 10,
      title: '提示1',
      content: `您好，欢迎使用YNOTE! `,
      theme: '',
      hide: false
    },
    {
      w: 200,
      h: 300,
      x: 410,
      y: 50,
      title: '提示2',
      content: `点击“+”来创建你的笔记吧! `,
      theme: 'cfc',
      hide: false
    },
    {
      w: 200,
      h: 300,
      x: 620,
      y: 70,
      title: '提示3',
      content: `试试! `,
      theme: 'ccf',
      hide: false
    }
  ]
}