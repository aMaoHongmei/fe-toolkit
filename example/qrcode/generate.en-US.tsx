/**
 * title: basic use
 * description: generate two-dimensional code
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
      <button onClick={() => setUrl(generateQrcode(data))}>generate</button>
    </>
  )
}

export default Page
