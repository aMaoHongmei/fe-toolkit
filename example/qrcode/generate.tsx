/**
 * title: 基本使用
 * description: 生成二维码
 */
import { generateQrcode } from 'fe-toolkit'
import React, { useState } from 'react'
const Page: React.FC = () => {
  const [data, setData] = useState('')
  const [url, setUrl] = useState('')
  return (
    <>
      {url && <img src={url} style={{ width: 100, height: 100 }} />}
      <input type="text" value={data} onChange={e => setData(e.target.value)} />
      <button onClick={() => setUrl(generateQrcode(data))}>生成</button>
    </>
  )
}

export default Page
