import { useState, useEffect } from 'react';

export const IDLE_STATUS = 'idle'
export const LOAD_STATUS = 'load'
export const READY_STATUS = 'ready'
export const ERROR_STATUS = 'error'
export const LOADING_STATUS = 'loading'

function useScript(src) {
  const [status, setStatus] = useState(src ? LOADING_STATUS : IDLE_STATUS);

  useEffect(() => {
    if (!src) {
      setStatus(IDLE_STATUS);
      return;
    }
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      // Create script
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-status', LOADING_STATUS);
      // Add script to document body
      document.body.appendChild(script);

      // Store status in attribute on script
      // This can be read by other instances of this hook
      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          'data-status',
          event.type === LOAD_STATUS ? READY_STATUS : ERROR_STATUS
        );
      };

      script.addEventListener(LOAD_STATUS, setAttributeFromEvent);
      script.addEventListener(ERROR_STATUS, setAttributeFromEvent);
    } else {
      setStatus(script.getAttribute('data-status'));
    }

    const setStateFromEvent = (event) => {
      setStatus(event.type === LOAD_STATUS ? READY_STATUS : ERROR_STATUS);
    };

    script.addEventListener(LOAD_STATUS, setStateFromEvent);
    script.addEventListener(ERROR_STATUS, setStateFromEvent);
    return () => {
      if (script) {
        script.removeEventListener(LOAD_STATUS, setStateFromEvent);
        script.removeEventListener(ERROR_STATUS, setStateFromEvent);
      }
    };
  }, [src]);

  return status;
}

export default useScript;
