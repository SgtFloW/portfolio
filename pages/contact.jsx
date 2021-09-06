import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Lets pretend, you wanna contact me!
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: florian.georg.weismann@gmail.com</li>
			      	<li className="contact-item">Phone: hmmmm... top secret</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;