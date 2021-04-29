import React, { useState, useEffect } from 'react'
import styles from '../styles/Portfolio.module.scss'
import Wrapper from '../components/Layout/Wrapper'
import Project from '../components/Card/Project'
import SEO from '../components/SEO/SEO'

const portfolio = () => {
  return (
    <main className={styles.portfolio}>
      <SEO
        title='Riversun Studio | Our Works'
        desc={`Some of the projects we've made with our amazing clients.`}
      />
      <Wrapper>
        <section className={styles.content}>
          <h1 className={styles.title}>Our Works</h1>
          <section className={styles.cards}>
            <Project
							src='/assets/images/test.jpg'
							alt='On Progress'
							title='On Progress'
							tag='Project 1'
							link='#'
						/>
          </section>
        </section>
      </Wrapper>
    </main>
  )
}

export default portfolio
