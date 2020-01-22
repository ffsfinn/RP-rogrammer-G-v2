import React from 'react'
import NavBar from '../NavBar/NavBar'

const GamePage = props => {
    return (
    <div className='GamePage'>
        <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
        />
    </div>
    )
}

export default GamePage;