import React from 'react'
import styles from './Button.module.scss'
import { MdArrowForward } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { MdSend } from 'react-icons/md'

const Button = ({
	label = 'N/A',
	type = 'button',
	types = 'primary',
	action = null,
	icon = false,
	loading = false,
	whatsapp = false,
	isDisabled = false,
}) => {
	let className = ''
	switch (types) {
		case 'primary':
			className = `${styles.button} ${styles.primary}`
			break

		case 'secondary':
			className = `${styles.button} ${styles.secondary}`
			break

		case 'third':
			className = `${styles.button} ${styles.third}`
			break

		case 'fourth':
			className = `${styles.button} ${styles.fourth}`
			break

		default:
			className = `${styles.button} ${styles.primary}`
			break
	}
	return (
		<button className={className} onClick={action} disabled={isDisabled} type={type}>
			{whatsapp ? (
				<span>
					<ImWhatsapp />
				</span>
			) : (
				''
			)}
			{label}{' '}
			{icon ? (
				<span>
					<MdArrowForward />
				</span>
			) : (
				''
			)}
			{loading ? (
				<span>
					<MdSend />
				</span>
			) : (
				''
			)}
		</button>
	)
}

export default Button
