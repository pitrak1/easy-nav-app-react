import axios from 'axios'

export const post = async (url, data) => {
	return await axios.post(
		url, 
		data, 
		{
			headers: {
				'Content-Type': 'application/json', 
				'Access-Control-Allow-Origin': '*',
				'Authorization': sessionStorage.getItem('token')
			}
		}
	)
}