import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	getPostsPaginationApi,
	getPostsDataApi,
	getFilterPostDataApi,
} from '../../utils/api'
import { TDBApiData } from '../../utils/types'

export const initialState: TDBApiData = {
	posts: [],
	allPosts: [],
	filter: '',
	isLoading: false,
	page: 1,
	total: 100,
	error: undefined,
}

//Thunks
export const getPostsPagination = createAsyncThunk(
	'postsPagination/getPostsPagination',
	getPostsPaginationApi
)
export const getPosts = createAsyncThunk(
	'postsData/getPostsData',
	getPostsDataApi
)

export const getFilterPostData = createAsyncThunk(
	'filterData/getfilterData',
	getFilterPostDataApi
)

export const searchData = createSlice({
	name: 'searchData',
	initialState,
	reducers: {
		updatePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload
		},
		resetSearchData: () => initialState,
	},
	extraReducers: (builder) => {
		// get Posts Pagination
		builder
			.addCase(getPostsPagination.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getPostsPagination.fulfilled, (state, { payload }) => {
				state.posts = payload
				state.isLoading = false
			})
			.addCase(getPostsPagination.rejected, (state, { error }) => {
				state.error = error.message
			}),
			// get all Posts
			builder.addCase(getPosts.fulfilled, (state, { payload }) => {
				state.allPosts = payload
			}),
			// get Filter Post
			builder
				.addCase(getFilterPostData.pending, (state) => {
					state.isLoading = true
				})
				.addCase(getFilterPostData.fulfilled, (state, { payload }) => {
					state.posts = payload
					state.isLoading = false
				})
				.addCase(getFilterPostData.rejected, (state, { error }) => {
					state.error = error.message
				})
	},
	selectors: {
		getStatePosts: (state) => state.posts,
		getTotal: (state) => state.total,
		getPage: (state) => state.page,
		getLoadingState: (state) => state.isLoading,
		getErrorMassage: (state) => state.error,
	},
})

export const {
	getStatePosts,
	getTotal,
	getPage,
	getLoadingState,
	getErrorMassage,
} = searchData.selectors
export const { resetSearchData, updatePage } = searchData.actions
export default searchData.reducer
