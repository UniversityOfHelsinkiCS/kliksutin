import { useEffect } from 'react'

interface PersistForm {
  value: any
  sessionStorageKey: string
}

const usePersistForm = ({ value, sessionStorageKey }: PersistForm) =>
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value))
  }, [value, sessionStorageKey])

export default usePersistForm
