import React from 'react'
import styles from './Button.module.scss'
import { MdArrowForward } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'

const Button = ({
	label = 'N/A',
	types = 'primary',
	action = null,
	icon = false,
	whatsapp = false,
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
		<button className={className} onClick={action}>
			<span>{whatsapp ? <ImWhatsapp /> : ''}</span>
			{label} <span>{icon ? <MdArrowForward /> : ''}</span>
		</button>
	)
}

export default Button
