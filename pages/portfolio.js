import React, { useState, useEffect } from 'react'
import styles from '../styles/Portfolio.module.scss'
import Wrapper from '../components/Layout/Wrapper'
import Project from '../components/Card/Project'

const portfolio = () => {
	return (
		<main className={styles.portfolio}>
			<Wrapper>
				<section className={styles.content}>
					<h1 className={styles.title}>Our Works</h1>
					<section className={styles.cards}>
						{/* <Project
							src='/assets/images/FP1.webp'
							alt='Project'
							title='Project One'
							tag='Case Study #1'
							link='http://google.com'
						></Project> */}
					</section>
				</section>
			</Wrapper>
		</main>
	)
}

export default portfolio
