import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProductsFetch } from '../../services/actions/actions';
import styles from './products.module.css'

function Products() {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.reducers);
  useEffect(() => {
    dispatch(getProductsFetch());
  }, [])

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }
  const getDate = (str) => {
    const date = new Date(str);
    return date.toLocaleString('ru', options)
  }

  return (
    <div className={styles.container}>
      <ul
        className={styles.list}
      >
        {products && products.map((product) => {
          return (
            <li 
              className={styles.item}
              key={product._id}
            >
              <p className={styles.text}>
              <span className={styles.title}>ID: </span>{product._id}
              </p>
              <p className={styles.text}>
                <span className={styles.title}>Created: </span>
                {getDate(product.createdAt)}
              </p>
              <p className={styles.text}>
                <span className={styles.title}>Name: </span>
                {product.name}
              </p>
              <p className={styles.text}>
                <span className={styles.title}>Description: </span>
                {product.description}
              </p>
              <p className={styles.text}>
                <span className={styles.title}>Parameter One: </span>
                {product.parameters.parameterOne}
              </p>
              <p className={styles.text}>
                <span className={styles.title}>Parameter Two: </span>
                {product.parameters.parameterTwo}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Products;
