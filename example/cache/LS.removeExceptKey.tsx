/**
 * title: removeExceptKey
 * description: 跳过选定项，清除其余缓存
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      请前往控制台查看
      <button
        onClick={() => {
          LS.removeExceptKey(['LSDemo1'])
          console.log('删除其余缓存成功, 当前LSDemo1缓存的值为：', LS.get('LSDemo1'))
        }}
      >
        跳过LSDemo1，清除其余ls/ss缓存
      </button>
    </>
  )
}

export default Page
