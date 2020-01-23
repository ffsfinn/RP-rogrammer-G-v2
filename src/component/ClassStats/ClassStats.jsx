import React from 'react';
import styles from './ClassStats.module.css'


const ClassStats = props => (
    <div className={styles.classStats}>
        <button className={styles.classButtons}>Warrior</button>
        <button className={styles.classButtons}>Mage</button>
        <button className={styles.classButtons}>Archer</button>
        <button className={styles.classButtons}>Theif</button>
    </div>

)


export default ClassStats;