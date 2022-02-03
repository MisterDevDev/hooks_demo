import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ links })=> {
  return (
    <nav>
      {
        links.map( link => {
          return (
            <a 
              key= { link.href }
              href={ link.href }
              className={ link.selected ? 'selected': ''}>
              { link.text }
            </a>
          );
        })
      }
    </nav>
  );
};

const mapStateToProps = ({ groceries, view })=> {
  const purchased = groceries.filter(grocery => grocery.purchased).length;
  const needed = groceries.filter(grocery => !grocery.purchased).length;
  const all = groceries.length;
  return {
    links: [
      {
        text: `All (${ all })`,
        href: '#',
        selected: view === ''
      },
      {
        text: `Needs (${ needed })`,
        href: '#needs',
        selected: view === 'needs'
      },
      {
        text: `Purchased (${ purchased })`,
        href: '#purchased',
        selected: view === 'purchased'
      }
    ]
  };
};

export default connect(mapStateToProps)(Nav);