/**
 * title: 基本使用
 * description: set / get 简单的用法。
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  LS.set('LSDemo1', 1)

  return (
    <>
      当前localStorage中LSDemo1的value: <strong>{LS.get('LSDemo1')}</strong>
    </>
  )
}

export default Page
