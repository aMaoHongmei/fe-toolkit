/**
 * title: Base64加解密
 * description: 基本使用
 */
import { decodeByBase64, encryptByBase64 } from 'fe-toolkit'
import React, { useState } from 'react'

const Page: React.FC = () => {
  const [data, setData] = useState('')
  return (
    <>
      <button onClick={() => setData(encryptByBase64('123'))}>加密123</button>
      <button onClick={() => setData(decodeByBase64(data))}>解密</button>
      <div>value: {data}</div>
    </>
  )
}

export default Page
