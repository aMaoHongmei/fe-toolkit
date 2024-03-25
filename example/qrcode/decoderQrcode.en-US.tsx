/**
 * title: basic use
 * description: decoding two-dimensional code
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
      alert('please select file')
    }
  }
  return (
    <>
      <input type="file" onChange={e => setFile(e.target.files?.[0])} />
      go to console<button onClick={() => decoderFile()}>decode</button>
    </>
  )
}

export default Page
