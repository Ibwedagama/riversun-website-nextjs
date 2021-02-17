import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	const [toggleSidebar, setToggleSidebar] = useState(false)
	const [toggleModal, setToggleModal] = useState(false)

	useEffect(() => {
		setToggleSidebar(false)
		setToggleModal(false)
	}, [Component])

	useEffect(() => {
		let body = document.querySelector('body')
		if (toggleModal) {
			body.style.overflowY = 'hidden'
			console.log('modal is open')
		} else {
			body.style.overflowY = 'scroll'
			console.log('modal is close')
		}
	}, [toggleModal])

	const handleToggleSidebar = () => {
		setToggleSidebar(!toggleSidebar)
	}

	const handleToggleModal = () => {
		setToggleModal(!toggleModal)
	}

	const closeModal = () => {
		setToggleModal(false)
	}
	const closeSidebar = () => {
		setToggleSidebar(false)
	}

	return (
		<Layout
			isModalOpen={toggleModal}
			isSidebarOpen={toggleSidebar}
			toggleModal={handleToggleModal}
			toggleSidebar={handleToggleSidebar}
			closeModal={closeModal}
			closeSidebar={closeSidebar}
		>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
