import React from "react"

import { searchPokeAction } from "../redux/pokeReducer"

const SearchBar = () => {

    const [search, setSearch] = React.useState("")
    
	const onChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
        console.log(event.target.value)
	}
    
    const onClick = async (event) => {
        const data = await searchPokeAction(search)
        console.log("esta es mi data", data)
	}

	return (
		<div className="input-group center">
			<div className="form-outline">
				<input type="search" id="form1" className="form-control" placeholder="Enter a pokemon..." value={search} onChange={onChange} />
			</div>
			<button type="button" className="btn btn-primary" onClick={onClick}>
				<i className="fas fa-search"></i>
				Search
			</button>
		</div>
	)
}

export default SearchBar
