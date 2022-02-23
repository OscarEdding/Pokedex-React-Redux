import axios from 'axios'

const initialData = {
    count: 0,
    next: null,
    previous: null,
    results: [],
}

const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const NEXT_POKE_SUCCESS = 'NEXT_POKE_SUCCESS'
const PREV_POKE_SUCCESS = 'PREV_POKE_SUCCESS'
const POKE_INFO_SUCCESS = "POKE_INFO_SUCCESS"
const SEARCH_POKE_SUCCESS = "SEARCH_POKE_SUCCESS"

export default function pokeReducer(state = initialData, action) { 
    switch(action.type) {
        case GET_POKE_SUCCESS:
            return {...state, ...action.payload.res, data: action.payload.data, des: action.payload.des}

        case NEXT_POKE_SUCCESS:
            return {...state, ...action.payload.res, data: action.payload.data}

        case PREV_POKE_SUCCESS:
            return {...state, ...action.payload.res, data: action.payload.data}

        case POKE_INFO_SUCCESS:
            return {...state, pokeInfo: action.payload}
        
        case SEARCH_POKE_SUCCESS:
            return {...state, searchPokemon: action.payload}

        default:
            return state
    }
}

export const getPokeAction = () => async (dispatch) => {

    if(localStorage.getItem('offset=0')) {
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=30`)
        const data = await Promise.all (
            res.data.results.map(async (item) => {
                return await axios.get(item.url)
            })
        )
        const des = await Promise.all (
            data.map(async (item) => {
                return await axios.get(item.data.species.url)
            })
        )
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: {
                res: res.data,
                data: data,
                des: des
            }
        })
        localStorage.setItem('offset=0', JSON.stringify({
            res: res.data,
            data: data,
            des: des
        }))
    } catch (error) {
        console.log(error);
    }
}

export const nextPokeAction = () => async (dispatch, getState) => {
    
    const {next} = getState().pokemons
    
    if(localStorage.getItem(next)) {
        dispatch({
            type: NEXT_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        const res = await axios.get(next)
        const data = await Promise.all (
            res.data.results.map(async (item) => {
                return await axios.get(item.url)
            })
        )
        const des = await Promise.all (
            data.map(async (item) => {
                return await axios.get(item.data.species.url)
            })
        )
        dispatch ({
            type: NEXT_POKE_SUCCESS,
            payload: {
                res: res.data,
                data: data,
                des: des
            }
        })
        localStorage.setItem(next, JSON.stringify({
            res: res.data,
            data: data,
            des: des
        }))
    } catch (error) {
        console.log(error);
    }
}

export const prevPokeAction = () => async (dispatch, getState) => {

    const {previous} = getState().pokemons

    if(localStorage.getItem(previous)) {
        dispatch({
            type: PREV_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        const data = await Promise.all (
            res.data.results.map(async (item) => {
                return await axios.get(item.url)
            })
        )
        const des = await Promise.all (
            data.map(async (item) => {
                return await axios.get(item.data.species.url)
            })
        )
        dispatch ({
            type: PREV_POKE_SUCCESS,
            payload: {
                res: res.data,
                data: data,
                des: des
            }
        })
        localStorage.setItem(previous, JSON.stringify({
            res: res.data,
            data: data,
            des: des
        }))
    } catch (error) {
        console.log(error);
    }
}

export const pokeInfoAction = (url = null) => async (dispatch, getState) => {

    if(localStorage.getItem(url)) {

        dispatch({
            type: POKE_INFO_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    }

    try {
        const res = await axios.get(url)
        dispatch({
            type: POKE_INFO_SUCCESS,
            payload: {
                photo: res.data.sprites.front_default,
                id: res.data.id,
                name: res.data.name,
                height: res.data.height,
                weight: res.data.weight,
                type: {
                    types: res.data.types,
                }
            }
        })
        localStorage.setItem(url, JSON.stringify({
            photo: res.data.sprites.front_default,
            id: res.data.id,
            name: res.data.name,
            height: res.data.height,
            weight: res.data.weight,
            type: {
                types: res.data.types,
            }
        }))
    } catch (error) {
        console.log(error);
    }
}

export const searchPokeAction = (search) => async (dispatch) => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${search}`
        const res = await fetch(url)
        const data = await Promise.all (
            res.data.results.map(async (item) => {
                return await axios.get(item.url)
            })
        )
        dispatch({
            type: SEARCH_POKE_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}