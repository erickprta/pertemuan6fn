import React from 'react'
import styles from './Movie.module.css'

const Movie = (props) => {
    const { title, date, image } = props
  return (
    <div className={styles.movie}>
    <img 
    className={styles.movies__image}
    src={image}
    alt=""/>
    <h3 className={styles.movies__tittle}>{title}</h3>
    <p className={styles.movies__date}>{date}</p>
    </div>
  )
}

export default Movie;