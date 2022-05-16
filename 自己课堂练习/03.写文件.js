const fs = require('fs')

// 写入 带有覆盖
// fs.writeFile('两只老虎.txt', '两只老虎跑的快啊跑的快', (err, data) => {
//   if (err) return console.log('写入失败', err)
//   console.log('写入成功')
// })
// 追加写入
fs.appendFile('两只老虎.txt', '两只老虎跑的快啊跑的快', (err, data) => {
  if (err) return console.log('写入失败', err)
  console.log('写入成功')
})
