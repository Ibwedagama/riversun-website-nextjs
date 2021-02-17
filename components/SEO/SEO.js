import React from 'react'
import Head from 'next/head'

const SEO = ({
	title = 'Riversun Studio - UI/UX Designer and Website Developer',
	desc = 'We are a team of passionate UI/UX Designer and Website Developer based in Yogyakarta, Indonesia. Lets collaborate and create something amazing.',
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='description' content={desc} />
			<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
		</Head>
	)
}

export default SEO
