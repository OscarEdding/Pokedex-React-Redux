import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { nextPokeAction, prevPokeAction } from "../redux/pokeReducer"

const Buttons = () => {
	const dispatch = useDispatch()

	const next = useSelector((store) => store.pokemons.next)
	const previous = useSelector((store) => store.pokemons.previous)

	return (
        <div>
            <div className="d-flex justify-content-between button-box">
                {
                    previous && (
                        <button onClick={() => dispatch(prevPokeAction())} className="btn btn-dark">
                            ◀ Previous
                        </button>
                    )
                }

                {
                    !previous && (
                        <button onClick={() => dispatch(prevPokeAction())} className="btn btn-dark hidden-button">
                            ◀ Previous
                        </button>
                    )
                }

                {
                    next && (
                        <button onClick={() => dispatch(nextPokeAction())} className="btn btn-dark">
                            Next ▶
                        </button>
                    )
                }
            </div>
        </div>
	)
}

export default Buttons
