import React from 'react'
import ReactModal from 'react-modal'
import MainForm from './MainForm'
import styles from './Modal.module.scss'
import { MdClose } from 'react-icons/md'

ReactModal.setAppElement('#__next')

const Modal = ({ isModalOpen, closeModal }) => {
	return (
		<ReactModal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			closeTimeoutMS={500}
			style={{
				overlay: {
					position: 'fixed',
					display: 'flex',
					justifyContent: 'center',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
					zIndex: 200,
				},
				content: {
					position: 'relative',
					borderRadius: 'none',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					padding: 0,
				},
			}}
		>
			<div className={styles.header}>
				<MdClose onClick={closeModal} />
			</div>
			<MainForm />
		</ReactModal>
	)
}

export default Modal
