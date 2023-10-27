import React from 'react'
import styles from '@/components/Loader/loader.module.css'
const Loader = () => {
  return (<>
    <div  className={styles.mask}></div>
    <img className={styles.img}  src="loader.gif"/>
    </>
  )
}
export default Loader
