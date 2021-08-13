// Dependências
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componentes
import { Header } from './components/header';
import { Todos } from './components/todos';
import { Users } from './components/users';

// GlobalStyle 
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route 
          exact
          path='/todos'
          component= {Todos}
        />
        <Route 
          exact
          path='/users'
          component={Users}
        />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
