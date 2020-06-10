import React from 'react'
import { useLocation } from 'react-router-dom'
import DotaCard from '../components/dotaCard'
import { useDispatch } from 'react-redux'

const HeroDetail = ({match}) => {
    const location = useLocation()
    
    // const {id, localized_name, img, base_agi, base_str, base_int} = location.state.hero
    const {hero} = location.state

    const dispatch = useDispatch()

    const clickButton = () => {
        dispatch({
            type: 'ADD_FAVLIST',
            newFavList: hero
        })
        console.log('Cek aja gan isinya apa >', hero)
    }

    return (
        <>
        {/* <p>Tes aja {match.params.id}</p> */}
        <DotaCard hero={hero}>
            <button onClick={clickButton}>Add to Favourite</button>
        </DotaCard>
        </>
    )
}

export default HeroDetail