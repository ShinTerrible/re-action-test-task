import { TPostsApiData } from '../../../utils/types'
import style from './styles.module.scss'

export const PostItemUI = ({ title, body }: Omit<TPostsApiData, 'userId'>) => {
	return (
		<>
			<div className={style.post}>
				<img className={style.postImage} />
				<div className={style.postBodyWraper}>
					<h2 className={style.postTitle}>{title}</h2>
					<p className={style.postBody}>{body}</p>
				</div>
			</div>
		</>
	)
}
