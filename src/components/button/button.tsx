import clsx from 'clsx'
import style from './styles.module.scss'
import { FC } from 'react'

export interface IButtonProps {
	title: String
	onClick?: () => void
	styleProps: string
	display?: boolean
	svgProps?: string
}

export const ButtonUI: FC<IButtonProps> = ({
	title,
	onClick,
	styleProps,
	display,
	svgProps,
}) => {
	return (
		<>
			<button
				type='submit'
				onClick={onClick}
				className={clsx(style.buttonContent, styleProps)}
				disabled={display}
			>
				{title} <span className={clsx(svgProps)}></span>
			</button>
		</>
	)
}
