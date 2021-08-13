import { useEffect, useState } from 'react';
import { TodosCard } from '../todosCard';
import { api } from '../../services/api';

import style from './style.module.scss';

export function Todos(props) {
  const [ todosData, setTodosData ] = useState([])

  useEffect (() => {
    api.get('todos', {
      params: {_limit: 15}
    })
      .then((response) => {
        setTodosData(response.data)
      })
      .catch(() => {
        console.log('erro')
      })
  }, [])

  return (
    <>
      <h2 className={style.TodosTitle}>Todos os todos</h2>

      {todosData.map((todos, key) => {
        return (
          <div className={style.TodosCard}>
            <TodosCard 
              key={todos.id}
              spanColor={todos.completed}
              title={todos.title}
              userId={todos.userId}
              classname={style.TodosCard}
            />
           </div>
        )
      })}
    </>
  )
}