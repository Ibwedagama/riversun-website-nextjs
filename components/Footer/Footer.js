import React from 'react'
import styles from './Footer.module.scss'
import Button from '../UI/Button/Button'
import CircleButton from '../UI/Button/CircleButton'
import Wrapper from '../Layout/Wrapper'

const Footer = ({ toggleModal }) => {
	const style = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
	return (
		<footer className={`${styles.footer} footer`}>
			<Wrapper>
				<section className={styles.content}>
					<h3 className={styles.title}>So, what do you think ?</h3>
					<h3 className={styles.subtitle}>We’d love to chat with you.</h3>
					<Button label={`LET'S TALK`} action={toggleModal} types='third' icon={true} />
					<section className={styles.linkButton}>
						<section className='footer-links' style={style}>
							<CircleButton types='instagram' href='https://www.instagram.com/riversunstudio/' />
						</section>
						<section className='footer-links' style={style}>
							<CircleButton types='dribbble' href='https://dribbble.com/riversunstudio/about' />
						</section>
						<section className='footer-links' style={style}>
							<CircleButton types='behance' href='https://www.behance.net/riversunstudio' />
						</section>
						<section className='footer-links' style={style}>
							<CircleButton
								types='linkedin'
								href='https://id.linkedin.com/company/riversunstudio'
							/>
						</section>
					</section>
				</section>
				<section className={styles.copywrite}>
					<p>&copy; Riversun 2020 All Right Reserved</p>
				</section>
			</Wrapper>
		</footer>
	)
}

export default Footer
