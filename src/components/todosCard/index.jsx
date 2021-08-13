import style from './style.module.scss';

export function TodosCard(props) {
  const { title, userId, spanColor } = props

  return (
    <div className={style.TodosCardContainer}>

    {spanColor ? (
      <span className={style.trueColor}/>
    ) : (
      <span className={style.falseColor}/>
    )}

      <p>Título: {title}</p>
      <p>Responsável: {userId}</p>
    </div>
  )
}