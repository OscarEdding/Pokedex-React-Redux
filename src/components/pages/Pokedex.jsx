import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { pokeInfoAction } from '../../redux/pokeReducer';

const Pokedex = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {

        const fetchData = () => {
            dispatch(pokeInfoAction())
        }
        fetchData()
    }, [dispatch])

    const detailPokemon = useSelector(store => store.pokemons.pokeInfo)
    /* const des = useSelector((store) => store.pokemons.des) */

    return detailPokemon ? (
        <div className="container">
            <div className="card-container">
                <div className="text-reset cards-box-pokedex">
                    <div>
                        <div className='card-box-pokedex'>
                            <img src={detailPokemon.photo} className='img-fluid' alt='' />
                            <div className='card-title name-pokedex'>
                                #{detailPokemon.id} {detailPokemon.name}
                            </div>
                        </div>
                        <div className="card-footer-pokedex button-card">
                            <div>
                                <p className="card-text">
                                    Height: {detailPokemon.height}
                                </p>
                                <p className="card-text">
                                    Weight: {detailPokemon.weight}
                                </p>
                                {  
                                    detailPokemon?.type?.types?.map((item, index) => (
                                        <div key={index} className="card-text">
                                            Type {index+1}: {item?.type?.name}
                                        </div>
                                    )) 
                                }
                            </div>
                            <div className="card-footer button-card">
                                <p className="card-text text-capitalize">
                                    A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.
                                </p>
								{/* {
									des?.map((items, index_des) => (
                                        
                                            <p key={index_des} className="card-text text-capitalize">
                                                {items.data.flavor_text_entries[0].flavor_text}
                                            </p>
                                        
									))
								} */}
							</div>
                        </div>
                    </div>
				</div>
            </div>
        </div>
    ) : null
};

export default Pokedex;
