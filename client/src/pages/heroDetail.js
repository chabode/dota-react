import React from 'react'
import { useLocation } from 'react-router-dom'
import DotaCard from '../components/dotaCard'

const HeroDetail = ({match}) => {
    const location = useLocation()
    
    // const {id, localized_name, img, base_agi, base_str, base_int} = location.state.hero
    const {hero} = location.state

    const clickButton = () => {
        console.log('Cek aja gan')
    }

    return (
        <>
        {/* <p>Tes aja {match.params.id}</p> */}
        <DotaCard hero={hero}>
            <button onClick={clickButton}>Test aja</button>
        </DotaCard>
        
        </>
    )
}

export default HeroDetail