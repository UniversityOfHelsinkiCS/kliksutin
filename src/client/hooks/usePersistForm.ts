import { useEffect } from 'react'

import { PersistForm } from '../types'

const usePersistForm = ({ value, sessionStorageKey }: PersistForm) =>
  useEffect(() => {
    if (Object.keys(value).length === 0) return

    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value))
  }, [value, sessionStorageKey])

export default usePersistForm
