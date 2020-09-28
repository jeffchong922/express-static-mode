const path = require('path')
const express = require('express')
const compression = require('compression')
const { SERVER_PORT } = require('./_helpers/secret')

const app = express()

const resolve = file => path.resolve(__dirname, file)

const staticFileMiddleware = express.static(resolve('../public'), {
  maxAge: 1000 * 60 * 60 * 24 * 30
})

app.use(compression())
app.use(staticFileMiddleware)

app.get('*', (req, res) => {
  res.send(`您所访问的位置: ${req.url} , 不存在`)
})

app.listen(SERVER_PORT, () => {
  console.log(`服务器运行在端口号: ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
})