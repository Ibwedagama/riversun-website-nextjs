import React from 'react'
import styles from './Layout.module.scss'
import Navbar from '../Header/Navbar'
import Sidebar from '../Header/Sidebar'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

const Layout = ({
	children,
	isModalOpen,
	toggleModal,
	isSidebarOpen,
	toggleSidebar,
	closeModal,
	closeSidebar,
}) => {
	return (
		<main className={styles.layout}>
			<Navbar toggleSidebar={toggleSidebar} toggleModal={toggleModal} />
			<Modal isModalOpen={isModalOpen} closeModal={closeModal}></Modal>
			<Sidebar
				isSidebarOpen={isSidebarOpen}
				toggleSidebar={toggleSidebar}
				toggleModal={toggleModal}
				closeSidebar={closeSidebar}
			/>
			{children}
			<Footer toggleModal={toggleModal} />
		</main>
	)
}

export default Layout
