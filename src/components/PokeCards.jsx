import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"

import { pokeInfoAction } from "../redux/pokeReducer"

const PokeCards = () => {
	const dispatch = useDispatch()

	const url = useSelector((store) => store.pokemons.data)
	/* const des = useSelector((store) => store.pokemons.des) */

	return url ? (
		<div className="container">
			<div className="card-container">
				{
					url?.map((item, index) => (
						<Link key={index} className="text-reset cards-box" onClick={() => dispatch(pokeInfoAction(item.config.url))} to="/PokeInfo">
							<div className="">
								<div key={index} className="text-uppercase pokedex-background card-box">
									<img src={item.data.sprites.front_default} alt="" />
									<h5 className="card-title">
										#{item.data.id} {item.data.name}
									</h5>
								</div>
								<div className="card-footer button-card">
									<p className="card-text text-capitalize">
										A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.
									</p>
									{/* {
										des?.map((item_des, index_des) => (
												<p key={index, index_des, item_des} className="card-text text-capitalize">
													{
														index_des === index && (
															{index_des}, {index}
														)
													}
												</p>	
										))
									} */}
								</div>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	) : null
}

export default PokeCards
