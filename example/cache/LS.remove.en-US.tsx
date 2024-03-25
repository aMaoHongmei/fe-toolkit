/**
 * title: Individual deletion
 * description: remove Delete a single cache.
 */
import { LS } from 'fe-toolkit'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      Please go to the console to view
      <button
        onClick={() => {
          LS.remove('LSDemo1')
          console.log('Successfully deleted, the current cached value is：', LS.get('LSDemo1'))
        }}
      >
        Delete content
      </button>
    </>
  )
}

export default Page
