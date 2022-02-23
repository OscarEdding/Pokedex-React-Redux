import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<div>
            <footer className="text-white py-4 bg-dark">
                <div className="mr-5">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex aling-items-center justify-content-center mt-4">
                            <img src="./img/pokemon.png" className="mx-2" height='80' alt="" />
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center">History</li>
                            <li className="text-center">
                                Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator.
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center">Links</li>
                            <li className="text-center">
                                <Link to='/' className="text-reset">Home</Link>
                            </li>
                            <li className="text-center">
                                <Link to='/pokemons' className="text-reset">Pokedex</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center">Follow us</li>
                            <li className="d-flex justify-content-between ml-5 mr-5">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-youtube"></i>
                            </li>
                        </ul>
                        <div className="ml-5 mr-5">
                            <p className="text-center mb-0 mt-2">In April 1998, Pokémon Center Co., Ltd. is established by the original authors of Pokémon: 
                            Nintendo Co., Ltd., Creatures Inc. and GAME FREAK Inc. The company name was changed to The Pokémon Company in October 2000. Since 
                            then, our business activities have expanded to overall management of the Pokémon brand.</p>
                        </div>
                    </nav>
                </div>
            </footer>
		</div>
	)
}

export default Footer
