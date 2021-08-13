import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersCard } from "../usersCard";

import style from './style.module.scss';

export function Users(props) {
  const UsersData = useContext(UsersContext)

  return (
    <>
    <h2 className={style.UsersTitle}>Usuários</h2>

    {UsersData.map((user, key) => {
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