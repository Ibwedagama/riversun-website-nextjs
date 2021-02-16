import React, { useEffect, useState } from 'react'
import styles from './Alert.module.scss'
import { MdCheckCircle, MdCancel, MdError } from 'react-icons/md'

const Alert = ({ type = 'default' }) => {
	const [hide, setHide] = useState(false)
	useEffect(() => {
		console.log('hide menjadi false')
		setHide(false)
		setTimeout(() => {
			setHide(true)
			type = 'default'
			console.log('hide menjadi true')
		}, 5000)
	}, [type])
	let style = ''
	let showAlert = ''
	if (type === 'success') {
		showAlert = (
			<>
				<MdCheckCircle />
				<div className={styles.info}>
					<p className={styles.title}>Your message send successfully</p>
					<p className={styles.subtitle}>Our Team will respond your message soon, take a sit</p>
				</div>
			</>
		)
		style = `${styles.alert} ${styles.success}`
	} else if (type === 'error') {
		showAlert = (
			<>
				<MdCancel />
				<div className={styles.info}>
					<p className={styles.title}>Your message failed to send</p>
					<p className={styles.subtitle}>{`There is an error in our message system :(`}</p>
				</div>
			</>
		)
		style = `${styles.alert} ${styles.error}`
	} else {
		showAlert = (
			<>
				<MdError />
				<div className={styles.info}>
					<p className={styles.title}>Your message failed to send</p>
					<p className={styles.subtitle}>There is an empty form, please fill in.</p>
				</div>
			</>
		)
		style = `${styles.alert} ${styles.warning}`
	}

	return <div className={hide ? `${styles.alert} ${styles.hide}` : style}>{showAlert}</div>
}

export default Alert
