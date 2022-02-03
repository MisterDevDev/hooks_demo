import React from 'react';
import { destroyGrocery, toggle, createGrocery } from './store';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const _Groceries = ({ groceries, create, toggle, destroy })=> {
  return (
    <div>
      <button onClick={ create }>Create</button>
      <ul>
        {
          groceries.map( grocery => {
            return (
              <li key={ grocery.id } className={ grocery.purchased ? 'purchased': ''}>
              <span onClick={ ()=> toggle(grocery)}>
                  <Link to = {`/item/${grocery.id}`}> { grocery.name } </Link>
              </span>
              <button onClick={()=> destroy(grocery)}>x</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    destroy: (grocery)=>{
      dispatch(destroyGrocery(grocery));
    },
    toggle: (grocery)=>{
      dispatch(toggle(grocery));
    }, 
    create: async()=>{
      dispatch(createGrocery());
    }
  };
};

const mapStateToProps = ({ view, groceries})=> {
  let filtered = groceries;
  if(view === 'purchased'){
    filtered = filtered.filter(grocery => grocery.purchased);
  }
  if(view === 'needs'){
    filtered = filtered.filter(grocery => !grocery.purchased);
  }
  return {
    groceries: filtered
  };
};

const Groceries = connect(mapStateToProps, mapDispatchToProps)(_Groceries);

export default Groceries;