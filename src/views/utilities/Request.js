import axios from 'axios'

export const post = async (url, data) => {
	return await axios.post(
		url, 
		data, 
		{
			headers: {
				'Content-Type': 'application/json', 
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers',
				'Authorization': sessionStorage.getItem('token')
			}
		}
	)
}

export const get = async (url, data = {}) => {
	return await axios.get(
		url, 
		{
			params: data,
			headers: {
				'Content-Type': 'application/json', 
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers',
				'Authorization': sessionStorage.getItem('token')
			}
		}
	)
}