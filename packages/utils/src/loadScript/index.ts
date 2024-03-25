/**
 * 异步加载js/css
 * @param url
 * @param [string] type
 * @returns
 */
export function loadScript(url: string, type: string = 'js') {
  let flag = false
  let insert = type === 'js' ? 'body' : 'head'

  return new Promise(resolve => {
    const insertNode: Element = document.getElementsByTagName(insert)[0]
    Array.from(insertNode.children).forEach((ele: any) => {
      if ((ele.src || '').indexOf(url) !== -1) {
        flag = true
        resolve(true)
      }
    })

    if (flag) return

    let script
    if (type === 'js') {
      script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
    } else if (type === 'css') {
      script = document.createElement('link')
      script.rel = 'stylesheet'
      script.href = url
    } else {
      script = document.createElement('div')
      script.innerText = url
    }

    insertNode.appendChild(script)
    script.onload = function () {
      resolve(true)
    }
  })
}
