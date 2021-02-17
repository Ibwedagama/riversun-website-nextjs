import React from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'

const LinkButton = ({
	label = 'N/A',
	types = 'primary',
	href = '/#',
	icon = false,
	whatsapp = false,
	newTab = false,
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
		<Link href={href} passHref>
			<a target={newTab ? '_blank' : ''} rel='noopener' className={className}>
				<span>{whatsapp ? <ImWhatsapp /> : ''}</span>
				{label} <span>{icon ? <MdArrowForward /> : ''}</span>
			</a>
		</Link>
	)
}

export default LinkButton
