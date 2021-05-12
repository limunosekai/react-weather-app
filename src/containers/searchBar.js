import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/index';

function searchBar() {
  const dispatch = useDispatch();

  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.currentTarget.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(term));
    setTerm('');
  };

  return (
    <form className='input-group' onSubmit={onFormSubmit}>
      <input
        className='form-control'
        placeholder='도시명을 검색하세요.'
        onChange={onInputChange}
        value={term}
      />
      <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>
          Submit
        </button>
      </span>
    </form>
  );
}

export default searchBar;
