import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setHeroes } from '../store/actions/heroAction'

const DotaTable = (props) => {
  
  const history = useHistory()
  
  useEffect( () => {
    props.setHeroes()
    //eslint-disable-next-line
  },[])

  function image_url(value) {
    return 'https://api.opendota.com' + value
  }

  function winrate(value1, value2) {
    let winrate = value1/value2 * 100
    return winrate.toFixed(2)
  }

  const heroDetail = (value) => {
    history.push({pathname: `/heroes/${value.id}`, state: {hero:value}})
    console.log(value)
  }

  const { heroList } = props
  
  return (
    <>
      <h2 data-testid='heroes-dota'>Dota Heroes List</h2>
      <table border='1' data-testid='table-dota'>
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

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    heroList: state.heroReducer.heroList
  }
}

const mapDispatchToProps = {
  setHeroes
}

export default connect(mapStateToProps, mapDispatchToProps)(DotaTable)