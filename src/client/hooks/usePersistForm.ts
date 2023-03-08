import { useEffect } from 'react'
import { PersistForm } from '../types'

const usePersistForm = ({ value, sessionStorageKey }: PersistForm) =>
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value))
  }, [value, sessionStorageKey])

export default usePersistForm
