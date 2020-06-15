import { useState, useCallback } from 'react'
/**
 * 实现页面轮询机制
 */
export default function usePoll(options) {
  const [polling, setPolling, pollingRef] = useRefState(false)
  const [error, setError] = useState()
  const state = useInstance({})
  const optionsRef = useRefProps(options)

  const poll = useCallback(async (immediate) => {
    // 已经卸载，或其他轮询器正在轮询
    if (state.unmounted || pollingRef.current) return
    setPolling(true)
    state.timer = window.setTimeout(
      async () => {
        if (state.unmounted) return
        try {
          let res
          let error
          setError(undefined)

          try {
            res = await optionsRef.current.poller()
          } catch (err) {
            error = err
            setError(err)
            if (optionsRef.current.onError) {
              optionsRef.current.onError(err)
            }
          }
          // 准备下一次轮询
          if (!state.unmounted && (await optionsRef.current.condition(res, error))) {
            setTimeout(poll)
          }
        } finally {
          !state.unmounted && setPolling(false)
        }
      },
      immediate ? 0 : optionsRef.current.duration || 5000,
    )
  }, [])

  useOnUpdate(
    async () => {
      if (await optionsRef.current.condition()) poll(options.immediately)
    },
    options.args || [],
    false,
  )

  useOnUnmount(() => {
    state.unmounted = true
    clearTimeout(state.timer)
  })

  return { polling, error }
}