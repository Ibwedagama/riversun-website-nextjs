import React from 'react'
import Image from 'next/image'
import styles from './Post.module.scss'

const Post = ({
	title = '',
	date = '',
	desc = '',
	link = '',
	thumbnail = '',
	author = '',
	authorImage = '',
}) => {
	return (
		<a href={link} target='_blank' rel='noopener noreferrer' alt={title}>
			<article className={styles.card}>
				<section className={styles.header}>
					<Image src={thumbnail} layout='fill' objectFit='cover' />
				</section>
				<section className={styles.title}>
					<h2>{title}</h2>
				</section>
				<section className={styles.footer}>
					<div className={styles.authorImage}>
						<Image src={authorImage} layout='fill' />
					</div>
					<div>
						<h2 className={styles.author}>{author}</h2>
						<p className={styles.date}>{date}</p>
					</div>
				</section>
			</article>
		</a>
	)
}

export default Post
