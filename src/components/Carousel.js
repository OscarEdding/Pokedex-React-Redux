import React from "react"
import { Link } from "react-router-dom"

const Carousel = () => {
	return (
		<div>
			<div id="carouselExampleIndicators" className="carousel slide center" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
				</ol>
				<div className="center-link">
					<Link className="center-link" to="/PokeGrid">
						<button className="btn btn-dark button-center">
							START
						</button>
					</Link>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="./img/00.jpg" className="d-block w-100" alt="" />
					</div>
					<div className="carousel-item">
						<img src="./img/01.jpg" className="d-block w-100" alt="" />
					</div>
					<div className="carousel-item">
						<img src="./img/02.jpg" className="d-block w-100" alt="" />
					</div>
					<div className="carousel-item">
						<img src="./img/03.jpg" className="d-block w-100" alt="" />
					</div>
					<div className="carousel-item">
						<img src="./img/04.jpg" className="d-block w-100" alt="" />
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	)
}

export default Carousel
