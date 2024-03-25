import LS from './LS'
import SS from './SS'
import { createLocalStorage, createSessionStorage, createStorage } from './cache'
import { AesEncryption, decodeByBase64, encryptByBase64, encryptByMd5 } from './cipher'
import { calculateBestTextColor, colorDarken, colorIsDark, colorLighten, hexToRGB, isHexColor, rgbToHex } from './color'
import { getBoundingClientRect, getViewportOffset } from './dom'
import { base64URLtoBlob, imgUrlToBase64 } from './file/base64Conver'
import { downloadByData, downloadByUrl, downloadImgByBase64, downloadImgByOnlineUrl, openWindow } from './file/download'
import { loadScript } from './loadScript'
import { decoderQrcode, generateQrcode } from './qrcode'
import { buildShortUUID, buildUUID } from './uuid'

export {
  AesEncryption,
  LS,
  SS,
  base64URLtoBlob,
  buildShortUUID,
  buildUUID,
  calculateBestTextColor,
  colorDarken,
  colorIsDark,
  colorLighten,
  createLocalStorage,
  createSessionStorage,
  createStorage,
  decodeByBase64,
  decoderQrcode,
  downloadByData,
  downloadByUrl,
  downloadImgByBase64,
  downloadImgByOnlineUrl,
  encryptByBase64,
  encryptByMd5,
  generateQrcode,
  getBoundingClientRect,
  getViewportOffset,
  hexToRGB,
  imgUrlToBase64,
  isHexColor,
  loadScript,
  openWindow,
  rgbToHex,
}
