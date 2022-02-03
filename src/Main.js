import React from "react";
import Groceries from "./Groceries";
import CreateForm from "./CreateForm";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Acme Groceries</h1>
      <Link to='/counter'> Switch to Counter </Link>
      <Nav />
      <Groceries />
      <CreateForm />
    </div>
  );
};

export default Main