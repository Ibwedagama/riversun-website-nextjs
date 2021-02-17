import React, { useState } from 'react'
import styles from './Service.module.scss'
import Image from 'next/image'

const Service = ({ src, alt, title, desc, width, height }) => {
	const [expand, setExpand] = useState(false)
	const shortDesc = desc.substr(0, 78).concat('...')
	const handleExpand = () => {
		setExpand(!expand)
	}
	return (
		<section className={`${styles.service}`}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				layout='intrinsic'
				objectFit='cover'
				quality={100}
			/>
			<section className={styles.details}>
				<h3 className={styles.title}>{title}</h3>
				<p className={expand ? `${styles.subtitle} ${styles.expand}` : styles.subtitle}>
					{expand ? desc : shortDesc}
				</p>
			</section>
			<section className={styles.button} onClick={handleExpand}>
				<p>{expand ? `Show Less` : `Show More`}</p>
			</section>
		</section>
	)
}

export default Service
