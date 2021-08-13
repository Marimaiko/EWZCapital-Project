import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <h3>TodosTest</h3>
        <nav>
          <Link to='/todos'>todos</Link>
          <Link to= '/users'>usuários</Link>
        </nav>
      </div>
    </header>
  )
}