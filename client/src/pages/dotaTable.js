import React from 'react';
import useDataFetch from '../hooks/dataFetch';
import { useHistory } from 'react-router-dom'

const DotaTable = () => {
  let url = 'https://api.opendota.com/api/heroStats'

  const [heroList, loading, error] = useDataFetch(url)
  const history = useHistory()

  function image_url(value) {
    return 'https://api.opendota.com' + value
  }

  function winrate(value1, value2) {
    let winrate = value1/value2 * 100
    return winrate.toFixed(2)
  }

  // function getHeroesDuration(value) {
  //   const id = Number(value)
  //   fetch(`https://api.opendota.com/api/heroes/${id}/durations`)
  //   .then(response => response.json())
  //   .then(duration => {
  //     console.log(duration)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const heroDetail = (value) => {
    history.push({pathname: `/heroes/${value.id}`, state: {hero:value}})
    console.log(value)
  }

  return (
    <div className="App">
      <h2>Dota Heroes List</h2>
      {loading && <p>Loading....</p>}
      {error && <p>Error nih... {error}</p>}
      <table border='1'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Atribute</th>
            <th>Type</th>
            <th>Picture</th>
            <th>Winrate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {heroList.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td>{ hero.id}</td>
                  <td>{ hero.localized_name }</td>
                  <td>{ hero.primary_attr }</td>
                  <td>{ hero.attack_type }</td>
                  <td><img src={image_url(hero.icon)} alt='icon'></img></td>
                  <td>{ winrate(hero.pro_win, hero.pro_pick) }%</td>
                  <td><button onClick={() => heroDetail(hero)}
                  >Show Detail</button> </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DotaTable