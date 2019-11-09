import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Book from './pages/Book';
import Chat from './pages/Chat';
import NoMatch from './pages/NoMatch';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/livro" component={Book} />
        <Route path="/chat/:slug" component={Chat} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
