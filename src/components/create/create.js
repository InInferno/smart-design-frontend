import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postProductFetch } from '../../services/actions/actions';
import styles from './create.module.css'

function Create() {

  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    description: '',
    parameters: {
      parameterOne: '',
      parameterTwo: ''
    }
  });
  const { postProductSuccess } = useSelector(state => state.reducers);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(postProductFetch(data));
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Add Product</p>
      <form
        className={styles.form}
        onSubmit={formHandler}
      >
        <input 
          className={styles.input}
          placeholder='Name'
          name='name'
          onChange={  
            e =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />
        <input 
          className={styles.input}
          placeholder='Description'
          name='description'
          onChange={
            e =>
            setData({
              ...data,
              description: e.target.value,
            })
          }
        />
        <input 
          className={styles.input}
          placeholder='ParameterOne'
          name='parameterOne'
          onChange={  
            e =>
            setData({
              ...data,
              parameters: {
                ...data.parameters,
                parameterOne: e.target.value
              }
            })
          }
        />
        <input 
          className={styles.input}
          placeholder='ParameterTwo'
          name='parameterTwo'
          onChange={
            e =>
            setData({
              ...data,
              parameters: {
                ...data.parameters,
                parameterTwo: e.target.value
              }
            })
          }
        />
        <button
          className={styles.button}
          disabled={!(data.name && data.description && data.parameters.parameterOne && data.parameters.parameterTwo)}
        >Add</button>
      </form>
      {postProductSuccess && 
        <p>New Product added</p>
      }
    </div>
  );
}

export default Create;
