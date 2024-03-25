/**
 * title: Basic use
 * description: Base64 data to blob flow
 */
import { base64URLtoBlob } from 'fe-toolkit'
import React, { useState } from 'react'
const Page: React.FC = () => {
  const [file, setFile] = useState<any>()
  return (
    <>
      <input type="file" onChange={e => setFile(e.target.files?.[0])} />
      <button
        onClick={() => {
          if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = async ev => {
              const result: any = ev.target?.result || ''
              const res = base64URLtoBlob(result)
              console.log(res)
            }
          }
        }}
      >
        base64 data URL turn Blob（console view）
      </button>
    </>
  )
}

export default Page
