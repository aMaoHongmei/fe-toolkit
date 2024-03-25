/**
 * title: 基本使用
 * description: base64数据转blob流
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
        base64数据URL转Blob（控制台查看）
      </button>
    </>
  )
}

export default Page
