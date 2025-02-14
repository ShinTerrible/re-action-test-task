import style from './styles.module.scss'
import { FC, useEffect, useState } from 'react'
import { PaginationUI } from '../pagination/paginationUI'
import { useDispatch, useSelector } from '../../services/store'
import {
	getTotal,
	getPostsPagination,
	getStatePosts,
	updatePage,
	getPage,
	getLoadingState,
	getErrorMassage,
} from '../../slices/search-data/searchData'
import { PostItemUI } from '../UI/post-item/postItemUI'
import { getPostsDataApi } from '../../utils/api'
import { Preloader } from '../preloader/preloader'
import { PaginationDirection } from '../../utils/types'

export const Posts: FC = () => {
	const dispatch = useDispatch()
	const page = useSelector(getPage)
	const pageSize = 10
	const [statePage, setStatePage] = useState<number>(page)
	const totalPosts: number = useSelector(getTotal)
	const isLoading: boolean = useSelector(getLoadingState)
	const error = useSelector(getErrorMassage)
	useEffect(() => {
		dispatch(
			getPostsPagination({
				from: (statePage - 1) * pageSize,
				to: pageSize,
			})
		)
	}, [])

	const postPagination = useSelector(getStatePosts)

	const noData = <span className={style.noData}>Пока ничего не найдено.</span>

	const updatePaginationState = (direction: PaginationDirection) => {
		if (direction === PaginationDirection.forward) {
			setStatePage(page + 1)
		} else if (direction === PaginationDirection.backward) {
			setStatePage(page - 1)
		}
	}

	const onUpdatePage = async (direction: PaginationDirection) => {
		updatePaginationState(direction)

		dispatch(
			getPostsPagination({
				from: (statePage - 1) * pageSize,
				to: pageSize,
			})
		)

		dispatch(updatePage(statePage))
	}

	const postListRender = () => {
		const list = postPagination?.map((element, index) => {
			return (
				<PostItemUI
					key={index}
					id={element.id}
					title={element.title}
					body={element.body}
				/>
			)
		})
		return list
	}
	if (isLoading) {
		return <Preloader />
	}

	return (
		<article>
			<div>{error === undefined ? postListRender() : noData}</div>
			<PaginationUI
				page={page}
				total={totalPosts}
				onUpdatePage={onUpdatePage}
			/>
		</article>
	)
}
