import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { UsersCard } from "../usersCard";

import style from './style.module.scss';

export function Users(props) {
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
    <>
    <h2 className={style.UsersTitle}>Usuários</h2>

    {usersData.map((user, key) => {
      return (
        <div className={style.UsersCard}>
          <UsersCard 
            key={user.id}
            username={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            street={user.address.street}
            city={user.address.city}
          />
        </div>
      )
    })}
    </>
  )
}