// 第一种方法
// const fs = require('fs')
// fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('读取错误', err)
//   data = data.replace(/=/g, ':').replace(/ /g, '\n')
//   fs.writeFile('成绩-ok.txt', data, (err, data) => {
//     if (err) return console.log('写入错误', err)
//     console.log('写入成功')
//   })
// })
// 第二种方法
// const fs = require('fs')
// fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('读取失败', err)
//   // console.log(data)
//   data = data
//     .split(' ')
//     .map((item) => item.replace('=', ':'))
//     .join('\n')
//   // console.log(data)
//   fs.writeFile('./成绩-ok22.txt', data, (err, data) => {
//     if (err) return console.log('处理error', err)
//     console.log('cope成功')
//   })
// })
const fs = require('fs')

fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
  if (err) return console.log('成绩读取失败', err)
  console.log('读取成绩成功')
  data = data.replace(/=/g, ':').replace(/ /g, '\n')
  // console.log(data)
  fs.writeFile('成绩okk.txt', data, (err, data) => {
    if (err) return console.log('创建失败', err)
    console.log('创建成功')
  })
})
