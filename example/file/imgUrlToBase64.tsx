/**
 * title: 基本使用
 * description: 图片url转base64
 */
import { imgUrlToBase64 } from 'fe-toolkit'
import React, { useState } from 'react'
const Page: React.FC = () => {
  const [url, setUrl] = useState<string | undefined>()
  return (
    <>
      <input type="url" placeholder="请输入图片地址" onChange={e => setUrl(e.target.value)} />
      <button
        onClick={async () => {
          if (url) {
            const res = await imgUrlToBase64(url)
            console.log(res)
          }
        }}
      >
        图片地址转base64（控制台查看）
      </button>
    </>
  )
}

export default Page
