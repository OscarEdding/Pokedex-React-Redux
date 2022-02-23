import React from "react"

import { useSelector } from "react-redux"

import PokeCards from "../PokeCards"
import Buttons from "../Buttons"
import ErrorPokeGrid from "./ErrorPokeGrid"

import SearchBar from "../SearchBar"

const PokeGrid = () => {
	const pokemons = useSelector((store) => store.pokemons.results)

	return (
		<div className="container flex-wrap">
			<div>
				<ErrorPokeGrid />
				<div className="d-flex justify-content-between search-box">
					{
						pokemons.length !== 0 && 
							<SearchBar />
					}
				</div>
				<Buttons />
			</div>
			<PokeCards />
			<div>
				<Buttons />
			</div>			
		</div>
	)
}

export default PokeGrid
