import { FC } from 'react'
import style from './styles.module.scss'
import { ButtonUI } from '../button/button'
import { PaginationDirection } from '../../utils/types'

type PaginationProps = {
	page: number
	total: number
	onUpdatePage: (direction: PaginationDirection) => Promise<void>
}

export const PaginationUI: FC<PaginationProps> = ({
	page,
	total,
	onUpdatePage,
}) => {
	let end = '_'
	let prev: number = page - 1
	let next = page + 1

	return (
		<div className={style.paginationContainer}>
			<ButtonUI
				title={`${prev <= 0 ? end : '← ' + prev}`}
				onClick={() => onUpdatePage(PaginationDirection.backward)}
				styleProps={style.paginationButton}
				display={prev <= 0}
			></ButtonUI>
			<span className={style.paginationState}>{page}</span>
			<ButtonUI
				title={`${next * 10 + 10 >= total ? end : next + ' →'}`}
				onClick={() => onUpdatePage(PaginationDirection.forward)}
				styleProps={style.paginationButton}
				display={page * 10 + 10 >= total}
			></ButtonUI>
		</div>
	)
}
