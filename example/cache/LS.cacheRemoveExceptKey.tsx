/**
 * title: cacheRemoveExceptKey
 * description: 跳过选定项, 清除localStroage/sessionStroage中其余缓存。
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      请前往控制台查看
      <button
        onClick={() => {
          LS.cacheRemoveExceptKey(['LSDemo1'])
          console.log('删除其余缓存成功, 当前LSDemo1缓存的值为：', LS.get('LSDemo1'))
        }}
      >
        跳过选定项，清除ls和ss中除了LSDemo1外的其余内容
      </button>
    </>
  )
}

export default Page
