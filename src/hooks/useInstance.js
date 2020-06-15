import { useRef } from 'react'

function isFunction(initial) {
  return typeof initial === 'function'
}

function useInstance(initial) {
  const instance = useRef()
  // 初始化
  if (instance.current == null) {
    if (initial) {
      instance.current = isFunction(initial) ? initial() : initial
    } else {
      instance.current = {}
    }
  }

  return instance.current
}

export default useInstance
