import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	Very open-minded person, who loves the game called "Life". Not everybody will like, but nobody else is you!
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;