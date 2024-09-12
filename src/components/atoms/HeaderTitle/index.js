import React from 'react'
import styles from './styles.module.css'

function HeaderTitle() {
  return (
    <>
       <p className={styles.title}>Sign in or sign up</p>
      <p className={styles.subTitle}>Let's get you started for your transactions.</p>
    </>
  )
}

export default HeaderTitle