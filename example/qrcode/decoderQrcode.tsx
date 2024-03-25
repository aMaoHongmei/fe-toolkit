/**
 * title: 基本使用
 * description: 解码二维码
 */
import { decoderQrcode } from 'fe-toolkit'
import React, { useState } from 'react'
const Page: React.FC = () => {
  const [file, setFile] = useState<any>(null)

  const decoderFile = async () => {
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = async ev => {
        const result: any = ev.target?.result || ''
        const res = await decoderQrcode(result)
        console.log(res)
      }
    } else {
      alert('请选择文件')
    }
  }
  return (
    <>
      <input type="file" onChange={e => setFile(e.target.files?.[0])} />
      前往控制台查看<button onClick={() => decoderFile()}>解码</button>
    </>
  )
}

export default Page
