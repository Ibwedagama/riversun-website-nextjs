import React, { useState } from 'react'
import styles from './MainForm.module.scss'
import emailjs, { init } from 'emailjs-com'
import Button from '../UI/Button/Button'
import LinkButton from '../UI/Button/LinkButton'
import Alert from '../UI/Alert/Alert'

const MainForm = () => {
	const [formData, setFormData] = useState({
		name: {
			value: '',
			touched: false,
			validate: false,
		},
		email: {
			value: '',
			touched: false,
			validate: false,
		},
		company: {
			value: '',
			isRequired: 'false',
		},
		subject: {
			value: '',
			touched: false,
			validate: false,
		},
		message: {
			value: '',
			isRequired: 'false',
		},
	})
	const [result, setResult] = useState(false)
	const [error, setError] = useState(false)
	const [warning, setWarning] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleFormData = (e) => {
		const key = e.target.id
		const newData = e.target.value
		setFormData((prevState) => {
			return {
				...prevState,
				[key]: {
					touched: true,
					validate: prevState[key].validate,
					value: newData,
				},
			}
		})
		if (newData === '') {
			setFormData((prevState) => {
				return {
					...prevState,
					[key]: {
						...prevState[key],
						validate: false,
					},
				}
			})
		} else {
			setFormData((prevState) => {
				return {
					...prevState,
					[key]: {
						...prevState[key],
						validate: true,
					},
				}
			})
		}
	}

	const sendEmail = (e) => {
		e.preventDefault()
		if (formData.name.validate && formData.email.validate && formData.subject.validate) {
			setLoading(true)
			init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
					e.target,
					process.env.NEXT_PUBLIC_EMAILJS_USER_ID
				)
				.then(
					(result) => {
						if (result) {
							setResult(true)
							setWarning(false)
							setLoading(false)
						}
					},
					(error) => {
						if (error) {
							setError(true)
							setWarning(false)
							setLoading(false)
						}
					}
				)
		} else {
			setFormData((prevState) => {
				return {
					...prevState,
					['name']: {
						...prevState['name'],
						touched: true,
					},
					['email']: {
						...prevState['email'],
						touched: true,
					},
					['subject']: {
						...prevState['subject'],
						touched: true,
					},
				}
			})
			setWarning(true)
		}
	}

	return (
		<section className={styles.mainform}>
			<h1 className={styles.title}>Let’s Talk</h1>
			<p className={styles.subtitle}>
				Hi! We’d love to know more about you, so feel free to message us!
			</p>
			<form onSubmit={sendEmail}>
				<div className={styles.formControl}>
					<label htmlFor='id'>Your Name*</label>
					<input
						type='text'
						name='name'
						id='name'
						className={
							formData.name.touched && !formData.name.validate
								? `${styles.input} ${styles.warning}`
								: styles.input
						}
						placeholder='John Doe'
						value={formData.name.value}
						onChange={handleFormData}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='email'>Your Email*</label>
					<input
						type='email'
						name='email'
						id='email'
						className={
							formData.email.touched && !formData.email.validate
								? `${styles.input} ${styles.warning}`
								: styles.input
						}
						placeholder='example@mail.com'
						value={formData.email.value}
						onChange={handleFormData}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='company'>Your Company</label>
					<input
						type='text'
						name='company'
						id='company'
						className={styles.input}
						placeholder='Your Awesome Company'
						value={formData.company.value}
						onChange={handleFormData}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='subject'>Subject*</label>
					<input
						type='text'
						name='subject'
						id='subject'
						className={
							formData.subject.touched && !formData.subject.validate
								? `${styles.input} ${styles.warning}`
								: styles.input
						}
						placeholder='Hello Riversun Studio'
						value={formData.subject.value}
						onChange={handleFormData}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						className={styles.textarea}
						placeholder={`Let's have a conversation :)`}
						onChange={handleFormData}
						defaultValue={formData.message.value}
					></textarea>
				</div>

				{result ? <Alert type='success' /> : ''}
				{error ? <Alert type='error' /> : ''}
				{warning ? <Alert type='warning' /> : ''}

				<div className={styles.buttonGroup}>
					{loading ? (
						<Button
							label='SENDING...'
							type='button'
							types='secondary'
							loading={true}
							isDisabled={true}
						/>
					) : (
						<>
							<Button label='SEND MESSAGE' type='submit' types='secondary' icon={true} />
							<p>Or</p>
							<LinkButton
								label='WHATSAPP US'
								types='primary'
								whatsapp={true}
								newTab={true}
								href={`https://wa.me/62895800287994?text=${encodeURI(`Hello Riversun Studio :)`)}`}
							/>
						</>
					)}
				</div>
			</form>
		</section>
	)
}

export default MainForm
