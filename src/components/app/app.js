import React from 'react';
import styles from './app.module.css'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Create from '../create/create';
import Search from '../search/search';
import Products from '../products/products';

function App() {
  return (
    <>
      <h1 className={styles.title}>Smart Design</h1>
      <Routes>
        <Route path="/" exact
          element={
            <div className={styles.container}>
              <Link className={styles.link} to='/products'>
                <p className={styles.text}>Search Product</p>
              </Link>
              <Create />
              <Products />
            </div>
          }
        />
        <Route path='/products'
          element={
            <div className={styles.container}>
              <Link className={styles.link} to='/'>
                <p className={styles.text}>Add Product</p>
              </Link>
              <Search />
              <Products />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
