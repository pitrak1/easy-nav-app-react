export const expressUrl = (route) => {
	if (process.env.NODE_ENV === 'Production') {
		return `https://easy-nav-app-express-4ae6c893b0c5.herokuapp.com${route}`
	} else {
		return `http://localhost:5001${route}`
	}
}