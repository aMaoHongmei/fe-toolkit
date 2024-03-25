/**
 * title: md5加密
 * description: 基本使用
 */
import { encryptByMd5 } from 'fe-toolkit'
import React, { useState } from 'react'

const Page: React.FC = () => {
  const [data, setData] = useState('')
  const [value, setValue] = useState('')

  return (
    <>
      <input value={value} type="text" onChange={e => setValue(e.target.value)} />
      <button onClick={() => setData(encryptByMd5(data))}>加密</button>
      <div>md5value: {data}</div>
    </>
  )
}

export default Page
