import React from 'react'
import logo from '../images/YU_LikeLion.png'


const Logo = () => {
  const styles = {
    container: "flex justify-center p-2 mt-4",
    logo: "w-12 h-12 object-contain",
    textContainer: "ml-2 text-2xl flex flex-col",
    mainText: "text-2xl tracking-wide font-extrabold text-blue-900",
    subText: "text-blue-800 text-xs font-serif",
  };

  return (
    <div className={styles.container}>
      <img
        src={logo} 
        alt="영남대학교" 
        className={styles.logo} 
      />
      <div className={styles.textContainer}>
        <span className={styles.mainText}>영남대학교</span>
        <span className={styles.subText}>Yeungnam University</span>
      </div>
    </div>
  )
}

export default Logo