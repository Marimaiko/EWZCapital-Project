// Dependências
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componentes
import { Header } from './components/header';
import { Todos } from './components/todos';
import { Users } from './components/users';

import { UsersContext } from './context/UsersContext';
import { api } from './services/api';

// GlobalStyle 
import './styles/global.scss';

function App() {
  const [ usersData, setUsersData ] = useState([])

  useEffect(() => {
    api.get('users')
      .then((response) => {
        setUsersData(response.data)
      })
      .catch(() => {
        console.log('erro')
      })
  }, [])

  return (
    <UsersContext.Provider value={usersData}>
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
    </UsersContext.Provider>
  );
}

export default App;
