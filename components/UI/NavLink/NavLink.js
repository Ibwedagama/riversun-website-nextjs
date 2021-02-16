import React from 'react'
import Link from 'next/link'
import styles from './NavLink.module.scss'
import { useRouter } from 'next/router'

const NavLink = ({ isSecondary = false, isSidebar = false }) => {
	const router = useRouter()

	const primary = (
		<>
			<li>
				<Link href='/'>
					<a className={router.pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}>
						Home
					</a>
				</Link>
			</li>
			<li>
				<Link href='/portfolio'>
					<a
						className={
							router.pathname === '/portfolio' ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Our Works
					</a>
				</Link>
			</li>
			<li>
				<Link href='/blog'>
					<a
						className={
							router.pathname === '/blog' ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Blog
					</a>
				</Link>
			</li>
		</>
	)

	const secondary = (
		<>
			<li>
				<Link href='/'>
					<a
						className={
							router.pathname === '/' ? `${styles.link} ${styles.activeSecondary}` : styles.link
						}
					>
						Home
					</a>
				</Link>
			</li>
			<li>
				<Link href='/portfolio'>
					<a
						className={
							router.pathname === '/portfolio'
								? `${styles.link} ${styles.activeSecondary}`
								: styles.link
						}
					>
						Our Works
					</a>
				</Link>
			</li>
			<li>
				<Link href='/blog'>
					<a
						className={
							router.pathname === '/blog' ? `${styles.link} ${styles.activeSecondary}` : styles.link
						}
					>
						Blog
					</a>
				</Link>
			</li>
		</>
	)

	return (
		<ul className={isSidebar ? `${styles.navlink} ${styles.sidebar}` : styles.navlink}>
			{isSecondary ? secondary : primary}
		</ul>
	)
}

export default NavLink
