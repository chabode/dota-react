import React from 'react'
import { useSelector } from 'react-redux'

const FavouriteList = () => {
    const favList = useSelector(state => state.favList)
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
                    <tr>
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

export default FavouriteList