/**
 * title: aes encryption
 * description: basic use
 */
import { AesEncryption } from 'fe-toolkit'
import React, { useState } from 'react'
const AES = AesEncryption({ key: 'a36493afcf066b95', iv: 'a36493afcf066b95' })

const Page: React.FC = () => {
  const [data, setData] = useState('')
  return (
    <>
      <button onClick={() => setData(AES.encryptByAES('123'))}>encryption 123</button>
      <button onClick={() => setData(AES.decryptByAES(data))}>decryption</button>
      <div>value: {data}</div>
    </>
  )
}

export default Page
