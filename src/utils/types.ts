export type TPostsApiData = {
	userId: number
	id: number
	title: string
	body: string
}

export type TDBApiData = {
	posts: TPostsApiData[] | undefined
	allPosts: TPostsApiData[] | undefined
	filter: string
	isLoading: boolean
	page: number
	total: number
	error: string | undefined
}

export enum PaginationDirection {
	forward = 'forward',
	backward = 'backward',
}
