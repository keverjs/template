import 'reflect-metadata'
import { createApp, Env } from 'kever'

createApp({
  host: '127.0.0.1',
  port: 8080,
  env: process.env.NODE_ENV as Env,
  include: [`${process.env.MODULE_ROOT}/app/**/*.{ts,js}`],
  bodyparser: {
    jsonLimit: '10mb',
    formLimit: '10mb',
  }
})
