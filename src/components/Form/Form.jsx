export const Form = () => {
  return (
      <form className='Form'>
        <div className='Form__controls'>
          <select className='From__select select' name='change-author'
                  id='change-author'>
            <option className='select__option' defaultChecked>Выбор автора</option>
          </select>
        </div>
        <div className='Form__controls'>
          <input className='Form__input' type='number' name='from' id='from' placeholder='От'/>
          <span className='separator'>-</span>
          <input className='Form__input' type='to' name='from' id='to' placeholder='До' />
        </div>
      </form>
  );
};
