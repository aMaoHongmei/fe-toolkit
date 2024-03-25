import jrQrcode from 'jr-qrcode'
import QrcodeDecoder from 'qrcode-decoder/dist/index'
import { isImgage } from '../is'
import type { IOps } from './index.d'

/**
 * 生成二维码
 * @param [string] str
 * @param [?IOps] options: {
 * @description     padding       : 10,   // 二维码四边空白（默认为10px）
 * @description     width         : 256,  // 二维码图片宽度（默认为256px）
 * @description     height        : 256,  // 二维码图片高度（默认为256px）
 * @description     correctLevel  : QRErrorCorrectLevel.H,    // 二维码容错level（默认为高）
 * @description     reverse       : false,        // 反色二维码，二维码颜色为上层容器的背景颜色
 * @description     background    : "#ffffff",    // 二维码背景颜色（默认白色）
 * @description     foreground    : "#000000"     // 二维码颜色（默认黑色）
 * @description  }
 * @returns string | null
 */
export const generateQrcode = (str: string, ops: IOps = {}) => {
  if (str) {
    return jrQrcode.getQrBase64(str, { ...ops })
  }
  return null
}

/**
 * 二维码解密
 * @param [string] url
 * @returns string | null
 */
export const decoderQrcode = async (url: string) => {
  if (url && (await isImgage(url))) {
    const qr = new QrcodeDecoder()
    const res = await qr.decodeFromImage(url)
    if (res.data) {
      return res
    }
  }
  return null
}
