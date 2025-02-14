import { FC, FormEvent, useState } from 'react'
import { useDispatch } from '../../services/store'
import { SearchModuleUI } from '../UI/search-module/searchUI'
import { getFilterPostData } from '../../slices/search-data/searchData'

export const SearchModule: FC = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const dispatch = useDispatch()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(getFilterPostData(inputValue))
	}

	return <SearchModuleUI onSubmit={handleSubmit} setValue={setInputValue} />
}
