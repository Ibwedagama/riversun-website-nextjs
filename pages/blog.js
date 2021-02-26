import React, { useState } from 'react'
import styles from '../styles/Blog.module.scss'
import Wrapper from '../components/Layout/Wrapper'
import Post from '../components/Card/Post'
import SEO from '../components/SEO/SEO'

const blog = ({ posts }) => {
	let postData = null
	let options = null
	let authorImage = null
	if (posts.status == 'ok' && posts.items.length > 0) {
		postData = posts.items
		options = { year: 'numeric', month: 'long', day: 'numeric' }
		authorImage = posts.feed.image
	}

	return (
		<main className={styles.blog}>
			<SEO
				title='Riversun Studio | Blog'
				desc='Riversun Studio Blog Posts. Learn more about UI/UX Design, Website Development and New Technologies.'
			/>
			<Wrapper>
				<section className={styles.content}>
					<h1 className={styles.title}>Blog</h1>

					{/* Bila error dalam mengambil data atau belum ada data */}
					{!postData ? (
						<section className={styles.empty}>
							<h2 className={styles.emptyTitle}>On Progress</h2>
							<p className={styles.emptySubtitle}>We’re working on it!</p>
						</section>
					) : (
						''
					)}

					<section className={styles.cards}>
						{/* Bila data ada maka tampilkan data post */}
						{postData
							? postData.map((post) => {
									return (
										<Post
											key={post.guid}
											title={post.title}
											thumbnail={post.thumbnail}
											date={new Date(post.pubDate).toLocaleDateString(undefined, options)}
											link={post.guid}
											author={post.author}
											authorImage={authorImage}
										/>
									)
							  })
							: ''}
					</section>
				</section>
			</Wrapper>
		</main>
	)
}

export default blog

export async function getStaticProps(context) {
	// axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@riversunstudio')
	let data = null

	try {
		const response = await fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@riversunstudio'
		)
		data = await response.json()
	} catch (error) {
		console.error
		data = null
	}

	return {
		props: {
			posts: data,
		},
		revalidate: 300,
	}
}
