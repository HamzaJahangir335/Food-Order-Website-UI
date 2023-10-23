import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNum, item)=>{
    return curNum + item.amount;
  }, 0)

  const btnClassses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;
  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(()=>{
      setButtonIsHighlighted(false);
    }, 300)
    return()=>{
      clearTimeout(timer);
    }
  }, [items])
  return (
    <button className={btnClassses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Items</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
