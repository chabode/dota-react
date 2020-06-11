import React from 'react'
import { connect } from 'react-redux'

const FavouriteList = (props) => {
    
    const {favList} = props
    return (
        <>
        <h3>Favourite Heroes</h3>
        {favList.length === 0 && <p>No Favourite Hero Detected</p>}
        {favList.length > 0 && 
        <table border="1">
            <thead>
                <tr>
                    <th>Heroes</th>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
            {favList.map((favHero) => {
                return (
                    <tr key={favHero.id}>
                        <td><img src={`https://api.opendota.com${favHero.img}`} alt="heroes"></img></td>
                        <td>{favHero.localized_name}</td>
                        <td>{favHero.attack_type}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        favList: state.favouriteReducer.favList
    }
}
export default connect(mapStateToProps, null)( FavouriteList)