import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// import { gsapFooterAnimation } from '../util/Animation'

function MyApp({ Component, pageProps }) {
	const [toggleSidebar, setToggleSidebar] = useState(false)
	const [toggleModal, setToggleModal] = useState(false)

	useEffect(() => {
		setToggleSidebar(false)
		setToggleModal(false)
		// gsapFooterAnimation()
	}, [Component])

	useEffect(() => {
		let body = document.querySelector('body')
		if (toggleModal) {
			body.style.overflowY = 'hidden'
		} else {
			body.style.overflowY = 'scroll'
		}
	}, [toggleModal])

	const handleToggleSidebar = () => {
		setToggleSidebar(!toggleSidebar)
	}

	const handleToggleModal = () => {
		setToggleModal(!toggleModal)
	}

	const closeModal = () => {
		closeSidebar()
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
