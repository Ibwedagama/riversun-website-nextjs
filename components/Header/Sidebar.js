import React, { useEffect } from 'react'
import styles from './Sidebar.module.scss'
import NavLink from '../UI/NavLink/NavLink'
import { MdClose } from 'react-icons/md'
import Wrapper from '../Layout/Wrapper'
import Button from '../UI/Button/Button'

const Sidebar = ({ isSidebarOpen, toggleModal, closeSidebar }) => {
	useEffect(() => {
		let body = document.querySelector('body')
		if (isSidebarOpen) {
			body.style.overflowY = 'hidden'
		} else {
			body.style.overflowY = 'scroll'
		}
	}, [isSidebarOpen])
	return (
		<div className={isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
			<Wrapper>
				<>
					<div className={styles.header}>
						<MdClose onClick={closeSidebar}></MdClose>
					</div>
					<div className={styles.body}>
						<NavLink isSecondary={true} isSidebar={true} />
						<Button label={`Let's Talk`} types='primary' action={toggleModal} />
					</div>
				</>
			</Wrapper>
		</div>
	)
}

export default Sidebar
