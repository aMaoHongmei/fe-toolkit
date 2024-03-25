/**
 * title: Aes加解密
 * description: 基本使用
 */
import { AesEncryption } from 'fe-toolkit'
import React, { useState } from 'react'
const AES = AesEncryption({ key: 'a36493afcf066b95', iv: 'a36493afcf066b95' })

const Page: React.FC = () => {
  const [data, setData] = useState('')
  return (
    <>
      <button onClick={() => setData(AES.encryptByAES('123'))}>加密123</button>
      <button onClick={() => setData(AES.decryptByAES(data))}>解密</button>
      <div>value: {data}</div>
    </>
  )
}

export default Page
