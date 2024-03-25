/**
 * title: Basic Use
 * description: Build a cache management function
 */
import { createLocalStorage, createSessionStorage, createStorage } from 'fe-toolkit'
import React, { useEffect } from 'react'

const LS1 = createStorage(localStorage, {
  prefixKey: 'cache-ls-',
  timeout: 3,
})
const LS2 = createLocalStorage({
  prefixKey: 'cache-ls-',
  timeout: 3,
})

const SS1 = createSessionStorage({
  prefixKey: 'cache-ss-',
  timeout: 3,
})

const Page: React.FC = () => {
  const setCache = () => {
    LS1.set('demo1', 'demo1')
    LS2.set('demo2', 'demo2')
    SS1.set('demo3', 'demo3')
  }
  useEffect(() => {
    return () => {
      LS1.remove('demo1')
      LS2.remove('demo2')
      SS1.remove('demo2')
    }
  }, [])
  return (
    <>
      Go to the cache to view<button onClick={() => setCache()}>Set cache</button>
    </>
  )
}

export default Page
