import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './styles.module.css'

const ButtonComponent =(props) => {
  return (
    <>
    <Button className={styles.buttonBlue} onClick={props.onClickTop}>{props.top}</Button>
    <Button className={styles.buttonWhite} onClick={props.onClickBottom}>{props.bottom}</Button>
    </>
  )
}

export default ButtonComponent