import { md5 } from 'cryptojs'

const privateKey = 'f1b690b8e89d7f112c6f33f956693b2f91d93400'
const publicKey = 'a4d95911b60999871aaed8a8c43823f6'
const timeStamp = Date.now

const hash = md5(timeStamp + privateKey + publicKey)

export const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`