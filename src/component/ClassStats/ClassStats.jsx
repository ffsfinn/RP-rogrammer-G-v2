import React, { Component } from 'react';
import styles from './ClassStats.module.css'

export default class ClassStats extends Component {

    handlePlayerClick = props => {
        let stats = [];
        
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