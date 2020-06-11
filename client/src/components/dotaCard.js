import React from 'react'

const DotaCard = (props) => {
    // console.log(props)
    const {id, localized_name, img, 
            base_agi, base_str, base_int, roles} = props.hero
    return (
        <div className="dota-card">
            <p>{localized_name}</p>
            <img src={`https://api.opendota.com${img}`} alt="heroes"></img>
            <p>Role: {roles.join(', ')}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>Str</th>
                        <th>Agi</th>
                        <th>Int</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={id}>
                        <td>{base_str}</td>
                        <td>{base_agi}</td>
                        <td>{base_int}</td>
                    </tr>
                </tbody>
            </table>
            {props.children}
        </div>
    )
}

export default DotaCard