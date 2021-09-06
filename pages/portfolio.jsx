import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      	Incididunt in cillum magna occaecat nisi qui in.
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/car.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">My Car</h4>
			      		<div className="portfolio-category">Audi A3 Coupé 2.0 TSI 150 HP</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/country.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Austria</h4>
			      		<div className="portfolio-category">It's where this boy comes from!</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;