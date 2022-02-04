import React from 'react';
import { destroyGrocery, toggle, createGrocery } from './store';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

const Groceries = ()=> {

  const myView = useSelector((state) => state.view)


  const { groceries } = useSelector((state) => {
    let filtered = state.groceries;
  if(state.view === 'purchased'){
    filtered = filtered.filter(grocery => grocery.purchased);
  }
  if(state.view === 'needs'){
    filtered = filtered.filter(grocery => !grocery.purchased);
  }
  return {
    groceries: filtered
  };
  })

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={ dispatch(createGrocery) }>Create</button>
      <ul>
        {
          groceries.map( grocery => {
            return (
              <li key={ grocery.id } className={ grocery.purchased ? 'purchased': ''}>
              <span onClick={ ()=> dispatch(toggle(grocery))}>
              { grocery.name } 
              </span>
              <button onClick={()=> dispatch(destroyGrocery(grocery))}>x</button>
              <Link to = {`/item/${grocery.id}`}> Details </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};


export default Groceries;

// const mapStateToProps = ({ view, groceries})=> {
//   let filtered = groceries;
//   if(view === 'purchased'){
//     filtered = filtered.filter(grocery => grocery.purchased);
//   }
//   if(view === 'needs'){
//     filtered = filtered.filter(grocery => !grocery.purchased);
//   }
//   return {
//     groceries: filtered
//   };
// };


// const mapDispatchToProps = (dispatch)=> {
//   return {
//     destroy: (grocery)=>{
//       dispatch(destroyGrocery(grocery));
//     },
//     toggle: (grocery)=>{
//       dispatch(toggle(grocery));
//     }, 
//     create: async()=>{
//       dispatch(createGrocery());
//     }
//   };
// };