import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import Wrapper from '../components/Layout/Wrapper'
import Button from '../components/UI/Button/Button'
import Image from 'next/image'
import Process from '../components/Card/Process'
import Service from '../components/Card/Service'
import Project from '../components/Card/Project'
import { gsap } from 'gsap/dist/gsap'

export default function Home() {
	const handleScrollToMain = () => {
		gsap.to(window, { duration: 1, scrollTo: '#main', ease: 'power2In' })
	}

	const gsapAnimation = () => {}

	useEffect(() => {
		gsapAnimation()
	}, [])

	return (
		<main className={styles.home}>
			{/* Hero Section */}
			<section className={styles.hero}>
				<Wrapper>
					<section className={styles.container}>
						<section className={styles.heroInfo}>
							<h1 className={styles.heroTitle}>
								<span className={styles.heroDecoration} />
								Welcome to Riversun
							</h1>
							<p className={styles.subtitle}>
								We are a team of passionate UI/UX Designer and Website Developer. We will be happy
								to collaborate with you and create something amazing!
							</p>
							<Button label={`KNOW MORE`} icon={true} types='third' action={handleScrollToMain} />
						</section>
						<Image
							src='/assets/images/hero_illustration.webp'
							alt='riversun studio illustration'
							width={823}
							height={574}
							layout='responsive'
							className={styles.heroImage}
						/>
					</section>
				</Wrapper>
			</section>

			{/* Who We Are */}
			<section className={styles.who_we_are} id='main'>
				<Wrapper>
					<section className={styles.container_who_we_are}>
						<h3 className={styles.title}>
							<span className={styles.titleDecoration}>01</span>Who We Are
						</h3>
						<p className={styles.subtitle}>
							We are a team of passionate UI/UX Designer, and we believe with the right design and
							strong collaboration, we can support your brand growth and help you fulfill your
							vision and goals.
						</p>
					</section>
				</Wrapper>
			</section>

			{/* What we Make */}
			<section className={styles.what_we_make}>
				<Wrapper>
					<section className={styles.container_what_we_make}>
						<h3 className={styles.title}>
							<span className={styles.titleDecoration}>02</span>What We Make
						</h3>
						<p className={styles.subtitle}>Some of the services we can discuss together</p>
						<section className={styles.services}>
							<Service
								src='/assets/images/ServiceSatu.webp'
								alt='UI/UX Design Service by Riversun Studio'
								width={518}
								height={320}
								title='UI/UX Design'
								desc='The right design will make you easier to achieve your goals in the future. By considering UX ( User Experience ) you can create a website or applications that not only work but are also  comfortable and friendly for the users'
							/>
							<Service
								src='/assets/images/ServiceDua.webp'
								alt='Website Development Service by Riversun Studio'
								width={518}
								height={320}
								title='Website Development'
								desc={`The website will make you easier to reach new customers
								in this digital era. Show who you are with a website that describes your self-image. Let's discuss with us about 
								your dream website, and let's make it happen together`}
							/>
						</section>
					</section>
				</Wrapper>
			</section>

			{/* How we Work */}
			<section className={styles.how_we_work}>
				<Wrapper>
					<section className={styles.container_how_we_work}>
						<h3 className={styles.title}>
							<span className={styles.titleDecoration}>03</span>How We Work
						</h3>
						<p className={styles.subtitle}>The right solution come out from the right process</p>
						<section className={styles.process}>
							<Process
								src='/assets/images/icon_research.png'
								alt='Research Process by Riversun'
								width={236}
								height={181}
								title='Research'
								desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
							/>
							<Process
								src='/assets/images/icon_design.png'
								alt='Design Process by Riversun'
								width={219}
								height={181}
								title='Design'
								desc='Our design has your users in mind, the humans behind the screen. We follow User-centered Design thinking to make sure every design provides the best User Experience possible.'
							/>
							<Process
								src='/assets/images/icon_dev.png'
								alt='Development Process by Riversun'
								width={241}
								height={181}
								title='Development'
								desc='We will bring life to the design we create together, with the latest web technology that not only fast and secure but also reliable. '
							/>
							<Process
								src='/assets/images/icon_testing.png'
								alt='Testing Process by Riversun'
								width={288}
								height={181}
								title='Testing'
								desc='To make sure that we’ve hit all the checkmarks, we love to do user testing with some of your potential customers. This will help us determine what’s good and what’s can be improved.'
							/>
						</section>
					</section>
				</Wrapper>
			</section>

			{/* Featured Projects */}
			<section className={styles.featured_projects}>
				<Wrapper>
					<section className={styles.container_featured_projects}>
						<h3 className={styles.title}>
							<span className={styles.titleDecoration}>04</span>Featured Projects
						</h3>
						<p className={styles.subtitle}>
							Some of the projects we've made with our amazing clients
						</p>
						<section className={styles.projects}>
							<Project
								src='/assets/images/FP1.webp'
								width={505}
								height={607}
								alt='Project Acil'
								title='Our Journey With Plant Story App'
								link='/'
								tag='#STUDY CASE 1'
							/>
							<Project
								src='/assets/images/FP1.webp'
								width={505}
								height={607}
								alt='Project Acil'
								title='Our Journey With Plant Story App'
								link='/'
								tag='#STUDY CASE 1'
							/>
							<Project
								src='/assets/images/FP1.webp'
								width={505}
								height={607}
								alt='Project Acil'
								title='Our Journey With Plant Story App'
								link='/'
								tag='#STUDY CASE 1'
							/>
						</section>
					</section>
				</Wrapper>
			</section>
		</main>
	)
}
