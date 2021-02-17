import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Wrapper from '../Layout/Wrapper'
import NavLink from '../UI/NavLink/NavLink'
import Button from '../UI/Button/Button'
import { MdMenu } from 'react-icons/md'

const Navbar = ({ toggleSidebar, toggleModal }) => {
	const [posY, setPosY] = useState(0)
	const router = useRouter()

	useEffect(() => {
		document.addEventListener('scroll', () => {
			setPosY(window.scrollY)
		})
		return () => {
			document.removeEventListener('scroll', () => {})
		}
	}, [posY])

	return (
		<nav
			className={
				router.pathname === '/' ? `${styles.navbar}` : `${styles.navbar} ${styles.secondary}`
			}
			style={
				posY > 20
					? {
							background: '#FFFFFF',
							filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.08))',
							transition: '0.3s ease-in',
					  }
					: {}
			}
		>
			<Wrapper>
				<div className={styles.content}>
					<div className={styles.logo}>
						<Link href='/' forwardRef>
							<a>
								<img src='/assets/images/riversunlogo.webp' alt='Riversun Logo' />
							</a>
						</Link>
					</div>
					<div className={styles.navlink}>
						<NavLink isSecondary={posY > 20 || router.pathname !== '/' ? true : false} />
						<Button label={`Let's Talk`} types='primary' action={toggleModal} />
					</div>
					<div className={styles.toggleButton} onClick={toggleSidebar}>
						<MdMenu />
					</div>
				</div>
			</Wrapper>
		</nav>
	)
}

export default Navbar
