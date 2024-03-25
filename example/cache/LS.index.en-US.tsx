/**
 * title: Basic Use
 * description: set / get Simple usage.
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  LS.set('LSDemo1', 1)

  return (
    <>
      The value of LSDemo1 in the current localStorage: <strong>{LS.get('LSDemo1')}</strong>
    </>
  )
}

export default Page
