import React, { Component } from 'react';
import { connect } from 'react-redux';
import Groceries from './Groceries';
import CreateForm from './CreateForm';
import { fetchGroceries } from './store';
import Nav from './Nav';
import _Router from './_Router';

class App extends Component{
    componentDidMount(){
      this.props.bootstrap();
      window.addEventListener('hashchange', ()=> {
        this.props.setView(window.location.hash.slice(1));
      })
      this.props.setView(window.location.hash.slice(1));
    }
    render(){
      return (
        <div>
          <_Router />
        </div>
      );
    }
  }

  const mapDispatch = dispatch => {
      return {
        setView: (view)=> dispatch({ type: 'SET_VIEW', view }), 
        bootstrap: ()=> {
          dispatch(fetchGroceries());
      }
  }
}

export default connect(null, mapDispatch)(App);