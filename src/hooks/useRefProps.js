import { useRef } from 'react'

export default function useRefProps(props) {
  const ref = useRef(props)
  // 每次重新渲染设置值
  ref.current = props

  return ref
}