import { FC, FormEvent, SetStateAction, Dispatch } from 'react'
import style from './styles.module.scss'
import { ButtonUI } from '../../button/button'

type SearchModuleUIProps = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
	setValue: Dispatch<SetStateAction<string>>
}

export const SearchModuleUI: FC<SearchModuleUIProps> = ({
	onSubmit,
	setValue,
}) => {
	return (
		<form className={style.form} onSubmit={onSubmit}>
			<input
				id='search_name'
				className={style.searchName}
				type='text'
				placeholder='Введите id пользователя...'
				name='input'
				onChange={(e) => setValue(e.target.value)}
			/>
			<label htmlFor='input' className={style.searchImg}></label>
			<ButtonUI title='Искать' styleProps={style.searchButton} />
		</form>
	)
}
