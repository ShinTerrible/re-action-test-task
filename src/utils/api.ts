import * as types from './types'

const URL = 'https://jsonplaceholder.typicode.com'

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

// //PROMISES
// // // get posts data filter
export const getFilterPostDataApi = (id: string) => {
	return fetch(`${URL}/posts?userId=${id}`)
		.then((res) => checkResponse<types.TPostsApiData[]>(res))
		.then((data) => {
			if (data) return data
		})
}

// // // get posts data
export const getPostsDataApi = () => {
	return fetch(`${URL}/posts`)
		.then((res) => checkResponse<types.TPostsApiData[]>(res))
		.then((data) => {
			if (data) return data
			return Promise.reject(data)
		})
}

// // // pagination
export const getPostsPaginationApi = (payload: {
	from: number
	to: number
}) => {
	const { from, to } = payload
	return fetch(`${URL}/posts?_start=${from}&_limit=${to}`)
		.then((res) => checkResponse<types.TPostsApiData[]>(res))
		.then((data) => {
			if (data) return data
			return Promise.reject(data)
		})
}

// export const getFilterPostDataApi = (id: string, from: number, to: number) => {
// 	let query = ''
// 	if (id.length === 0) {
// 		query = `userId=${id}&`
// 	}
// 	return fetch(`${URL}/posts?${query}_start=${from}&_limit=${to}`)
// 		.then((res) => checkResponse<types.TPostsApiData[]>(res))
// 		.then((data) => {
// 			if (data) return data
// 		})
// }

// export const getPostsDataApiNew = (params: { [key: string]: any }[]) => {
// 	let url = `${URL}/posts`
// 	if (params) {
// 		url += '?' + params.map((p) => `${p.key}=${p.value}`).join('&')
// 	}

// 	return fetch(url)
// 		.then((res) => checkResponse<types.TPostsApiData[]>(res))
// 		.then((data) => {
// 			if (data) return data
// 			return Promise.reject(data)
// 		})
// }
