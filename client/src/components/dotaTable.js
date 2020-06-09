import React, { Component } from 'react';

class DotaTable extends Component{
  constructor() {
    super()
    this.state = {
        heroList: []
    }
  }

  getHeroesList() {
    fetch('https://api.opendota.com/api/heroStats')
    .then(response => 
        response.json()
    )
    .then(hero => {
        console.log(hero)
        this.setState({ heroList : hero })
    })
    .catch(err => {
        console.log(err)
    })
  }

  componentDidMount() {
    this.getHeroesList()
  }

  image_url(value) {
    return 'https://api.opendota.com' + value
  }

  winrate(value1, value2) {
    let winrate = value1/value2 * 100
    return winrate.toFixed(2)
  }

  getHeroesDuration(value) {
    const id = Number(value)
    fetch(`https://api.opendota.com/api/heroes/${id}/durations`)
    .then(response => response.json())
    .then(duration => {
      console.log(duration)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { heroList } = this.state
    return (
        <div>
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
                                <td><img src={this.image_url(hero.icon)} alt="icon"></img> </td>
                                <td>{ this.winrate(hero.pro_win, hero.pro_pick)}%</td>
                                <td><button onClick={() => this.getHeroesDuration(hero.id)}
                                className="btn btn-info">Duration Played</button> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
  }
}

export default DotaTable