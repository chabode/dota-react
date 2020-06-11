import React from 'react'
import { useLocation } from 'react-router-dom'
import DotaCard from '../components/dotaCard'
import { addFavList } from '../store/actions/favouriteAction'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

const HeroDetail = (props) => {
    const location = useLocation()
    
    // const {hero} = location.state
    const { state : {hero}} = location

    const clickButton = () => {
        mySwal.fire('Success','Added to Favourite List','success')
        props.addFavList(hero)
        console.log('Added to favourite > ', hero)
    }

    return (
        <>
        <h4>Detailed Heroes Info</h4>
        <DotaCard hero={hero}>
            <button onClick={clickButton}>Add to Favourite</button>
        </DotaCard>
        </>
    )
}

const mapDispatchToProps = {
    addFavList
}

export default connect(null, mapDispatchToProps)( HeroDetail)