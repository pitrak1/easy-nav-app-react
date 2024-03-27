import {createContext, useState, useEffect} from 'react'
import {get} from '../utilities/Request.js'
import {expressUrl} from '../utilities/ExternalUrls.js'

const UserContext = createContext({state: {}, actions: {}})


const UserProvider = ({children}) => {
	const [user, setUser] = useState()

	const value = {
		state: {user},
		actions: {setUser}
	}

	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	)
}

export {UserContext, UserProvider}