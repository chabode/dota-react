import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h3>Dota Heroes List</h3>
                {this.props.children}
            </div>
        )
    }
}

export default Navbar