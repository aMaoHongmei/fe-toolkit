import { decrypt, encrypt } from 'crypto-js/aes'
import Base64 from 'crypto-js/enc-base64'
import UTF8, { parse } from 'crypto-js/enc-utf8'
import md5 from 'crypto-js/md5'
import ECB from 'crypto-js/mode-ecb'
import pkcs7 from 'crypto-js/pad-pkcs7'

interface EncryptionParams {
  key: string
  iv: string
}
export const AesEncryption = (opt: EncryptionParams) => {
  // let { key, iv }: { key: string | CryptoJSArrayWord, iv: string | CryptoJSArrayWord } = opt;
  let key: any = {}
  let iv: any = {}
  if (opt.key) {
    key = parse(opt.key)
  }
  if (opt.iv) {
    iv = parse(opt.iv)
  }
  const getOptions = () => {
    return {
      mode: ECB,
      padding: pkcs7,
      iv,
    }
  }

  const encryptByAES = (cipherText: string) => {
    return encrypt(cipherText, key, getOptions()).toString()
  }

  const decryptByAES = (cipherText: string) => {
    return decrypt(cipherText, key, getOptions()).toString(UTF8)
  }
  return {
    encryptByAES,
    decryptByAES,
  }
}

export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64)
}

export function decodeByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8)
}

export function encryptByMd5(password: string) {
  return md5(password).toString()
}

export default {
  AesEncryption,
  encryptByBase64,
  decodeByBase64,
  encryptByMd5,
}
