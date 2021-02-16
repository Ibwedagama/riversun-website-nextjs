import React from 'react'
import styles from './Process.module.scss'

const Process = ({ src, alt, width, height, title, desc }) => {
	return (
		<div className={styles.process}>
			<img src={src} alt={alt} className={styles.image} />
			<p className={styles.title}>{title}</p>
			<p className={styles.desc}>{desc}</p>
		</div>
	)
}

export default Process
