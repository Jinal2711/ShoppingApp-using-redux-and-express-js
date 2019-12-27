import React from 'react';
import './App.css';
import CategoryAdmin from './components/categoryAdmin';
import AddEditCategory from './components/addAndEditCategory';
import ProductAdmin from './components/productAdmin';
import addEditProducts from './components/addAndEditProducts';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={CategoryAdmin} />
          <Route path="/add-category" component={AddEditCategory} />
          <Route path="/edit/:id" component={AddEditCategory} />

          <Route path="/product" component={ProductAdmin} />
          <Route path="/add-product" component={addEditProducts} />
        </div>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
