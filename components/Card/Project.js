import React from 'react'
import Image from 'next/image'
import styles from './Project.module.scss'
import LinkButton from '../UI/Button/LinkButton'

const Project = ({ src, alt, width, height, title, tag, link }) => {
	return (
		<section className={styles.project}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				layout='intrinsic'
				objectFit='cover'
			/>
			<section className={styles.info}>
				<a href={link} target='_blank' rel='noopener' className={styles.title}>
					{title}
				</a>
			</section>
			<section className={styles.overlay}>
				<p className={styles.tag}>{tag}</p>
				<h3 className={styles.title}>{title}</h3>
				<LinkButton types='fourth' newTab={true} label='LEARN MORE' icon={true} />
			</section>
		</section>
	)
}

export default Project
