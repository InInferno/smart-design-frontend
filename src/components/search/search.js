import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsFetch } from '../../services/actions/actions';
import styles from './search.module.css'

function Search() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [parameterOne, setParameterOne] = useState('');
  const [parameterTwo, setParameterTwo] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log(name, parameterOne, parameterTwo)
    dispatch(getProductsFetch(name, parameterOne, parameterTwo));
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Search product</p>
      <form
        className={styles.form}
        onSubmit={formHandler}
      >
        <input
          className={styles.input} 
          placeholder='Name'
          onChange={e => setName(e.target.value)}
          disabled={parameterOne || parameterTwo}
        />
        <input 
          className={styles.input} 
          placeholder='ParameterOne'
          onChange={e => setParameterOne(e.target.value)}
          disabled={name || parameterTwo}
        />
        <input 
          className={styles.input} 
          placeholder='ParameterTwo'
          onChange={e => setParameterTwo(e.target.value)}
          disabled={name || parameterOne}
        />
        <button
          className={styles.button}
          disabled={!(name || parameterOne || parameterTwo)} 
        >Search</button>
      </form>
    </div>
  );
}

export default Search;
