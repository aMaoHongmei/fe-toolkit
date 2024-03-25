/**
 * title: removeExceptKey
 * description: Skip selected items and clear remaining cache
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      Please go to the console to view
      <button
        onClick={() => {
          LS.removeExceptKey(['LSDemo1'])
          console.log(
            'Successfully deleted the remaining caches. The current LSDemo1 cache value is：',
            LS.get('LSDemo1'),
          )
        }}
      >
        Clear remaining ls/ss cache
      </button>
    </>
  )
}

export default Page
