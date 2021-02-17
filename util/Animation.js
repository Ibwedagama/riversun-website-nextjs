export function gsapAnimation() {
	let tl = gsap.timeline({ defaults: { ease: 'expo.out', opacity: 0 } })
	tl.from('#hero-image', { x: '100%', delay: 0.5, duration: 2.5 })
		.from('.hero-title', { y: '100%', stagger: 0.4, duration: 1.3 }, '<.5')
		.from('.hero-decoration', { duration: 1.5 }, '<1.5')

	gsap.from('.section-1', {
		scrollTrigger: { trigger: '.section-1', start: 'top center' },
		ease: 'expo.out',
		duration: 0.8,
		x: '-50',
		opacity: 0,
		stagger: 0.3,
	})

	gsap.from('.section-2', {
		scrollTrigger: { trigger: '.section-2', start: 'top center' },
		ease: 'expo.out',
		duration: 0.8,
		x: '50',
		opacity: 0,
		stagger: 0.3,
	})

	gsap.from('.section-3', {
		scrollTrigger: { trigger: '.section-3', start: 'top center' },
		ease: 'expo.out',
		duration: 0.8,
		y: '50',
		opacity: 0,
		stagger: 0.3,
	})

	gsap.from('.section-4', {
		scrollTrigger: { trigger: '.section-4', start: 'top center' },
		ease: 'expo.out',
		duration: 0.8,
		x: '-50',
		opacity: 0,
		stagger: 0.3,
	})

	let tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top center',
		},
	})

	tl2.from('.footer-links', {
		y: '10',
		opacity: 0,
		duration: 0.5,
		stagger: 0.2,
		ease: 'power2.out',
		delay: 1,
	})
}