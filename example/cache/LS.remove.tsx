/**
 * title: 单个删除
 * description: remove 删除单个缓存。
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      请前往控制台查看
      <button
        onClick={() => {
          LS.remove('LSDemo1')
          console.log('删除成功, 当前缓存的值为：', LS.get('LSDemo1'))
        }}
      >
        删除缓存中key为LSDemo1的内容
      </button>
    </>
  )
}

export default Page
