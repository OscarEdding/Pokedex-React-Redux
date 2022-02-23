import React from "react"

import { useDispatch, useSelector } from "react-redux"

import { getPokeAction } from "../../redux/pokeReducer" 

const ErrorPokeGrid = () => {
	const dispatch = useDispatch()

    const pokemons = useSelector((store) => store.pokemons.results)

	return (
		<div>
			{pokemons.length === 0 && (
				<div className="center">
					<img src="./img/error-pokedex.gif" width="70%" alt="" />
					<button onClick={() => dispatch(getPokeAction())} className="btn btn-dark button-center">
						Get Pokemons
					</button>
				</div>
			)}
		</div>
	)
}

export default ErrorPokeGrid
