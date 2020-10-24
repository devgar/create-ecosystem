#!/usr/bin/env node
const { resolve } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const src = createReadStream(resolve(__dirname, '..', 'data', 'ecosystem.config.js'))
const dest = createWriteStream(resolve(process.cwd(), 'ecosystem.config.js'))

src.pipe(dest)