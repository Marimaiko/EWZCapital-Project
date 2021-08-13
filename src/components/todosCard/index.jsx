import { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import style from './style.module.scss';

export function TodosCard(props) {
  const { title, spanColor, userId } = props

  let RespName = []
  const UserName = useContext(UsersContext)

  UserName.map((name, key) => {
    return (
      RespName.push(name.name)
    )
  })

  console.log()

  return (
    <div className={style.TodosCardContainer}>

    {spanColor ? (
      <span className={style.trueColor}/>
    ) : (
      <span className={style.falseColor}/>
    )}

      <p>Título: {title}</p>
      <p>Responsável: {RespName[{userId}]}</p>
    </div>
  )
}