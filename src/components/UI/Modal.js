import React from 'react';
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
    const Backdrop = (props)=>{
        return <div className={styles.backdrop} onClick={props.onHideCart}/>
    }
    const ModalOverlay = (props)=>{
        return <div className={styles.modal}>{props.children}</div>
    }
    const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
