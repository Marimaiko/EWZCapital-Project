import style from './style.module.scss';

export function UsersCard(props) {
  const { username, email, phone, website, street, city  } = props

  return (
    <div className={style.UsersCardContainer}>
      <div className={style.UsersCardTop}>
        <span />
        <div>
          <p>{username}</p>
          <p>{website}</p>
        </div>
      </div>
      <div className={style.UsersCardBottom}>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <p>Rua: {street}</p>
        <p>Cidade: {city}</p>
        <button>Ver mais</button>
      </div>
    </div>
  )
}