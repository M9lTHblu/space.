import React from 'react';
import './Form.scss';

export const Form = () => {

  return (
      <form className='Form'>
        <div className='Form__controls'>
          <select className='From__select select' name='change-author'
                  id='change-author'>
            <option className='select__option' defaultChecked>Выбор автора
            </option>
          </select>
        </div>
        <div className='Form__controls'>
          <label >
            От
            <input
                className='Form__input'
                type='date'
                name='date'
                id='fromDate'
                placeholder='От'
                defaultValue='hello'
            />
          </label>

          <span className='Form__separator' />
          <label>
            До
            <input className='Form__input'
                   type='date-time-local'
                   name='date'
                   id='toDate'
                   defaultValue=''
                   placeholder='До'
            />
          </label>
        </div>
      </form>
  );
};
