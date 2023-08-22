import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"



import TodoIndex from './components/TodoIndex';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';
import Tododelete from './components/Tododelete';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={TodoIndex} exact />
            <Route path="/todo/index" component={TodoIndex} exact />
            <Route path="/todo/create" component={TodoCreate} exact />
            <Route path="/todo/edit/:id" component={TodoEdit} exact />
            <Route path="/todo/delete/:id" component={Tododelete} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;