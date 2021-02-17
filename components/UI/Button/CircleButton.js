import React from 'react'
import styles from './CircleButton.module.scss'
import { FaInstagram, FaDribbble, FaLinkedinIn, FaBehance, FaGlobe } from 'react-icons/fa'

const CircleButton = ({ types = 'default', href = '/' }) => {
	let icon = ''
	switch (types) {
		case 'instagram':
			icon = <FaInstagram />
			break
		case 'dribbble':
			icon = <FaDribbble />
			break
		case 'behance':
			icon = <FaBehance />
			break
		case 'linkedin':
			icon = <FaLinkedinIn />
			break
		default:
			icon = <FaGlobe />
			break
	}
	return (
		<a href={href} target='_blank' rel='noopener' className={styles.button}>
			{icon}
			<p style={{ position: 'absolute', color: 'transparent' }}>{types}</p>
		</a>
	)
}

export default CircleButton
