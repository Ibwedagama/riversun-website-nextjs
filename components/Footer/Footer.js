import React from 'react'
import styles from './Footer.module.scss'
import Button from '../UI/Button/Button'
import CircleButton from '../UI/Button/CircleButton'
import Wrapper from '../Layout/Wrapper'

const Footer = ({ toggleModal }) => {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<section className={styles.content}>
					<h3 className={styles.title}>So, what do you think ?</h3>
					<h3 className={styles.subtitle}>We’d love to chat with you.</h3>
					<Button label={`LET'S TALK`} action={toggleModal} types='third' icon={true} />
					<div className={styles.linkButton}>
						<CircleButton types='instagram' href='https://www.instagram.com/riversunstudio/' />
						<CircleButton types='dribbble' href='https://dribbble.com/riversunstudio/about' />
						<CircleButton types='behance' href='https://www.behance.net/riversunstudio' />
						<CircleButton types='linkedin' href='https://id.linkedin.com/company/riversunstudio' />
					</div>
				</section>
				<section className={styles.copywrite}>
					<p>&copy; Riversun 2020 All Right Reserved</p>
				</section>
			</Wrapper>
		</footer>
	)
}

export default Footer
