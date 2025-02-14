import { Posts } from '../posts'
import { SearchModule } from '../search-module/search'
import style from './styles.module.scss'

export const Container = () => {
	return (
		<section className={style.container}>
			<SearchModule></SearchModule>
			<Posts></Posts>
		</section>
	)
}
