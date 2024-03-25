/**
 * title: Base64 encryption and decryption
 * description: basic use
 */
import { decodeByBase64, encryptByBase64 } from 'fe-toolkit'
import React, { useState } from 'react'

const Page: React.FC = () => {
  const [data, setData] = useState('')
  return (
    <>
      <button onClick={() => setData(encryptByBase64('123'))}>encryption 123</button>
      <button onClick={() => setData(decodeByBase64(data))}>decryption</button>
      <div>value: {data}</div>
    </>
  )
}

export default Page
