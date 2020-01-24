import React, { Component } from 'react';
import userService from '../../utils/userService';
import styles from './ClassStats.module.css';

export default class ClassStats extends Component {

    constructor() {
        super();
        this.state = {
          user: userService.getUser()
        };
      }

    handlePlayerClick = props => {

        console.log(this.state.user)
    }

    render() {
        return(

        <div className={styles.classStats}>
            <button className={styles.classButtons} onClick={this.handlePlayerClick}>Warrior</button>
            <button className={styles.classButtons} onClick={this.handlePlayerClick}>Mage</button>
            <button className={styles.classButtons} onClick={this.handlePlayerClick}>Archer</button>
            <button className={styles.classButtons} onClick={this.handlePlayerClick}>Thief</button>
        </div>


        )
    }

}