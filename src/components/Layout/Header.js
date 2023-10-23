import React from 'react';
import styles from './Header.module.css';
import mealImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
          <h2>ReactMeals</h2>
          <HeaderCartButton onClick={props.onCartIsShown}/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealImg} alt=""/>
      </div>
    </>
  )
}

export default Header