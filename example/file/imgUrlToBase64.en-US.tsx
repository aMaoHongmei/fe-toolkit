/**
 * title: Basic use
 * description: Image url goes to base64
 */
import { imgUrlToBase64 } from 'fe-toolkit'
import React, { useState } from 'react'
const Page: React.FC = () => {
  const [url, setUrl] = useState<string | undefined>()
  return (
    <>
      <input type="url" placeholder="Please enter image address" onChange={e => setUrl(e.target.value)} />
      <button
        onClick={async () => {
          if (url) {
            const res = await imgUrlToBase64(url)
            console.log(res)
          }
        }}
      >
        Image address to base64（console view）
      </button>
    </>
  )
}

export default Page
