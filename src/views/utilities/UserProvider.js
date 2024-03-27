import { createContext, useState } from 'react'

const UserContext = createContext({ state: {}, actions: {} })

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  const value = {
    state: { user },
    actions: { setUser }
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
