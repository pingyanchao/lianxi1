function toNumber(time) {
  const reg = /(\d{2}):(\d{2})\.(\d{2})/

  if (!time) return
  // console.log(reg.exec(time))
  const [, m, s, ms] = reg.exec(time)
  return m * 60 * 1000 + s * 1000 + ms * 10
}
const fs = require('fs')
fs.readFile('./本草纲目.lrc', 'utf-8', (err, data) => {
  if (err) return console.log('读取文件失败', err)
  // console.log(data)
  data = data
    .replace(/\[/g, '')
    .split('\n')
    .map((item) => item.split(']'))
  // console.log(data)
  data.forEach((item) => {
    // console.log(item[1], item[0])
    if (!item[0]) return
    // console.log(toNumber(item[0]), item[1])
    setTimeout(() => {
      console.log(item[1])
    }, toNumber(item[0]))
  })
})
