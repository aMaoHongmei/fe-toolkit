/**
 * title: cacheRemoveExceptKey
 * description: Skip the selected item and clear the remaining cache in localStroage/sessionStroage.
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      Please go to the console to view
      <button
        onClick={() => {
          LS.cacheRemoveExceptKey(['LSDemo1'])
          console.log('删除其余缓存成功, 当前LSDemo1缓存的值为：', LS.get('LSDemo1'))
        }}
      >
        Clear all contents in ls and ss
      </button>
    </>
  )
}

export default Page
