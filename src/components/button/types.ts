import React from 'react'

export interface IButtonProps {
	id?: string
	title: String
	onClick?: () => void
	styleProps: string
	display?: boolean
	children?: React.ReactNode
	svgProps?: string
}
