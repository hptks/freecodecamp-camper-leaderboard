import express from 'express'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'

import config from '../webpack.config'

let app = new express()
let compiler = webpack(config)

app.use(express.static('src'))
app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler))

app.listen(3000)
