import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import Wrapper from '../components/Layout/Wrapper'
import Button from '../components/UI/Button/Button'
import Image from 'next/image'
import Process from '../components/Card/Process'
import Service from '../components/Card/Service'
import Project from '../components/Card/Project'
import SEO from '../components/SEO/SEO'
import { gsapHomeAnimation } from '../util/Animation'
import { gsap } from 'gsap/dist/gsap'

export default function Home() {
  const handleScrollToMain = () => {
    gsap.to(window, { duration: 1.3, scrollTo: '#main', ease: 'expo.out' })
  }
  useEffect(() => {
    gsapHomeAnimation()
  }, [])

  return (
    <main className={styles.home}>
      <SEO title='Riversun Studio - UI/UX Designer and Website Developer' />
      {/* Hero Section */}
      <section className={styles.hero}>
        <Wrapper>
          <section className={styles.container}>
            <section className={styles.heroInfo}>
              <h1 className={`${styles.heroTitle} hero-title`}>
                <span className={`${styles.heroDecoration} hero-decoration`} />
								Welcome to Riversun
							</h1>
              <p className={`${styles.subtitle} hero-title`}>
                We are a team of passionate UI/UX Designer and Website Developer. We will be happy
                to collaborate with you and create something amazing!
							</p>
              <section className='hero-title'>
                <Button label={`KNOW MORE`} icon={true} types='third' action={handleScrollToMain} />
              </section>
            </section>
            <Image
              src='/assets/images/hero_illustration.webp'
              alt='riversun studio illustration'
              width={823}
              height={574}
              layout='responsive'
              id='hero-image'
              className={`${styles.heroImage}`}
            />
          </section>
        </Wrapper>
      </section>

      {/* Who We Are */}
      <section className={styles.who_we_are} id='main'>
        <Wrapper>
          <section className={`${styles.container_who_we_are}`}>
            <h2 className={`${styles.title} section-1`}>
              <span className={`${styles.titleDecoration}`}>01</span>Who We Are
						</h2>
            <p className={`${styles.subtitle} section-1`}>
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
            <h2 className={`${styles.title} section-2`}>
              <span className={styles.titleDecoration}>02</span>What We Make
						</h2>
            <p className={`${styles.subtitle} section-2`}>
              Some of the services we can discuss together
						</p>
            <section className={`${styles.services}`}>
              <section className='section-2'>
                <Service
                  src='/assets/images/ServiceSatu.webp'
                  alt='UI/UX Design Service by Riversun Studio'
                  width={518}
                  height={320}
                  title='UI/UX Design'
                  desc='The right design will make you easier to achieve your goals in the future. By considering UX ( User Experience ) you can create a website or applications that not only work but are also  comfortable and friendly for the users'
                />
              </section>
              <section className='section-2'>
                <Service
                  src='/assets/images/ServiceDua.webp'
                  alt='Website Development Service by Riversun Studio'
                  width={518}
                  height={320}
                  title='Website Development'
                  desc={`The website will make you easier to reach new customers
								in this digital era. Show who you are with a website that describes your self-image. Let's discuss about 
								your dream website, and let's make it happen together`}
                />
              </section>
            </section>
          </section>
        </Wrapper>
      </section>

      {/* How we Work */}
      <section className={styles.how_we_work}>
        <Wrapper>
          <section className={styles.container_how_we_work}>
            <h2 className={`${styles.title} section-3`}>
              <span className={styles.titleDecoration}>03</span>How We Work
						</h2>
            <p className={`${styles.subtitle} section-3`}>
              The right solution come out from the right process
						</p>
            <section className={styles.process}>
              <section className='section-3'>
                <Process
                  src='/assets/images/icon-research.webp'
                  alt='Research Process by Riversun'
                  width={236}
                  height={181}
                  title='Research'
                  desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/assets/images/icon-design.webp'
                  alt='Design Process by Riversun'
                  width={219}
                  height={181}
                  title='Design'
                  desc='Our design has your users in mind, the humans behind the screen. We follow User-centered Design thinking to make sure every design provides the best User Experience possible.'
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/assets/images/icon-dev.webp'
                  alt='Development Process by Riversun'
                  width={241}
                  height={181}
                  title='Development'
                  desc='We will bring life to the design we create together, with the latest web technology that not only fast and secure but also reliable. '
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/assets/images/icon-testing.webp'
                  alt='Testing Process by Riversun'
                  width={288}
                  height={181}
                  title='Testing'
                  desc='To make sure that we’ve hit all the checkmarks, we love to do user testing with some of your potential customers. This will help us determine what’s good and what’s can be improved.'
                />
              </section>
            </section>
          </section>
        </Wrapper>
      </section>

      {/* Featured Projects */}

      <section className={styles.featured_projects}>
        <Wrapper>
          <section className={styles.container_featured_projects}>
            <h2 className={`${styles.title} section-4`}>
              <span className={styles.titleDecoration}>04</span>Featured Projects
						</h2>
            <p className={`${styles.subtitle} section-4`}>
              Some of the projects we've made with our amazing clients
						</p>
            {/* <section className={styles.projects}>
              <Project
                src='/assets/images/FP1.webp'
                width={505}
                height={607}
                alt='Project Acil'
                title='Our Journey With Plant Story App'
                link='/'
                tag='#STUDY CASE 1'
              />
              <section className='section-4'>
                <p className={styles.subtitle} style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                  Under Development
								</p>
              </section>
            </section> */}
            <div className={`${styles.fullCard} section-4`}>
              <div className={styles.fullCardOverlay}>
                <div>
                  <p className={`${styles.overlayTitle}`}>Project 1</p>
                  <p className={`${styles.overlaySubtitle}`}>On Progress</p>
                </div>
              </div>
              <Image src='/assets/images/test.jpg' alt='Ongoing Project' layout='fill' objectFit='cover' />
            </div>
          </section>
        </Wrapper>
      </section>
    </main>
  )
}
