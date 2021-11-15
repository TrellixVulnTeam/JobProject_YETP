const express = require('express')

const app = express()

// 挂在路由,挂载到app上
app.get('/', (req,res) => {
  res.send('Get Request')
})
app.post('/', (req, res) => {
  res.send('Post Request')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})